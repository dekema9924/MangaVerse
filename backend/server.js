require('dotenv').config();
const express = require('express');
const mangaRouter = require('./routes/MangaRoutes/MangaRoutes');
const port = process.env.PORT || 3000;
const app = express();
const cors = require('cors');
const userRoutes = require('./routes/UserRoutes/userRoutes');
const dbConfig = require('./config/dbConfig');
var cookieParser = require('cookie-parser');
const bookmarkRouter = require('./routes/BookmarkRoutes/BookmarkRoutes');






// Middleware
app.use(cors({
    origin: process.env.NODE_ENV === 'development'
        ? 'http://localhost:5173' // local frontend during development
        : 'https://manga.devwithdaniel.com', // deployed frontend in production
    credentials: true //for  cookies and header
}));
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/manga', mangaRouter)
app.use(userRoutes)
app.use(bookmarkRouter)



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})


