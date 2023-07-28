const nodemailer = require('nodemailer');
const OTP = require('../src/utils/emailOTP')


// Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.AUTH_EMAIL,
        pass: process.env.AUTH_PASSWORD
    }
});

// Transporter
transporter.verify((error, success) => {
    if (error) {
        console.log(error)
    }
    else {
        console.log('Email Sent Successfully');
        console.log("Success");
    }

});

const sendOTPVerificationEmail = async (req, res) => {
    const email1 = req.body.email;
    const otp = OTP();
    try {
        const mailOptions = {
            from: process.env.AUTH_EMAIL,
            to: email1,
            subject: "Newsletter Submission",
            html: ` Dear User,

            Thank you for registering with [Company Name]. To ensure the security of your account, we require you to complete the verification process by entering the One-Time Password (OTP) provided below.
            <p>Your OTP is ${otp}</p>`,
        };
        await transporter.sendMail(mailOptions);
        res.json({
            status: "SUCCESS",
            message: "OTP sent successfully!",
            OTP : otp
        });
    }
    catch (error) {
        console.log(error);
    }
};

module.exports = {
    sendOTPVerificationEmail
}