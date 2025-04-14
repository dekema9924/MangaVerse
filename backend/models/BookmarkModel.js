
const { timeStamp } = require('console');
const mongoose = require('mongoose')


const BookmarkModel = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true,
    },
    title: { type: String },
    coverUrl: { type: String },
    mangaId:
        { type: String, required: true, },



}, { timeStamps: true })

BookmarkModel.index({ userId: 1, mangaId: 1 }, { unique: true });



module.exports = mongoose.model('Bookmark', BookmarkModel)