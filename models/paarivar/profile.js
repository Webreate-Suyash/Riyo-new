const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    currDate: String,
    currTime: String,
    heading: String,
    msg: String
})

const profileSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: {
        type: String
    },
    number: {
        type: String
    },
    password: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    referralID: {
        type: String
    },
    profileImg: {
        type: String
    },
    uniquecode: {
        type: String
    },
    reviewJob: {
        type: String
    },
    star: {
        type: String
    },
    createdAt: {
        type: String
    },
    time: {
        type: String
    },
    aadharNumber: {
        type: String,
    },
    aadharFrontImg: {
        type: String,
    },
    aadharBackImg: {
        type: String,
    },
    licenseNumber: {
        type: String,
    },
    licenseImg: {
        type: String,
    },
    experience: {
        type: String
    },
    salary: {
        type: String
    },
    rejection: {
        type: String
    },
    heading: {
        type: String
    },
    type: {
        type: String
    },
    var: {
        type: String
    },
    message: {
        type: String
    },
    body: {
        type: String
    },
    truck: {
        type: String
    },
    axle: {
        type: String
    }, state: {
        type: String
    },
    district: {
        type: String
    },
    zone: {
        type: String
    },
    area: {
        type: String
    },
    payment: {
        type: String
    },
    notification: {
        type: [messageSchema]
    },
    rejectedJob: {
        type: String
    },
})


module.exports = mongoose.model('Profile', profileSchema);
