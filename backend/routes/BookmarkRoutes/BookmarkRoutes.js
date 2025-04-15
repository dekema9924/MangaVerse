
const express = require('express')
const verifyToken = require('../../middleware/verifyToken')
const deleteBookmark = require('../../controllers/Bookmark/deleteBookmark.js')
const getBookmark = require('../../controllers/Bookmark/getBookmark.js')
const addBookmark = require('../../controllers/Bookmark/addBookmark.js')
const bookmarkRouter = express.Router()


bookmarkRouter.post('/addbookmarks', verifyToken, addBookmark)
bookmarkRouter.get('/bookmarks', verifyToken, getBookmark)
bookmarkRouter.delete('/bookmarks/:id', verifyToken, deleteBookmark)



module.exports = bookmarkRouter