import express from 'express'
import cors from 'cors'
import fileUpload from 'express-fileupload'
import {fileRouter} from './Router/FileRouter'
import dotenv from 'dotenv'

dotenv.config()

export const app = express()

app.use(cors({origin: true}))

app.use(express.json())

app.use(fileUpload())

app.use("/files", fileRouter)



