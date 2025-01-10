# 🌍 Country Facts Quiz App

Welcome to the **Country Facts Quiz App**, a fun and interactive quiz game to test your knowledge about countries around the world! Built with **Next.js**, this app offers a variety of questions about capitals, currencies, flags, languages, and dialing codes, ensuring an engaging learning experience.

---

## 🖼️ Preview

![Country Facts Quiz Screenshot](https://raw.githubusercontent.com/ramziadem/countriesfacts-quiz/refs/heads/main/src/app/logo1x1.jpeg)

---

## 🚀 Features

- 🌟 **Interactive Quiz**: Answer questions about capitals, currencies, flags, languages, and dialing codes.
- 🎨 **Elegant UI**: A visually appealing interface with smooth transitions.
- 🔊 **Sound Effects**: Engaging audio feedback for button clicks and choices.
- 📊 **Score Tracker**: Tracks your total score, correct answers, and incorrect answers.
- 🔄 **Randomized Questions**: Questions are shuffled for a fresh experience every time.
- 🏆 **30 Questions Per Session**: Test your knowledge with a finite number of questions per session.
- 🖼️ **Flag Display**: Identify countries through their flags.

---

## 📚 Technologies Used

- ✨ **Next.js**: The framework powering the app.
- 🎨 **Tailwind CSS**: For a modern and responsive design.
- 🌐 **Axios**: For fetching country data from the [Country Data API](https://country-data-api.onrender.com).
- 🖼️ **Next.js Image Component**: For optimized image handling.
- 🖱️ **Custom Cursor Effects**: Adds a modern touch to the user experience.
- 

---

## 🛠️ Installation & Usage

- To play the game online : [https://countriesfacts-quiz.onrender.com/](https://countriesfacts-quiz.onrender.com/)

- To play locally : Follow these steps to run the project locally:

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/countries-facts-quiz.git
cd countries-facts-quiz
2️⃣ Install Dependencies

Copy code
npm install
3️⃣ Start the Development Server

Copy code
npm run dev
4️⃣ Open in Browser
Visit http://localhost:3000 to explore the app.

📂 Project Structure

Copy code
  # Custom cursor effects
├── src/                # Root directory for source files
│   ├── app/            # Next.js app directory
│   │   ├── components/ # Reusable React components
│   │   │   ├── CursorEffect.js # Custom cursor effects component
│   │   ├── page.tsx    # Main quiz app page
├── public/             # Static assets (e.g., placeholder flag image)
├── styles/             # Custom styles
├── README.md           # Documentation

🎮 How to Play
Click Start Quiz to begin.
Answer questions by clicking on the correct option.
View your score and feedback after each question.
Complete all 30 questions and see your final results!
📦 API Reference
This app fetches data from the Country Data API. Below is an example of the API response structure:

json
Copy code
{
  "name": "Germany",
  "capital": "Berlin",
  "currency": "Euro",
  "languages": ["German"],
  "flag": "https://flagcdn.com/w320/de.png",
  "region": "Europe",
  "sub_region : "Western Europe",
  "dial_code": "+49"
}
📸 Screenshots
Quiz Question

Results Page

🌟 Future Enhancements
🗺️ Regional Quizzes: Focus on specific regions like Asia, Europe, etc.
⏱️ Timed Questions: Add a timer for each question to increase difficulty.
📊 Leaderboard: Allow users to compare scores globally.
🌐 Multilingual Support: Enable users to take the quiz in different languages.
🤝 Contributing
Contributions are welcome! Follow these steps to contribute:

Fork the repository.
Create a new branch: git checkout -b feature-name.
Commit your changes: git commit -m "Add some feature".
Push to the branch: git push origin feature-name.
Open a pull request.
📄 License
This project is licensed under the MIT License. See the LICENSE file for details.

❤️ Acknowledgments
Thanks to the Country Data API for providing the data.
Inspired by my love for geography and interactive learning tools.
📧 Contact
Feel free to reach out if you have any questions or suggestions:

GitHub: @ramziadem
Email: contact@ramziadem.com
🌟 If you enjoy this project, don’t forget to give it a star on GitHub!

markdown
Copy code

