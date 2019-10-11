import * as faker from "faker";
import {createConnection} from "typeorm";
import {Post} from "./entity/Post";


// create typeorm connection
createConnection().then(connection => {
    const postRepository = connection.getRepository(Post);


    for(let i=0; i<100; i++){
        let post = new Post();

        post.title = faker.commerce.product();
        post.description = faker.commerce.productAdjective();
        post.date_publication = faker.date.past();
        post.date_expiration = faker.date.future();
        post.fk_product = faker.random.number(); 
    
        post = postRepository.create(post);
        postRepository.save(post);
    }

});
