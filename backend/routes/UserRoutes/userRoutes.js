
const express = require("express");
const register = require("../../controllers/UserController/register");
const login = require('../../controllers/UserController/login')
const profile = require("../../controllers/UserController/userProfile");
const verifyToken = require("../../middleware/verifyToken");
const logOut = require("../../controllers/UserController/logout");
const userRoutes = express.Router();

//routes 

userRoutes.get('/register', (req, res) => {
    res.send('testing')
})

userRoutes.get('/debug-cookie', (req, res) => {
    console.log('Cookies received on mobile:', req.cookies); // Should show token cookie
    res.json({ cookies: req.cookies });
});


userRoutes.post("/", login)

userRoutes.post("/register", register)

userRoutes.get('/profile', verifyToken, profile)

userRoutes.post('/logout', verifyToken, logOut)







module.exports = userRoutes;

