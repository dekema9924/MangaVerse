
console.log('Require paths:', require.resolve.paths('../../controllers/BookmarkController/addBookmark'));

const express = require('express')
const verifyToken = require('../../middleware/verifyToken')
const deleteBookmark = require('../../controllers/BookmarkController/deleteBookmark.js')
const getBookmark = require('../../controllers/BookmarkController/getBookmark.js')
const addBookmark = require('../../controllers/BookmarkController/addBookmark.js')
const bookmarkRouter = express.Router()


bookmarkRouter.post('/addbookmarks', verifyToken, addBookmark)
bookmarkRouter.get('/bookmarks', verifyToken, getBookmark)
bookmarkRouter.delete('/bookmarks/:id', verifyToken, deleteBookmark)



module.exports = bookmarkRouter