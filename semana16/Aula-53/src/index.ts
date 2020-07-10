import knex from "knex";
import dotenv from "dotenv";
import express, { Request, Response } from "express";
import { AddressInfo } from "net";

dotenv.config();

const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    },
});

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});

const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)

    return result[0][0]
}

const searchActor = async (name: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}"
  `)
    return result
}

const searchMovie = async(name: string): Promise<any> => {
    const result = await connection.raw(`
        select * from Movie where name like "%${name}%" OR sinopse like "%${name}%" order by release_date
    `)
    return result[0]
}

const countActors = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
  `);
    const count = result[0][0].count;
    return count;
};

const createActor = async (
    id: string,
    name: string,
    salary: number,
    dateOfBirth: Date,
    gender: string
): Promise<void> => {
    await connection.insert({
        id: id,
        name: name,
        salary: salary,
        dateOfBirth: dateOfBirth,
        gender: gender
    })
    .into("Actor")
}

const createMovie = async (
    id: string,
    title: string,
    sinopse: string,
    releaseDate: Date,
    playingLimitDate: Date
): Promise<void> => {
    await connection.insert({
        id: id,
        title: title,
        sinopse: sinopse,
        release_date: releaseDate,
        playing_limit_date: playingLimitDate
    })
    .into("Movie")
}

const getAllMovies = async (): Promise<any> => {
    const result = await connection.raw(`
        select * from Movie limit 15
    `)
    return result[0]
}

const updateActorSalary = async (id: string, salary: number): Promise<any> => {
    await connection("Actor")
        .update({
            salary: salary,
        })
        .where("id", id)
}

const deleteActor = async(id: string): Promise<void> => {
    await connection("Actor")
        .delete(id)
        .where("id", id)
}

const avgSalaryByGender = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
        .avg("salary as average")
        .where({ gender });

    return result[0].average;
};

app.get("/actor/:id", async (req: Request, res: Response) => {
    try{
        const id = req.params.id
        const actor = await getActorById(id)

        res.status(200).send(actor)
    }
    catch(err) {
        res.status(400).send({
            message: err.message
        })
    }
})

app.get("/actor", async (req: Request, res: Response) => {
    try{
        const count = await countActors(req.query.gender as string)

        res.status(200).send({
            quantity: count
        })
    }
    catch(err) {
        res.status(400).send({
            message: err.message
        })
    }
})

app.put("/actor", async (req: Request, res: Response) => {
    try{
        await createActor(
            req.body.id,
            req.body.name,
            req.body.salary,
            new Date(req.body.dateOfBirth),
            req.body.gender
        )
        res.status(200).send();
    }
    catch(err) {
        res.status(400).send({
            message: err.message
        })
    }
})

app.post("/actor", async (req: Request, res: Response) => {
    try{
        await updateActorSalary(req.body.id, req.body.salary)
        res.status(200).send({
            message: "Sucesso"
        })
    }
    catch(err) {
        res.status(400).send({
            message: err.message
        })
    }
})

app.delete("/actor/:id", async (req: Request, res: Response) => {
    try{
        await deleteActor(req.params.id)
    }
    catch(err) {
        res.status(400).send({
            message: err.message
        })
    }
})

app.post("/movie", async(req: Request, res: Response) => {
    try{
        await createMovie(
            req.body.id,
            req.body.title,
            req.body.sinopse,
            new Date(req.body.releaseDate),
            new Date(req.body.playingLimitDate)
        )
        res.status(400).send({
            message: "Sucesso"
        })
    }
    catch(err) {
        res.status(400).send({
            message: err.message
        })
    }
})

app.get("/movie/all", async(req: Request, res:Response) => {
    try{
        
        res.status(200).send(await getAllMovies())
    }
    catch(err) {
        res.status(400).send({
            message: err.message
        })
    }
})

app.get("/movie/search", async(req: Request, res: Response) => {
    try{
        const movies = await searchMovie(req.query.name as string)

        res.status(200).send({
            message: movies
        })
    }
    catch(err){
        res.status(400).send({
            message: err.message
        })
    }
})