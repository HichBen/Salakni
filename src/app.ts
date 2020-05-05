/**
 * @author: El Mehdi Moumni
 */
import { MainRouter } from "./route/main"
import { AuthRouter } from "./route/auth"
import { ClientRouter } from "./route/client";
import { ReviewsRouter } from "./route/reviews"
import { ProvidersRouter } from "./route/providers"
import express from "express";
import cors from "cors"
import helmet from "helmet";
import path from "path";
import mongoose from "mongoose";
import passport from 'passport'
import cookieParser from 'cookie-parser'
import expressSession from 'express-session'
import "./config/passport";
import dotenv from 'dotenv'

const app = express()

dotenv.config()
app.use(helmet());
app.use(cors());
app.use(cookieParser('secreeet'));
app.use(expressSession({
    secret: 'secreeet',
    resave: true,
    saveUninitialized: true
}));
app.use(express.static(path.join(__dirname, '../public')));

app.use(passport.initialize());
app.use(passport.session());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

mongoose.connect('mongodb+srv://salakni:OS8U9HDBXOcIZdBb@cluster0-u4sah.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('server running')
}).catch(err => {
    console.log(err)
})

// Members API Routes
MainRouter.buildRoutes(app);
AuthRouter.buildRoutes(app)
ClientRouter.buildRoutes(app);
ReviewsRouter.buildRoutes(app);
ProvidersRouter.buildRoutes(app);

export default app