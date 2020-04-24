/**
 * @author: El Mehdi Moumni
 */


import express from "express";
import cors from "cors"
import helmet from "helmet";
import {TestRouter} from "./routes/test";


const app = express()

app.use(helmet());
app.use(cors());
app.use(express.json());

TestRouter.buildRoutes(app);

const PORT = 3000;
const server = app.listen(PORT, () => {
   console.log(`Listenng on port ${PORT}`)
});
