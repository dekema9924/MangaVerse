const bookmarkdb = require('../../models/BookmarkModel')

module.exports = addBookmark = async (req, res) => {
    console.log('Getting bookmarks...');

    const { title, coverUrl, mangaId } = req.body

    const mangaExist = await bookmarkdb.findOne({ mangaId, userId: req.user.id });
    console.log(mangaExist)

    if (mangaExist) return res.status(409).json({ message: "book already bookmarked" })
    await bookmarkdb.create({
        title: title['en'] || title, coverUrl, mangaId, userId: req.user.id
    }).then((result) => {
        res.status(200).json({ message: 'Bookmarked✅' })
    })

}

