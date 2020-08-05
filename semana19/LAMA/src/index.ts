import express from 'express'
import {AddressInfo} from 'net'
import {bandRouter} from './router/BandRouter'
import {userRouter} from './router/UserRouter'

const app = express()

app.use(express.json())

app.use("/bands/", bandRouter)
app.use("/user/", userRouter)


const server = app.listen(3003, () => {
    if(server) {
        const address = server.address() as AddressInfo
        console.log(`Server is runing in http://localhost:${address.port}`)
    }else{
        console.error(`Server Failure`)
    }
})