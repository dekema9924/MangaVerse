

const express = require('express')
const verifyToken = require('../../middleware/verifyToken')
const bookmarkRouter = express.Router()
const addbookmark = require('../../controllers/BookmarkController/addbookmark')
const getbookmark = require('../../controllers/BookmarkController/getbookmarks')
const deletebookMark = require('../../controllers/BookmarkController/deletebookmark')


bookmarkRouter.post('/addbookmarks', verifyToken, addbookmark)
bookmarkRouter.get('/bookmarks', verifyToken, getbookmark)
bookmarkRouter.delete('/bookmarks/:id', verifyToken, deletebookMark)




module.exports = bookmarkRouter