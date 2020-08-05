import dotenv from 'dotenv'
import knex from 'knex'
import Knex from 'knex'

dotenv.config()

export abstract class BaseDatabase {
    protected abstract tableName: string

    private static connection: Knex | null = null

    protected getConnection(): Knex {
        if(BaseDatabase.connection === null){
            BaseDatabase.connection = knex({
                client: "mysql",
                connection: {
                    host: process.env.DB_HOST,
                    port: Number(process.env.PORT || "3306"),
                    user: process.env.DB_USER,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_DATABASE_NAME,
                }
            })
        }
        return BaseDatabase.connection
    }

    public async destroyConnection(): Promise<void> {
        if(BaseDatabase.connection) {
            await BaseDatabase.connection.destroy()
        }
    }
    
}