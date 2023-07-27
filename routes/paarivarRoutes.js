const express = require("express");
const router = express.Router();
const Paarivar = require("../models/paarivar/profile");
const multer = require("multer");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();
const cloudinary = require('cloudinary').v2;
router.use(express.static(__dirname + "./public/"));
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0


const otp=require('../controllers/mobileOtpController');
router.post("/mobileOtp", otp.mobileOtp);

module.exports = router;