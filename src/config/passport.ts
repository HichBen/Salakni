import passport from "passport";
import passportLocal from "passport-local";
import Client, { IClient } from "../model/client";
import Provider, { IProvider } from "../model/provider";
import bcrypt from 'bcrypt'
import { Request, Response, NextFunction } from 'express';

const LocalStrategy = passportLocal.Strategy;

passport.use(new LocalStrategy({ usernameField: "email" }, async (email, password, done) => {
    let client = await Client.findOne({ email: email.toLowerCase() })

    if(!client){
        let provider = await Provider.findOne({ email: email.toLowerCase() })
        if(!provider) {
            return done(undefined, false, { message: `Email ${email} not found.` });
        }

        const validPassowrd = await bcrypt.compare(password, provider.password);
        if (!validPassowrd) return done(undefined, false, { message: 'invalid passowrd' })

        return done(undefined, provider);
    }

    const validPassowrd = await bcrypt.compare(password, client.password);
    if (!validPassowrd) return done(undefined, false, { message: 'invalid passowrd' })

    return done(undefined, client);
}));

passport.serializeUser<any, any>((user, done) => {
    done(undefined, user.id);
});

passport.deserializeUser((id, done) => {
    Client.findById(id, (err, user) => {
        if(user == null){
            Provider.findById(id, (err, user) => {
                return done(err, user);
            })
        } else {
            done(err, user);
        }
    });
});

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
};

export const isGuest = (req: Request, res: Response, next: NextFunction) => {
    if (req.isAuthenticated()) {
        return res.redirect("/");
    }
    return next();
};