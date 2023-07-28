const mongoose = require("mongoose");
const ProfileModel = require('../../models/paarivar/profile');
const cloudinary = require('cloudinary').v2;
const bcrypt = require('bcrypt');
const formatted_date = require('../../src/utils/date')
const formatted_time = require('../../src/utils/time')
const uniquecode = require('../../src/utils/uniquecode')

// Configuration 
cloudinary.config({
    cloud_name: "dfzo3aqrd",
    api_key: "724438343667325",
    api_secret: "Xn1lyErSTZBM1Ui34oz5Vpx2NN0"
});



const userRegistration = async (req, res) => {
    const upload = await cloudinary.uploader.upload(req.file.path);
    const path = upload.secure_url;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const number =req.body.number;
    const email= req.body.email;
    const password=req.body.password;
    const profileURL = path;
    const referralID = req.body.referralID;
    const message = "Job Facility With 50%  Advance Salary With Legal paperwork.";
    if (firstName && lastName && profileURL&& number&& password) {
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
            try {
                const profile = new ProfileModel({
                    _id: new mongoose.Types.ObjectId(),
                    email: email,
                    number: number,
                    password: hashPassword,
                    firstName: firstName,
                    lastName: lastName,
                    referralID: referralID,
                    type: "Paarivar",
                    uniquecode: uniquecode(),
                    createdAt: formatted_date(),
                    time: formatted_time(),
                    profileImg: profileURL,
                    message: message
                });

                profile.save()
                    .then((result) => {
                        res.status(201).json({
                            status: "SUCCESS",
                            message: "Registration is Successful!",
                            data: {
                                profile: profile
                            }
                        });

                    }).then(ProfileModel.find()
                        .then(p =>
                            console.log("Added")
                        )
                        .catch(error => console.log(error)));
            }
            catch (error) {
                res.send(error.message)
            }
        } 
     else {
        res.status(400).json({
            status: "Failed",
            message: "All fields are required!",

        })
    }
}

module.exports = {
    userRegistration
}
