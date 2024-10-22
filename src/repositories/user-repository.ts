import { connect, model, Schema } from "mongoose";
import { IUser, userSchema } from "../models/user/IUser";



export class UserRepository {
    
    private dbname = process.env.DB_NAME ?? 'foxpectrum';

    public async save(user: IUser): Promise<any> {
        const User = model<IUser>('User', userSchema);
        
        const userData = new User({...user});
        
        try {
            await connect(`mongodb://localhost:27017/${this.dbname}`);
            return !!(await userData.save()).id;
        } catch (error) {
            console.log(error);
        }
    }
}