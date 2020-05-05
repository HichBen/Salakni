import {ReviewsService} from "../service/reviews";

export module ReviewsController {

    export async function findAll(req, res, next) {
        try {
            const reviews = await ReviewsService.findAll();
            res.status(200).json(reviews);
        } catch (err) {
            next(err);
        }
    }

    export async function findOne(req, res, next) {
        try {
            const reviews = await ReviewsService.findOne(req.params.review_id);
            res.status(200).json(reviews);
        } catch (err) {
            next(err);
        }
    }

    export async function create(req, res, next) {
        try {
            const reviews = await ReviewsService.create(req.body);
            res.status(201).json(reviews);
        } catch (err) {
            next(err);
        }
    }

    export async function update(req, res, next) {
        try {
            const reviews = await ReviewsService.update(req.params.review_id, req.body);
            res.status(200).json(reviews);
        } catch (err) {
            next(err);
        }
    }

    export async function remove(req, res, next) {
        try {
            const reviews = await ReviewsService.remove(req.params.review_id);
            res.status(200).json(reviews);
        } catch (err) {
            next(err);
        }
    }

}
 