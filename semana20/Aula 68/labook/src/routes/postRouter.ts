import express from "express";
import { PostController } from "../controller/PostController";



export const PostRouter = express.Router();
const controller = new PostController()

PostRouter.post("/create", controller.create);


PostRouter.get("/feed", controller.feed)

PostRouter.get("/", controller.getPostByType)

