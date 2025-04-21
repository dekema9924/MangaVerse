# MangaVerse

![MangaVerse Banner](./assets/banner.png) <!-- Replace with actual banner image -->

A modern manga reading platform powered by MangaDex API with user accounts and responsive design.

## ✨ Features

<div align="center">
  <img src="./assets/feature-showcase.gif" alt="Feature showcase" width="800"> <!-- Replace with actual GIF -->
</div>

- **📖 Manga Reader**  
  - Powered by MangaDex API
  - Clean reading interface
  - Chapter navigation
- **🔐 User Accounts**  
  - JWT authentication
  - Favorite tracking
  - Reading progress
- **📱 Responsive Design**  
  - Mobile-first approach
  - Tablet/desktop optimized
- **⚡ Performance**  
  - React virtual lists
  - Image lazy loading

## 🛠 Tech Stack

<div align="center">

| Frontend          | Backend         | Database       | DevOps         |
|-------------------|-----------------|----------------|----------------|
| ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) | ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white) | ![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white) |
| ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) | ![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white) | ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white) | ![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white) |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) | ![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white) |  |  |

</div>

## 📸 Screenshots

<div align="center">

| Light Mode | Dark Mode | Mobile View |
|------------|-----------|-------------|
| ![Light Mode](./screenshots/light.png) | ![Dark Mode](./screenshots/dark.png) | ![Mobile](./screenshots/mobile.png) |

</div>

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- MongoDB 4.4+
- Yarn/npm

### Installation
```bash
# Clone repository
git clone https://github.com/yourusername/mangaverse.git
cd mangaverse

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your credentials

# Start development server
nodemon / node server.js
