"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const reviews_1 = require("../service/reviews");
var ReviewsController;
(function (ReviewsController) {
    function findAll(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const reviews = yield reviews_1.ReviewsService.findAll();
                res.status(200).json(reviews);
            }
            catch (err) {
                next(err);
            }
        });
    }
    ReviewsController.findAll = findAll;
    function findOne(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const reviews = yield reviews_1.ReviewsService.findOne(req.params.review_id);
                res.status(200).json(reviews);
            }
            catch (err) {
                next(err);
            }
        });
    }
    ReviewsController.findOne = findOne;
    function create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const reviews = yield reviews_1.ReviewsService.create(req.body);
                res.status(201).json(reviews);
            }
            catch (err) {
                next(err);
            }
        });
    }
    ReviewsController.create = create;
    function update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const reviews = yield reviews_1.ReviewsService.update(req.params.review_id, req.body);
                res.status(200).json(reviews);
            }
            catch (err) {
                next(err);
            }
        });
    }
    ReviewsController.update = update;
    function remove(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const reviews = yield reviews_1.ReviewsService.remove(req.params.review_id);
                res.status(200).json(reviews);
            }
            catch (err) {
                next(err);
            }
        });
    }
    ReviewsController.remove = remove;
})(ReviewsController = exports.ReviewsController || (exports.ReviewsController = {}));
//# sourceMappingURL=reviews.js.map