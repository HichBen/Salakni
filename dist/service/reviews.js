"use strict";
/**
 * @author: Mostafa Elebiary
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const faker = __importStar(require("faker"));
var ReviewsService;
(function (ReviewsService) {
    //https://github.com/Marak/faker.js/wiki/Person
    function findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const reviewsArray = [];
            for (let i = 0; i < 100; i++) {
                const fakeClient = {
                    id: faker.random.number(faker.random.number({ min: 1, max: 15 })),
                    clientid: faker.random.number(faker.random.number({ min: 1, max: 15 })),
                    body: faker.lorem.paragraph(),
                    rating: faker.random.number({ min: 1, max: 5 }),
                };
                reviewsArray.push(fakeClient);
            }
            return reviewsArray;
        });
    }
    ReviewsService.findAll = findAll;
    function findOne(review_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const fakeClient = {
                id: faker.random.number(faker.random.number({ min: 1, max: 15 })),
                clientid: faker.random.number(faker.random.number({ min: 1, max: 15 })),
                body: faker.lorem.paragraph(),
                rating: faker.random.number({ min: 1, max: 5 }),
            };
            return fakeClient;
        });
    }
    ReviewsService.findOne = findOne;
    function create(reviewData) {
        return __awaiter(this, void 0, void 0, function* () {
            return reviewData;
        });
    }
    ReviewsService.create = create;
    function update(review_id, reviewData) {
        return __awaiter(this, void 0, void 0, function* () {
            return Object.assign({ id: review_id }, reviewData);
        });
    }
    ReviewsService.update = update;
    function remove(client_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return { id: client_id };
        });
    }
    ReviewsService.remove = remove;
})(ReviewsService = exports.ReviewsService || (exports.ReviewsService = {}));
//# sourceMappingURL=reviews.js.map