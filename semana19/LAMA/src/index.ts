import express from 'express'
import {AddressInfo} from 'net'

const app = express()

app.use(express.json())


const server = app.listen(3003, () => {
    if(server) {
        const address = server.address() as AddressInfo
        console.log(`Server is runing in http://localhost:${address.port}`)
    }else{
        console.error(`Server Failure`)
    }
})