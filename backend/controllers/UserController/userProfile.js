const userdb = require('../../models/userModel')


const profile = (req, res) => {

    userdb.findById(req.user.id).select("-password")
        .then((user) => {
            if (!user) return (res.status(400).json({ message: 'Invalid userId' }))
            console.log('Cookies received:', req.cookies); // Log incoming cookies
            return res.status(200).json(user)
        })
}

module.exports = profile