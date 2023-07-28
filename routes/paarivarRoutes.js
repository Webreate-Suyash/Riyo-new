const express = require("express");
const router = express.Router();
// const Paarivar = require("../models/paarivar/profile");
const multer = require("multer");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();
const cloudinary = require('cloudinary').v2;
// router.use(express.static(__dirname + "./public/"));
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0
cloudinary.config({
    cloud_name: "doiokbuon",
    api_key: "461232268366274",
    api_secret: "KuB5UyJ4pdivfPm7FxozpWHkS7U"
  });

// MULTER
const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: (req, file, cb) => {
      return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
  });
  
  const uploads = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 50
    },
  });
  
  const multipleUpload = uploads.fields([
    { name: 'supportingImg', maxCount: 1 },
    { name: 'companyPanImg', maxCount: 1 },
    { name: 'gstImg', maxCount: 1 },
    { name: 'deedImg', maxCount: 1 },
    { name: 'licenseImg', maxCount: 1 },
    { name: 'fssaiImg', maxCount: 1 },
    { name: 'itrImg', maxCount: 1 },
  ]);
  
  const multipleUploadPrivate = uploads.fields([
    { name: 'supportingImg', maxCount: 1 },
    { name: 'companyPanImg', maxCount: 1 },
    { name: 'gstImg', maxCount: 1 },
    { name: 'cinImg', maxCount: 1 },
    { name: 'fssaiImg', maxCount: 1 },
    { name: 'itrImg', maxCount: 1 },
  ]);
  
  const multipleUploadSole = uploads.fields([
    { name: 'supportingImg', maxCount: 1 },
    { name: 'companyPanImg', maxCount: 1 },
    { name: 'gstImg', maxCount: 1 },
    { name: 'licenseImg', maxCount: 1 },
    { name: 'fssaiImg', maxCount: 1 },
    { name: 'itrImg', maxCount: 1 },
  ]);
  
  const multipleUploadParivar = uploads.fields([
    { name: 'aadharFrontImg', maxCount: 1 },
    { name: 'aadharBackImg', maxCount: 1 },
    { name: 'licenseImg', maxCount: 1 },
  ]);
  
  const multipleUploadVehicle = uploads.fields([
    { name: 'smartCard', maxCount: 1 },
    { name: 'nationalImg', maxCount: 1 },
    { name: 'statePermitImg', maxCount: 1 },
    { name: 'insuranceImg', maxCount: 1 },
    { name: 'roadTaxImg', maxCount: 1 },
  ]);
  
  const dashboard = uploads.fields([
    { name: 'smartCard', maxCount: 1 },
    { name: 'permitImg', maxCount: 1 },
    { name: 'insuranceImg', maxCount: 1 },
    { name: 'roadTaxImg', maxCount: 1 },
  ]);
  
  const companyImage = uploads.fields([
    { name: 'panImage', maxCount: 1 },
    { name: 'gstImage', maxCount: 1 },
    { name: 'incorporation', maxCount: 1 },
    { name: 'fssai', maxCount: 1 },
  ]);
  
  const cheque = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 50
    },
  }).single('cheque');
  
  const profileImg = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 50
    },
  }).single('profile');
  
  const profile = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 50
    },
  }).single('profile');
  
  const panImage = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 50
    },
  }).single('panImage');
  
  const doc = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 50
    },
  }).array('doc');
  
  /*
                                                      ## MIDDLEWARE
  */
  
  const mailer = require("../middleware/nodeMailer");
  const multipleUploads = require("../middleware/uploadImages");









//   paarivar
const otp=require('../controllers/mobileOtpController');
const userPaarivar = require("../controllers/paarivar/registrationController");
router.post("/paarivar-user", userPaarivar.userRegistration);
router.post("/mobileOtp", otp.mobileOtp);

module.exports = router;