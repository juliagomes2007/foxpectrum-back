import { Schema, Types } from "mongoose";
import { IUser } from "../user/IUser";

export interface IBtnCrisis {
    phone: Array<string>;
    help: Array<string>;
    user: IUser;
}

export const btnCrisisSchema = new Schema<IBtnCrisis>({
    phone : {type : Array<String>, required : false },
    help : {type : Array<String>, required : false },
    user : { type: Types.ObjectId, ref: 'User', required: false }
});
