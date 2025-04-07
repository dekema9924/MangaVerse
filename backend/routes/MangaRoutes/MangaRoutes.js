
const express = require('express');
const  popularManga  = require('../../controllers/MangaCotroller/PopularManga');
const weeklyManga = require('../../controllers/MangaCotroller/WeeklyManga');
const completedManga = require('../../controllers/MangaCotroller/CompletedManga');
const mangaRouter = express.Router();




//routes
mangaRouter.get('/', popularManga)
mangaRouter.get('/weekly', weeklyManga)
mangaRouter.get('/completed', completedManga)




module.exports = mangaRouter;