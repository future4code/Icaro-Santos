import {PostDatabase} from '../src/Post/PostDatabase'
import {BaseDatabase} from '../src/Post/BaseDatabase'

describe("testando posts", () => {
    afterAll(async () => {
        BaseDatabase.destroyConnection()
    })

    test("Create post", async() => {
        const post = {
            id: "10",
            photo: "photo",
            description: "Icaro",
            creation_date: "creation_date",
            type: "normal",
            creation_user_id: "50b9cfa6-bfa1-4fd1-a3f0-001ac19abd6b"
        }

        const db = new PostDatabase()
        await db.createPosts(post.id, post.photo, post.description, post.creation_date, post.type, post.creation_user_id)

        const result = await db.getPostById("10")

        expect(result).not.toBe(undefined)
        expect(result).toContain("Icaro")
    })
})