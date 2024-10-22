import { Schema, Types } from "mongoose";
import { IFamily } from "../family/IFamily";

export interface IUser {
    email: string;
    //family: IFamily;
    wishlist: Array<string>;
    password: string;
}

export const userSchema = new Schema<IUser>({
    email : {type : String, required : false },
    //family : {type: Types.ObjectId, ref: 'Family', required : false},
    wishlist : {type: Array<String>, required : false },
    password : {type : String, required: false },
});
