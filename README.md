MangaVerse 📖

A modern Manga Reading web application powered by the MangaDex API.
Built with React, TypeScript, Node.js, MongoDB, and Tailwind CSS — fully mobile responsive 📱.

Users can browse, read manga, and create an account securely using JWT authentication.



✨ Features

🔎 Explore Manga — Browse thousands of manga directly from the MangaDex API

📖 Read Manga — Smooth, mobile-friendly manga reader

🔒 User Authentication — Create accounts and login securely with JWT tokens

🧑‍💻 Save Progress — Track your reading and favorites

📱 Fully Responsive — Optimized for desktop, tablet, and mobile

🚀 Fast and Lightweight — Built with React, TSX, Tailwind, and Node.js backend

🖼️ Beautiful UI — Clean design with dynamic loading, custom icons, and seamless transitions

🛠️ Tech Stack

Frontend

Backend

Database

Authentication

Styling

Hosting

React (TSX)

Node.js (Express)

MongoDB Atlas

JWT (JSON Web Token)

Tailwind CSS

(Coming soon...)

📸 Screenshots

Home Page

Manga Reader

Account System







(Replace with your real screenshots once available.)

✨ Installation & Setup

1. Clone the repository

git clone https://github.com/yourusername/mangaverse.git
cd mangaverse

2. Frontend Setup

cd client
npm install
npm run dev

3. Backend Setup

cd server
npm install
npm run dev

4. Environment Variables

Create a .env file in /server:

MONGO_URI=your_mongodb_connection
JWT_SECRET=your_jwt_secret
MANGADEX_API_URL=https://api.mangadex.org

📚 API Reference

MangaDex API — https://api.mangadex.org/docs

We fetch:

Manga titles

Chapter lists

Manga cover art

Pages for reading

📱 Mobile View

MangaVerse is fully responsive for mobile users!

Manga pages auto-fit to screen

Touch/swipe navigation enabled

Fast loading and lazy image fetching

🔒 Authentication

Passwords are hashed and securely stored in MongoDB

Users get JWT tokens for secure login sessions

Protected routes for personal data (reading progress, favorites)

🎨 Icons & Assets

Heroicons

Phosphor Icons

Custom MangaVerse logo (coming soon)

🛡️ Future Features

📥 Download manga chapters offline

💬 Comment sections

🌗 Dark mode

🏆 Leaderboards for most popular manga

🔔 Notification system

👨‍💻 Author

Built by [Your Name Here]

Feel free to contribute! PRs welcome ✨

📄 License

This project is licensed under the MIT License.

🌟 MangaVerse — Your ultimate manga reading experience.
