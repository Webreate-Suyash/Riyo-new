const multer = require("multer");


const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: (req, file, cb) => {
    return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }
});



const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true)
  } else {
    cb({
      message: 'Unsupported file format'
    }, false)
  }
}

const images = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 50
  },
  fileFilter: fileFilter
});

// module.exports = images;
module.exports = {
  images
}