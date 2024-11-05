import { required } from "joi";
import { Schema, Types } from "mongoose";
// import { IUser } from "../user/IUser";

export interface ITodo {
    id: Types.ObjectId;
    task: string;
    date: string;
    time: string;
    // everyDay: Boolean;
    // createdBy: IUser;
    // assignedTo: Array<IUser | undefined>;
    check: boolean;
}

export const todoSchema = new Schema<ITodo>({
    id : {type: Types.ObjectId, required: false},
    task : {type : String, required : true },
    date : {type : String, required : true },
    time : {type : String, required : true },
    // everyDay : {type : Boolean, default: false, required : true },
    // createdBy : { type: Types.ObjectId, ref: 'User', required: false },
    // assignedTo : { type: Array<Types.ObjectId>, ref: 'User', required: true },
    check : {type : Boolean, default: false, required: false},
});