

const express = require('express')
const verifyToken = require('../../middleware/verifyToken')
const bookmarkRouter = express.Router()
const addbookmark = require('../../controllers/BookmarkController/addbookmark')
const getbookmarks = require('../../controllers/BookmarkController/getBookmarks')
const deletebookMark = require('../../controllers/BookmarkController/deletebookmark')


bookmarkRouter.post('/addbookmarks', verifyToken, addbookmark)
bookmarkRouter.get('/bookmarks', verifyToken, getbookmarks)
bookmarkRouter.delete('/bookmarks/:id', verifyToken, deletebookMark)




module.exports = bookmarkRouter