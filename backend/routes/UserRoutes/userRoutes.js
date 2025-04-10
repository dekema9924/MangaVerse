
const express = require("express");
const register = require("../../controllers/UserController/register");
const login = require("../../controllers/UserController/Login");
const profile = require("../../controllers/UserController/userProfile");
const verifyToken = require("../../middleware/verifyToken");
const userRoutes = express.Router();




//routes 

userRoutes.get("/", login )

userRoutes.get("/register", register )

userRoutes.get('/profile', verifyToken, profile)




module.exports = userRoutes;

