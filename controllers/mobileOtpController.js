const mongoose = require("mongoose");
const axios = require('axios');
const FAST2SMS_API_KEY = 'drN2L90ckD78wCVpxqgGyAWJZOKS45HbQoseu6zfUiajtIX3hnceszhfC21QHLAMT4FYliOPxdWjtbZw';
const mobileOtp = async (req, res) => {
    const otp = generateOTP();
    console.log(otp);
    const phoneNumber= req.body.number;
    
    const response = await axios.get('https://www.fast2sms.com/dev/bulkV2', {
        params: {
          authorization: FAST2SMS_API_KEY,
          sender_id: 'FTWSMS',
          message: `Your OTP is: ${otp}`,
          language: 'english',
          route: 'v3',
          flash: 0,
          numbers: phoneNumber,
        },
      });

      if (response.data.return === true) {
        return res.status(200).json({ message: 'OTP sent successfully!' ,otp});
      } else {
        return res.status(500).json({ error: 'Failed to send OTP. Please try again later.' });
      }
}
module.exports = {
    mobileOtp
}
function generateOTP() {
    return Math.floor(1000 + Math.random() * 9000);
  }