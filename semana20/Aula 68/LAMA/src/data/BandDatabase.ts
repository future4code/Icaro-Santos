import { BaseDatabase } from './BaseDatabase'
import { Band } from '../model/Band'

export class BandDatabase extends BaseDatabase {
    protected tableName: string = "LAMA_Bands"

    public async createBand(band: Band): Promise<void> {
        await super.getConnection().raw(`
            insert into ${this.tableName} (id, name, music_genre, responsible)
            values (
                ${band.getId()}
                ${band.getName()}
                ${band.getMusicGenre()}
                ${band.getResponsible()}
            )
        `)
    }

    public async getBandById(id: string): Promise<Band> {
        const result = await super.getConnection()
            .select("*")
            .from(this.tableName)
            .where({id})

        return result[0]
    }

    public async getBandByName(name: string): Promise<Band> {
        const result = await super.getConnection()
            .select("*")
            .from(this.tableName)
            .where({name})

        return result[0]
    }

    public async getAllBands(): Promise<Band[]> {
        const result = await super.getConnection()
            .select("*")
            .from(this.tableName)

        return result
    }
}