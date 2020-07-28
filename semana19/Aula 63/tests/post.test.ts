import {PostDatabase} from '../src/Post/PostDatabase'
import {BaseDatabase} from '../src/Post/BaseDatabase'
import dotenv from 'dotenv'

dotenv.config();

describe("testando posts", () => {
    afterAll(async () => {
        const db = new PostDatabase()
        await db.deletePostById("10")
        BaseDatabase.destroyConnection()
    })

    test("criar post", async() => {
        const post = {
            id: "10",
            photo: "photo",
            description: "Icaro",
            creation_date: "2020-07-27",
            type: "normal",
            creation_user_id: "50b9cfa6-bfa1-4fd1-a3f0-001ac19abd6b"
        }

        const db = new PostDatabase()
        await db.createPosts(post.id, post.photo, post.description, post.creation_date, post.type, post.creation_user_id)

        const result = await db.getPostById("10")

        expect(result).not.toBe(undefined)
        expect(result.description).toContain("Icaro")
    })
    test("criar post duplicado", async() => {
        try{
            const post = {
                id: "10",
                photo: "photo",
                description: "Icaro",
                creation_date: "2020-07-27",
                type: "normal",
                creation_user_id: "50b9cfa6-bfa1-4fd1-a3f0-001ac19abd6b"
            }

            const db = new PostDatabase()
            await db.createPosts(post.id, post.photo, post.description, post.creation_date, post.type, post.creation_user_id)
            await db.createPosts(post.id, post.photo, post.description, post.creation_date, post.type, post.creation_user_id)
        }
        catch(err){
            expect(err).not.toBe(undefined)
        }
    })
})