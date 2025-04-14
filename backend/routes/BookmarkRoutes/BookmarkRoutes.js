

const express = require('express')
const verifyToken = require('../../middleware/verifyToken')
const bookmarkRouter = express.Router()
const addbookmark = require('../../controllers/BookmarkController/addbookmark')
const getbookmark = require('../../controllers/BookmarkController/getbookmark')
const deleteBookmark = require('../../controllers/BookmarkController/deleteBookmark');



bookmarkRouter.post('/addbookmarks', verifyToken, addbookmark)
bookmarkRouter.get('/bookmarks', verifyToken, getbookmark)
bookmarkRouter.delete('/bookmarks/:id', verifyToken, deleteBookmark)




module.exports = bookmarkRouter