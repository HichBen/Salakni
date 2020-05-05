import * as express from "express";
import {ReviewsController} from "../controller/reviews";

export module ReviewsRouter {
    export function buildRoutes(app: express.Application): void {

        /**
         * GET
         */
        app.get('/reviews', ReviewsController.findAll);

        app.get('/reviews/:review_id', ReviewsController.findOne);

        /**
         * POST
         */
        app.post('/reviews', ReviewsController.create);

        /**
         * PUT
         */
        app.put('/reviews/:review_id', ReviewsController.update);

        /**
         * DELETE
         */
        app.delete('reviews/:review_id', ReviewsController.remove);



    }
}