
const express = require('express');
const  popularManga  = require('../../controllers/MangaCotroller/PopularManga');
const weeklyManga = require('../../controllers/MangaCotroller/WeeklyManga');
const completedManga = require('../../controllers/MangaCotroller/CompletedManga');
const mangaDetails = require('../../controllers/MangaCotroller/MangaDetails');
const getChapterImages = require('../../controllers/MangaCotroller/getChapterImages');
const getChapterList = require('../../controllers/MangaCotroller/getChapterList');
const { getMangaChapters } = require('../../controllers/MangaCotroller/getMangaChapters');
const mangaRouter = express.Router();




//routes
mangaRouter.get('/', popularManga)
mangaRouter.get('/weekly', weeklyManga)
mangaRouter.get('/completed', completedManga)
mangaRouter.get('/:id', mangaDetails)
mangaRouter.get('/chapter-images/:chapterId', getChapterImages);
mangaRouter.get('/chapters/:mangaId', getChapterList);
mangaRouter.get('/mangachapters/:mangaId', getMangaChapters);






module.exports = mangaRouter;