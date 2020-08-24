import {Router} from 'express'
import {FileController} from '../Controller/FileController'

export const fileRouter = Router()

fileRouter.put('/upload', new FileController().fileUpload)