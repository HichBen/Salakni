/**
 * @author: El Mehdi Moumni
 */

import Client from "../model/client";
import Provider from "../model/provider";
import bcrypt from 'bcrypt'

export module AuthService {

    export async function create(clientData: any) {
        try {
            let { name, password, email, phone, description, address, provider, skills, imgUrl } = clientData

            if (!name || !password || !email || !phone || !address) {
                return { success: false, message: 'Fill all the fields' }
            }

            if(!imgUrl || imgUrl == undefined){
                return { success: false, message: 'Please add a picture' }
            }

            if(provider == 'true' && !skills){
                return { success: false, message: 'add your skills' }
            }

            let userFound = await Client.findOne({ email: email })
            if (userFound) return { success: false, message: 'Email already used' }

            const salt = await bcrypt.genSalt(10);
            password = await bcrypt.hash(password, salt);

            if(provider == 'true'){
                skills = skills.split(',')
                let provider = new Provider({
                    name,
                    email,
                    password,
                    description,
                    phone,
                    address,
                    skills,
                    photo: imgUrl
                })
                return await provider.save()
            } else {
                let client = new Client({
                    name,
                    email,
                    password,
                    phone,
                    address,
                    photo: imgUrl
                })
                return await client.save()
            }

        } catch (error) {
            console.log(error);
        }
    }
}
