

const express = require('express')
const verifyToken = require('../../middleware/verifyToken')
const bookmarkRouter = express.Router()
const addbookmark = require('../../controllers/BookmarkController/addbookmark')
const getbookmarks = require('../../controllers/BookmarkController/getbookmark')
const deleteBookMark = require('../../controllers/BookmarkController/deletebookmark')


bookmarkRouter.post('/addbookmarks', verifyToken, addbookmark)
bookmarkRouter.get('/bookmarks', verifyToken, getbookmarks)
bookmarkRouter.delete('/bookmarks/:id', verifyToken, deleteBookMark)




module.exports = bookmarkRouter