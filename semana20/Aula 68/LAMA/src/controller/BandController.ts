import {Request, Response} from 'express'
import {UserRole, stringToUserRole} from '../model/User'
import {BandBusiness} from '../business/BandBusiness'
import {BandDatabase} from '../data/BandDatabase'
import {TokenManager} from '../services/tokenManager'
import {IdGenerator} from '../services/idGenerator'
import {HashManager} from '../services/hashManager'
import { UnauthorizedError} from '../errors/UnauthorizedError'

export class BandController {
    private static BandBusiness = new BandBusiness(
        new BandDatabase(),
        new HashManager(),
        new TokenManager(),
        new IdGenerator()
    )

    public async registerBand(req: Request, res: Response) {
        try{
            const authenticator = new TokenManager()
            const tokenData = authenticator.getData(req.headers.authorization!)

            await BandController.BandBusiness.registerBand(
                req.body.name, 
                req.body.musicGenre, 
                req.body.responsible, 
                stringToUserRole(tokenData.role)
            )

            res.status(200).send({
                message: "Band registered"
            })
            
        }
        catch(err){
            res.status(err.errorCode || 400).send({message: err.message})
        }
    }

    public async getBandByIdOrName(req: Request, res: Response) {
        const id = req.query.id as string
        const name = req.query.name as string
        try {
            if(!name){
                const result = await BandController.BandBusiness.getBandById(id)
                res.status(200).send({result})
            }else{
                const result = await BandController.BandBusiness.getBandByName(name)
                res.status(200).send({result})
            }
        }
        catch(err){
            res.status(err.errorCode || 400).send({message: err.message})
        }
    }

    public async getAllBands(req: Request, res: Response) {
        try{
            const result = await BandController.BandBusiness.getAllBands()

            res.status(200).send(result)
        }
        catch(err){
            res.status(err.errorCode || 400).send({message: err.message})
        }
    }
}