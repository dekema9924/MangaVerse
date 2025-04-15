
const logOut = (req, res) => {

    res.clearCookie('token', {
        httpOnly: true,
        sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax',
        secure: process.env.NODE_ENV === 'production',
    }).status(200).json({ message: 'Logout Successful' });

}

module.exports = logOut