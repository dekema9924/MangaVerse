const userdb = require('../../models/userModel')
const bcrypt = require('bcryptjs');

const register = (req, res) => {

    const { username, email, password } = req.body;

    //user validation
    // User validation
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Please fill all fields' });
    }

    if (username.length < 3 || username.length > 10 || !/^[a-zA-Z0-9]+$/.test(username)) {
        return res.status(400).json({ message: 'Username must be 3-10 characters and only contain letters and numbers' });
    }

    if (!email.includes('@')) {
        return res.status(400).json({ message: 'Invalid email' });
    }

    if (password.length < 6 || password.length > 20) {
        return res.status(400).json({ message: 'Password must be 6-20 characters long' });
    }


    userdb.findOne({ email })
        .then(user => {
            if (user) {
                return res.status(400).json({ message: 'User already exists' })
            }
            bcrypt.hash(password, 10)
                .then(hashedPassword => {
                    const newUser = new userdb({
                        username,
                        email,
                        password: hashedPassword
                    })
                    newUser.save()
                        .then(user => {
                            res.status(201).json({ message: 'User registered successfully' })
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
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ message: 'Server error' })
        })

}

module.exports = register