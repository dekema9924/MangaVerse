
const userdb = require('../../models/userModel')
const bcrypt = require('bcryptjs');
const createToken = require('../../utils/CreateToken');

const login = (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Please fill all fields' })
    }
    userdb.findOne({ email })
        .then(user => {
            if (!user) {
                return res.status(400).json({ message: 'User not found' })
            }
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (!isMatch) {
                        return res.status(400).json({ message: 'Invalid credentials' })
                    }

                    //gemerate token if login successful
                    const token = createToken(user._id)
                    //pass token in cookie
                    res.cookie('token', token, {
                        httpOnly: true,
                        sameSite: process.env.NODE_ENV === 'production' ? "None" : 'Lax',
                        secure: process.env.NODE_ENV === 'production',
                        maxAge: 1 * 24 * 60 * 60 * 1000 // 1 days
                    }).status(200).json({ message: 'Login successful', user: { username: user.username, email: user.email, id: user._id } })



                })
                .catch(err => {
                    console.error(err);
                    res.status(500).json({ message: 'Server error' })
                })
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ message: 'Server error' })
        })
}

module.exports = login;