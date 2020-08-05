import { BandDatabase } from "../data/BandDatabase";
import { Band } from "../model/Band";
import {UserRole} from '../model/User'
import { IdGenerator } from "../services/idGenerator";
import { HashManager } from "../services/hashManager";
import { TokenManager } from "../services/tokenManager";
import { NotFoundError } from "../errors/NotFoundError";
import { InvalidParameterError } from "../errors/InvalidParameterError";
import { UnauthorizedError } from '../errors/UnauthorizedError'

export class BandBusiness{
    constructor(
        private bandDatabase: BandDatabase,
        private hashManager: HashManager,
        private tokenManager: TokenManager,
        private idGenerator: IdGenerator
    ) {}

    public async registerBand(
        name: string,
        musicGenre: string,
        responsible: string,
        role: UserRole
    ) {
        if(!name || !musicGenre || !responsible) {
            throw new InvalidParameterError("Missing input")
        }

        if(role !== UserRole.ADMIN) {
            throw new UnauthorizedError("Admins only can use this endpoint")
        }

        const id = this.idGenerator.generate()

        await this.bandDatabase.createBand(
            new Band(id, name, musicGenre, responsible)
        )
    }

    public async getBandById(id: string) {
        const band = await this.bandDatabase.getBandById(id)

        if(!band) {
            throw new NotFoundError("Band not found")
        }

        return band
    }

    public async getBandByName(name: string) {
        const band = await this.bandDatabase.getBandByName(name)

        if (!band) {
            throw new NotFoundError("Band not found")
        }

        return band
    }

    public async getAllBands() {
        const bands = await this.bandDatabase.getAllBands()

        return bands
    }
}