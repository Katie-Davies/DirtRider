import multer from 'multer'
import * as Path from 'node:path'
import * as fs from 'fs'

// Ensure the uploads directory exists
const uploadDir = Path.resolve('uploads/')
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true })
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir)
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + Path.extname(file.originalname))
  },
})

const upload = multer({
  storage: storage,
})
//   limits: { fileSize: 1000000 },
//   fileFilter: function (req, file, cb) {
//     checkFileType(file, cb)
//   },
// })

// function checkFileType(file, cb) {
//   const fileType = /jpeg|jpg|png|gif/
//   const extname = fileType.test(Path.extname(file.originalname).toLowerCase())
//   const mimetype = fileType.test(file.mimetype)
//   if (extname && mimetype) {
//     return cb(null, true)
//   } else {
//     cb('Error: Images Only!')
//   }
// }

export default upload
