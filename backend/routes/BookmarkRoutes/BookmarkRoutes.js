const path = require('path');
console.log('Trying to load:', path.resolve(__dirname, '../../controllers/BookmarkController/addBookmark'));

const express = require('express')
const verifyToken = require('../../middleware/verifyToken')
const addBookmark = require('../../controllers/BookmarkController/addBookmark')
const deleteBookmark = require('../../controllers/BookmarkController/deleteBookmark')
const getBookmark = require('../../controllers/BookmarkController/getBookmark')
const bookmarkRouter = express.Router()


bookmarkRouter.post('/addbookmarks', verifyToken, addBookmark)
bookmarkRouter.get('/bookmarks', verifyToken, getBookmark)
bookmarkRouter.delete('/bookmarks/:id', verifyToken, deleteBookmark)



module.exports = bookmarkRouter