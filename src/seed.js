"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var faker = require("faker");
var typeorm_1 = require("typeorm");
var Post_1 = require("./entity/Post");
// create typeorm connection
typeorm_1.createConnection().then(function (connection) {
    var postRepository = connection.getRepository(Post_1.Post);
    for (var i = 0; i < 100; i++) {
        var post = new Post_1.Post();
        post.title = faker.commerce.product();
        post.description = faker.commerce.productAdjective();
        post.date_publication = faker.date.past();
        post.date_expiration = faker.date.future();
        post.fk_product = faker.random.number();
        post = postRepository.create(post);
        postRepository.save(post);
    }
});
