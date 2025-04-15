
const bookmarkdb = require('../../models/BookmarkModel')

const deleteBookmark = async (req, res) => {
    const { id } = req.params
    await bookmarkdb.findByIdAndDelete(id).then((result) => {
        if (result) {
            return res.status(200).json({ message: 'bookmark Deleted', result })
        }

    })
}

module.exports = deleteBookmark