import { Schema, Types } from "mongoose";

export interface IRegister {
    email: string;
    password: string;
}

export const registerSchema = new Schema<IRegister>({
    email: { type: String, required: true },
    password: { type: String, required: true },
});