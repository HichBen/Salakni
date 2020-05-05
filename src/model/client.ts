import * as mongoose from 'mongoose';


export module ClientModel {
     const ClientSchema = new mongoose.Schema({
        fullName: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
    }, {
        collection: 'clients' ,
        timestamps: {createdAt: 'createdDate', updatedAt: 'updatedDate'}
    });

     export const instance = mongoose.model<any>('Client', ClientSchema);

}