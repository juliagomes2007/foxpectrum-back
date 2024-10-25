import { Schema, Types } from "mongoose";

export interface IUser {
    email: string;
    name: string;
    birthdate: Date;
    famRole: string;
    wishlist: Array<string>;
}

export const userSchema = new Schema<IUser>({
    email : {type : String, required : true },
    name : {type : String, required : true},
    birthdate : {type : Date, required : true },
    famRole : {type : String, required : true },
    wishlist : {type: Array<String>, required : false }
});
