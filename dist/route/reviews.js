"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reviews_1 = require("../controller/reviews");
var ReviewsRouter;
(function (ReviewsRouter) {
    function buildRoutes(app) {
        /**
         * GET
         */
        app.get('/reviews', reviews_1.ReviewsController.findAll);
        app.get('/reviews/:review_id', reviews_1.ReviewsController.findOne);
        /**
         * POST
         */
        app.post('/reviews', reviews_1.ReviewsController.create);
        /**
         * PUT
         */
        app.put('/reviews/:review_id', reviews_1.ReviewsController.update);
        /**
         * DELETE
         */
        app.delete('reviews/:review_id', reviews_1.ReviewsController.remove);
    }
    ReviewsRouter.buildRoutes = buildRoutes;
})(ReviewsRouter = exports.ReviewsRouter || (exports.ReviewsRouter = {}));
//# sourceMappingURL=reviews.js.map