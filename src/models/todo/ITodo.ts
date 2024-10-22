import { Schema, Types } from "mongoose";
import { IUser } from "../user/IUser";

export interface ITodo {
    task: string;
    date:  Date | string;
    everyDay: Boolean;
    createdBy: IUser;
    assignedTo: Array<IUser | undefined>;
    check: Boolean;
}

export const todoSchema = new Schema<ITodo>({
    task : {type : String, required : true },
    date : {type : Date, required : false },
    everyDay : {type : Boolean, default: false, required : true },
    createdBy : { type: Types.ObjectId, ref: 'User', required: false },
    assignedTo : { type: Array<Types.ObjectId>, ref: 'User', required: true },
    check : {type : Boolean, default: false, required: false},
});
