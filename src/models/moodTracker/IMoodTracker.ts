import { Schema, Types } from "mongoose";
import { IUser } from "../user/IUser";

export interface IMoodTracker {
    day: string;
    feeling: Array<String | undefined>;
    write: string;
    overcharged: boolean;
    verbal: boolean;
    physicalContact: boolean;
    date: Date | string;
    user: IUser;
}

export const moodTrackerSchema = new Schema<IMoodTracker>({
    day : {type : String, required : false },
    feeling : {type : Array<String>, required : false },
    write : {type : String, required : false },
    overcharged : {type : Boolean, default: false, required: false },
    verbal : {type : Boolean, default: false, required: false },
    physicalContact : {type : Boolean, default: false, required: false },
    date : {type : Date, required : false },
    user : { type: Types.ObjectId, ref: 'User', required: false },
});
