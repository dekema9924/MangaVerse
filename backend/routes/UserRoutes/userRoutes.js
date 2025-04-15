
const express = require("express");
const register = require("../../controllers/UserController/register");
const login = require('../../controllers/UserController/login')
const profile = require("../../controllers/UserController/userProfile");
const verifyToken = require("../../middleware/verifyToken");
const logOut = require("../../controllers/UserController/logout");
const userRoutes = express.Router();

//routes 

// TEST route to set cookie
userRoutes.get('/test-cookie', (req, res) => {
    res.cookie('test', 'cookie-works', {
        httpOnly: true,
        secure: true,
        sameSite: 'None',
        maxAge: 60000 // 1 minute
    });
    res.send('Test cookie sent!');
});

// TEST route to check if cookie was received
userRoutes.get('/check-cookie', (req, res) => {
    console.log('Cookies received:', req.cookies);
    res.json({ cookies: req.cookies });
});

userRoutes.get('/debug-cookie', (req, res) => {
    console.log('Cookies received on mobile:', req.cookies); // Should show token cookie
    res.json({ cookies: req.cookies });
});


userRoutes.post("/", login)

userRoutes.post("/register", register)

userRoutes.get('/profile', verifyToken, profile)

userRoutes.post('/logout', verifyToken, logOut)







module.exports = userRoutes;

