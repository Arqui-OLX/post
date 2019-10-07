import * as express from "express";
import {Request, Response} from "express";
import * as bodyParser from  "body-parser";
import {createConnection} from "typeorm";
import {Post} from "./entity/Post";

// create typeorm connection
createConnection().then(connection => {
    const postRepository = connection.getRepository(Post);

    // create and setup express app
    const app = express();
    app.use(bodyParser.json());

    // register routes

    app.get("/posts", async function(req: Request, res: Response) {
        const posts = await postRepository.find();
        res.json(posts);
    });

    app.get("/posts/:id", async function(req: Request, res: Response) {
        const results = await postRepository.findOne(req.params.id);
        return res.send(results);
    });

    app.post("/posts", async function(req: Request, res: Response) {
        const post = await postRepository.create(req.body);
        const results = await postRepository.save(post);
        return res.send(results);
    });

    app.put("/posts/:id", async function(req: Request, res: Response) {
        const post = await postRepository.findOne(req.params.id);
        await postRepository.merge(post, req.body);
        const results = await postRepository.save(post);
        return res.send(results);
    });

    app.delete("/posts/:id", async function(req: Request, res: Response) {
        const results = await postRepository.delete(req.params.id);
        return res.send(results);
    });

    // start express server

    app.listen(3000);

});
