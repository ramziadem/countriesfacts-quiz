'use client'

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Image from 'next/image'
import CursorMultiFollow from './components/CursorEffect'
import './style.css'

const CountryQuiz = () => {
  const [countries, setCountries] = useState<
    {
      name: string
      capital: string
      currency: string
      languages: string[]
      flag: string
      region: string
      dial_code: string
    }[]
  >([])
  const [question, setQuestion] = useState<string | null>(null)
  const [options, setOptions] = useState<string[]>([])
  const [correctAnswer, setCorrectAnswer] = useState<string | null>(null)
  const [score, setScore] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [incorrect, setIncorrect] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [questionCount, setQuestionCount] = useState(0)
  const maxQuestions = 30

  const placeholderFlag = '/placeholder-flag.png' // Provide a valid placeholder image path.

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://country-data-api.onrender.com/countries')
        setCountries(response.data)
      } catch (error) {
        console.error('Error fetching countries:', error)
      }
    }

    fetchCountries()
  }, [])

  const playSound = () => {
    const audio = new Audio('/sounds/mouse-click.mp3') // Add your sound file here.
    audio.play()
  }

  const generateQuestion = () => {
    if (countries.length === 0 || questionCount >= maxQuestions) return

    const randomCountry = countries[Math.floor(Math.random() * countries.length)]
    const questionType = Math.floor(Math.random() * 5)

    let correctAnswer = ''
    let options: string[] = []
    let questionText = ''

    switch (questionType) {
      case 0:
        questionText = `What is the capital of ${randomCountry.name}?`
        correctAnswer = randomCountry.capital
        options = getRandomOptions('capital', randomCountry.capital)
        break
      case 1:
        questionText = `What is the currency of ${randomCountry.name}?`
        correctAnswer = randomCountry.currency
        options = getRandomOptions('currency', randomCountry.currency)
        break
      case 2:
        questionText = `Which language is spoken in ${randomCountry.name}?`
        correctAnswer = randomCountry.languages[0]
        options = getRandomOptions('languages', randomCountry.languages[0])
        break
      case 3:
        questionText = `Which flag belongs to ${randomCountry.name}?`
        correctAnswer = randomCountry.flag
        options = getRandomOptions('flag', randomCountry.flag)
        break
      case 4:
        questionText = `What is the dialing code of ${randomCountry.name}?`
        correctAnswer = randomCountry.dial_code
        options = getRandomOptions('dial_code', randomCountry.dial_code)
        break
      default:
        break
    }

    setQuestion(questionText)
    setCorrectAnswer(correctAnswer)
    setOptions(shuffleArray([correctAnswer, ...options.filter((o) => o !== correctAnswer)]))
    setAnswered(false)
    setQuestionCount((prev) => prev + 1)
  }

  const getRandomOptions = (type: string, correctAnswer: string) => {
    const options = [correctAnswer]
    while (options.length < 4) {
      const randomCountry = countries[Math.floor(Math.random() * countries.length)]
      const option = type === 'capital'
        ? randomCountry.capital
        : type === 'currency'
        ? randomCountry.currency
        : type === 'languages'
        ? randomCountry.languages[0]
        : type === 'flag'
        ? randomCountry.flag
        : randomCountry.dial_code

      if (option && !options.includes(option)) {
        options.push(option)
      }
    }
    return options
  }

  const validateFlagUrl = (url: string) => {
    return url && url.endsWith('.png') ? url : placeholderFlag
  }

  const shuffleArray = (array: string[]) => array.sort(() => Math.random() - 0.5)

  const handleAnswer = (selectedAnswer: string) => {
    if (!answered) {
      playSound() // Play sound when an answer is clicked.
      if (selectedAnswer === correctAnswer) {
        setScore(score + 1)
        setCorrect(correct + 1)
      } else {
        setIncorrect(incorrect + 1)
      }
      setAnswered(true)
    }
  }

  return (
    <div id='main' className="flex items-center justify-center p-4">
      <CursorMultiFollow />
      <div className="w-full max-w-2xl bg-gradient-to-br from-[#162c81] to-[#0d1447]  rounded-lg shadow-md p-6 opacity-70">
        <h1 className="text-2xl font-bold text-center text-cyan-400">Country Quiz</h1>
        <div className="text-center my-4">
          <p className='text-blue-300'>Questions Answered: {questionCount}/{maxQuestions}</p>
          <p className='text-green-300'>Score: {score}</p>
          <p className='text-green-400'>Correct Answers: {correct}</p>
          <p className='text-rose-300'>Incorrect Answers: {incorrect}</p>
        </div>
        {question && !answered ? (
          <div className='text-cyan-200 font-bold'>
            <h2 className="text-lg font-bold text-blue-100 my-4"><b>{question}</b></h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {options.map((option, index) =>
                question.includes('flag') ? (
                  <li
                    key={index}
                    onClick={() => handleAnswer(option)}
                    className="p-4 border rounded-lg cursor-pointer hover:bg-blue-50 hover:text-cyan-950 flex items-center justify-center"
                  >
                    <Image
                      src={validateFlagUrl(option)}
                      alt="Option"
                      className="w-16 h-16 object-contain"
                      width={64}
                      height={64}
                    />
                  </li>
                ) : (
                  <li
                    key={index}
                    onClick={() => handleAnswer(option)}
                    className="p-4 border rounded-lg cursor-pointer hover:bg-blue-50 hover:text-cyan-950"
                  >
                    {option}
                  </li>
                )
              )}
            </ul>
          </div>
        ) : (
          <div className="text-center">
            {answered && (
              <div className="my-4">
                {question && question.includes('flag') ? (
                  <Image
                    src={validateFlagUrl(correctAnswer || '')}
                    alt="Correct Flag"
                    className="w-32 h-32 object-contain mx-auto"
                    width={128}
                    height={128}
                  />
                ) : (
                  <p className="text-xl text-cyan-200 font-bold">
                    Correct Answer: {correctAnswer}
                  </p>
                )}
              </div>
            )}
            {questionCount < maxQuestions ? (
              <button
                onClick={() => {
                  playSound() // Play sound when button is clicked.
                  generateQuestion()
                }}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
              >
                {answered ? 'Next Question' : 'Start Quiz'}
              </button>
            ) : (
              <>
                <p className="text-xl font-medium text-red-600">Quiz Completed!</p>
                <button
                  onClick={() => {
                    playSound() // Play sound when button is clicked.
                    window.location.reload()
                  }}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                >
                  Restart Quiz
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default CountryQuiz
