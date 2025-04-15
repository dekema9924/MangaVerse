
console.log('Require paths:', require.resolve.paths('../../controllers/BookmarkController/addBookmark'));

const express = require('express')
const verifyToken = require('../../middleware/verifyToken')
const DeleteBookmark = require('../../controllers/BookmarkController/DeleteBookmark')
const getBookmark = require('../../controllers/BookmarkController/getBookmark')
const addBookmark = require('../../controllers/BookmarkController/addBookmark')
const bookmarkRouter = express.Router()


bookmarkRouter.post('/addbookmarks', verifyToken, addBookmark)
bookmarkRouter.get('/bookmarks', verifyToken, getBookmark)
bookmarkRouter.delete('/bookmarks/:id', verifyToken, DeleteBookmark)



module.exports = bookmarkRouter