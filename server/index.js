import express from 'express'
import postRoutes from './routes/Posts.js'
import authRoutes from './routes/Auth.js'
import userRoutes from './routes/Users.js'
import cookieParser from 'cookie-parser'
import multer from 'multer'
import cors from 'cors'



const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(cors());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../client/public/upload')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+file.originalname)
    }
  })

const upload = multer({ storage })

app.post('/api/upload', upload.single('file'), function (req, res) {
    const file = req.file
    res.status(200).json(file.filename)
})




app.use('/api/posts',postRoutes)
app.use('/api/auth',authRoutes)
app.use('/api/users',userRoutes)

app.listen(8800,() => {
    console.log("Connected successfully")
})