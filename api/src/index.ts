/**
 * @author: El Mehdi Moumni
 */
import {ClientRouter} from "./route/client";
import {ReviewsRouter} from "./route/reviews"
import {ProvidersRouter} from "./route/providers"
import express from "express";
import cors from "cors"
import helmet from "helmet";
import path from "path";
import mongoose from "mongoose";

const app = express()

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '../../public')));

mongoose.connect('mongodb://localhost:27017/', {
    dbName: "salakni",
    user: "admin",
    pass:"admin",
    checkServerIdentity: false,
    useNewUrlParser: true,
    useUnifiedTopology:false
});


// Members API Routes
ClientRouter.buildRoutes(app);
ReviewsRouter.buildRoutes(app);
ProvidersRouter.buildRoutes(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started and listening on port ${PORT}`));