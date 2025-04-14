

const express = require('express')
const verifyToken = require('../../middleware/verifyToken')
const bookmarkRouter = express.Router()
const addBookmark = require('../../controllers/BookmarkController/Bookmark')
const GetBookmarks = require('../../controllers/BookmarkController/getBookmarks')


bookmarkRouter.post('/addbookmarks', verifyToken, addBookmark)
bookmarkRouter.get('/bookmarks', verifyToken, GetBookmarks)




module.exports = bookmarkRouter