const bookmarkdb = require('../../models/BookmarkModel')

const addbookmark = async (req, res) => {

    const { title, coverUrl, mangaId } = req.body

    const mangaExist = await bookmarkdb.findOne({ mangaId, userId: req.user.id });
    console.log(mangaExist)

    if (mangaExist) return res.status(409).json({ message: "book already bookmarked" })
    await bookmarkdb.create({
        title: title['en'] || title, coverUrl, mangaId, userId: req.user.id
    }).then(async (result) => {
        res.status(200).json({ message: 'Bookmarked✅' })
    })

}

module.exports = addbookmark