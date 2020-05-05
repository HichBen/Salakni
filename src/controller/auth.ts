import { AuthService } from "../service/auth";
import { Request, Response, NextFunction } from 'express'
import passport from 'passport'
import { IVerifyOptions } from "passport-local";
import Client, { IClient } from "../model/client";
import faker from "faker";
import Provider from "../model/provider";

export module AuthController {

    export async function create(req: Request, res: Response, next: NextFunction) {
        try {
            const clientData = await AuthService.create(req.body);
            res.json({ success: true, message: "User registered" });
        } catch (err) {
            res.json({ success: false, message: "Error, Try again later" });
        }
    }

    export async function login(req: Request, res: Response, next: NextFunction) {
        passport.authenticate("local", (err: Error, user, info: IVerifyOptions) => {
            if (err) { return next(err); }
            if (!user) {
                return res.json({ success: false, message: info.message });
            }
            req.logIn(user, (err) => {
                if (err) { return res.json({ success: false, message: err }); }
                return res.json({ success: true, message: "Login Success" });
            });
        })(req, res, next);
    }

    export async function getUser(req: Request, res: Response, next: NextFunction) {
        try {
            if (req.user) {
                let client = await Client.findOne({ _id: req.session?.passport.user })
                if (!client) {
                    let provider = await Provider.findOne({ _id: req.session?.passport.user })
                    if(!provider) return res.json({ success: false })
                    return res.json({ success: true, data: provider });
                } else {
                    return res.json({ success: true, data: client });
                }
            } else {
                res.json({ success: false })
            }
        } catch (err) {
            res.json({ success: false, message: "Error, Try again later" });
        }
    }

    export async function addPic(req: Request, res: Response, next: NextFunction) {
        try {
            let file = await faker.image.avatar();
            console.log(file);
            res.json({ success: true, data: file });
        } catch (err) {
            res.json({ success: false, message: "Error, Try again later" });
        }
    }

    export async function logout(req: Request, res: Response, next: NextFunction) {
        req.logOut()
        res.redirect('/')
    }
}