
const express = require("express");
const register = require("../../controllers/UserController/register");
const login = require('../../controllers/UserController/login')
const profile = require("../../controllers/UserController/userProfile");
const verifyToken = require("../../middleware/verifyToken");
const userRoutes = express.Router();




//routes 

userRoutes.get('/register', (req, res) => {
    res.send('testing')
})

userRoutes.post("/", login)

userRoutes.post("/register", register)

userRoutes.get('/profile', verifyToken, profile)




module.exports = userRoutes;

