MangaVerse - Manga Reading Platform
MangaVerse Logo
A universe of manga at your fingertips

🌟 Features
📚 Extensive manga library powered by MangaDex API

🔐� Mobile-responsive design (works on any device)

🔒 User authentication with JWT tokens

❤️ Favorite manga tracking

🔔 Reading progress tracking

🎨 Sleek UI with Tailwind CSS

⚡ Fast performance with React and Node.js

🛠️ Tech Stack
Tech Stack

Frontend: React with TypeScript (TSX)

Styling: Tailwind CSS

Backend: Node.js with Express

Database: MongoDB

Authentication: JWT Tokens

API: MangaDex API integration

📱 Screenshots
Home Page	Manga Reader	User Profile
Home	Reader	Profile
🚀 Getting Started
Prerequisites
Node.js (v14+)

MongoDB Atlas account or local MongoDB

MangaDex API access

Installation
Clone the repository

bash
git clone https://github.com/yourusername/mangaverse.git
cd mangaverse
Install dependencies

bash
npm install
cd client && npm install
Set up environment variables
Create a .env file in the root directory:

MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
MANGADEX_API=https://api.mangadex.org
Run the application

bash
npm run dev
🌐 API Endpoints
Endpoint	Method	Description
/api/auth/register	POST	User registration
/api/auth/login	POST	User login
/api/manga	GET	Fetch manga list
/api/manga/:id	GET	Get manga details
/api/user/favorites	GET	Get user favorites
📱 Mobile Responsiveness
Mobile Demo
Fully responsive design for all screen sizes

🔒 Security Features
JWT token authentication

Password hashing

Protected routes

Rate limiting

📂 Project Structure
mangaverse/
├── client/            # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   └── ...
├── server/            # Node.js backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── ...
├── .env.example       # Environment variables template
└── package.json
🤝 Contributing
Contributions are welcome! Please fork the repository and create a pull request.

📄 License
This project is licensed under the MIT License.

📖 Happy Reading! - The MangaVerse Team 🚀
