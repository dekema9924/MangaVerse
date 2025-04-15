const bookmarkdb = require('../../models/BookmarkModel')

const getBookmark = async (req, res) => {

    await bookmarkdb.find({ userId: req.user.id }).sort({ createdAt: -1 })
        .then((result) => {
            if (!result) return res.status(400).json({ message: 'invalid user' })
            res.status(200).json({ bookmarks: result })
        })
}


module.exports = getBookmark;