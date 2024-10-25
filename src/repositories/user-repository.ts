import { connect, disconnect, model, Schema } from "mongoose";
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

    public async getAll(): Promise<IUser[]> {
        const User = model<IUser>('User', userSchema);

        try {
            await connect(`mongodb://localhost:27017/${this.dbname}`);
            return await User.find({});
        } catch (error) {
            console.log(error);
        } finally {
            disconnect();
        }

        return [];
    }

    public async update(_id: string, todo: IUser) {
        const User = model<IUser>('User', userSchema);

        try {
            await connect(`mongodb://localhost:27017/${this.dbname}`);
            return await User.updateOne({_id}, {...todo}); //== {task: todo.task, check: todo.check}
        } catch (error) {
            console.log(error);
        } finally {
            disconnect();
        }

        return User;
    }

    public async deleteById(_id: string) {
        const User = model<IUser>('User', userSchema);

        try{
            await connect(`mongodb://localhost:27017/${this.dbname}`);
            return await User.deleteOne({_id});
        } catch (error) {
            console.log(error);
        } finally {
            disconnect();
        }
    }
}