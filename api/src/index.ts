/**
 * @author: El Mehdi Moumni
 */
import {ClientRouter} from "./route/client";
import {ReviewsRouter} from "./route/reviews"
import express from "express";
import cors from "cors"
import helmet from "helmet";



const app = express()

app.use(helmet());
app.use(cors());
app.use(express.json());


// Members API Routes
ClientRouter.buildRoutes(app);
ReviewsRouter.buildRoutes(app);



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started and listening on port ${PORT}`));