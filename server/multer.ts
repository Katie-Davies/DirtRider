import multer from 'multer'
import * as Path from 'node:path'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, Path.resolve('uploads/'))
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + Path.extname(file.originalname))
  },
})

const upload = multer({ storage: storage })

export default upload
