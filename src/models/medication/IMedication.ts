import { Schema, Types } from "mongoose";
import { IUser } from "../user/IUser";

export interface IMedication {
    name: string;
    hour: Date | string;
    stock: number;
    dosage: number;
    duration: number;
    takes: IUser;
}

export const medicationSchema = new Schema<IMedication>({
    name : {type : String, required : false },
    hour : {type : Date, required : false },
    stock : {type : Number, required : false },
    dosage : {type : Number, default: false, required: false },
    duration : {type : Number, default: false, required: false },
    takes : { type: Types.ObjectId, ref: 'User', required: false },
});
