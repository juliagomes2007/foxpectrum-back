import { Schema, Types } from "mongoose";
import { IUser } from "../user/IUser";

export interface IEvent {
    event: string;
    date:  Date | string;
    everyDay: Boolean;
    assignedTo: Array<IUser | undefined>;
    desc: string;
}

export const eventSchema = new Schema<IEvent>({
    event : {type : String, required : true },
    date : {type : Date, required : false },
    everyDay : {type : Boolean, default: false, required : true },
    assignedTo : { type: Array<Types.ObjectId>, ref: 'User', required: true },
    desc : {type : String, default: false, required: false},
});