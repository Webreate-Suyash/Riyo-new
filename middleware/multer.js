const multer = require("multer");

const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
});


module.exports = {
    storage
} 