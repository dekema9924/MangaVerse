require('dotenv').config();
const express = require('express');
const mangaRouter = require('./routes/MangaRoutes/MangaRoutes');
const port = process.env.PORT || 3000;
const app = express();
const cors = require('cors');




// Middleware
app.use(cors({
    origin: 'https://m0ngaverse.netlify.app',
    
}));
app.use('/manga', mangaRouter)



app.listen(port, () => {    
    console.log(`Server is running on port ${port}`);
})


