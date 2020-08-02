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
}