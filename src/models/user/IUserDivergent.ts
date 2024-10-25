import { Schema, Types } from "mongoose";
import { IUser } from "./IUser";

export interface IUserDivergent extends IUser {
    neurodivergence: string;
    verbal: boolean;
}

export const userSchema = new Schema<IUserDivergent>({
    neurodivergence : {type: String, required: true},
    verbal : {type: Boolean, default: true, required: true}
});