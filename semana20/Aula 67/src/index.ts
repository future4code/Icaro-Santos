import dotenv from 'dotenv'
import knex from 'knex'

dotenv.config()

const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT || "3306"),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE_NAME,
    },
});

interface LambdaOutput {
    statusCode: number
    body: string
}

export const handler = async(event: any): Promise<LambdaOutput> => {
    if(!event.id || !event.name || !event.image){
        throw new Error("Missing inputs")
    }
    await connection
        .insert({
            id: event.id,
            name: event.name,
            image: event.image
        })
        .into("LAMBDA_AULA67")

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "Character created"
        })
    }
}