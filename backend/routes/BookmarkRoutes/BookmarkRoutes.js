const fs = require('fs');
const path = require('path');


const fullPath = path.resolve(__dirname, '../../controllers/BookmarkController/addBookmark.js');
console.log('Can require?', (() => { try { require(fullPath); return '✅ YES'; } catch { return '❌ NO'; } })());


const targetFile = path.join(__dirname, '../../controllers/BookmarkController/addBookmark.js');
console.log('Does addbookmark.js exist?', fs.existsSync(targetFile) ? '✅ YES' : '❌ NO');

const files = fs.readdirSync(path.resolve(__dirname, '../../controllers/BookmarkController'));
console.log('Actual files:', files);

delete require.cache[require.resolve('../../controllers/BookmarkController/addbookmark.js')];

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