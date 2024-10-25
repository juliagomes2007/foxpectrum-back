import { connect, disconnect, model, Schema } from "mongoose";
import { IRegister, registerSchema } from "../models/register/IRegister";

export class RegisterRepository {
    
    private dbname = process.env.DB_NAME ?? 'foxpectrum';

    public async save(user: IRegister): Promise<any> {
        const Register = model<IRegister>('Register', registerSchema);
        
        const registerData = new Register({...Register});
        
        try {
            await connect(`mongodb://localhost:27017/${this.dbname}`);
            return !!(await registerData.save()).id;
        } catch (error) {
            console.log(error);
        }
    }

    public async getAll(): Promise<IRegister[]> {
        const Register = model<IRegister>('Register', registerSchema);

        try {
            await connect(`mongodb://localhost:27017/${this.dbname}`);
            return await Register.find({});
        } catch (error) {
            console.log(error);
        } finally {
            disconnect();
        }

        return [];
    }

    public async update(_id: string, todo: IRegister) {
        const Register = model<IRegister>('Register', registerSchema);

        try {
            await connect(`mongodb://localhost:27017/${this.dbname}`);
            return await Register.updateOne({_id}, {...todo}); //== {task: todo.task, check: todo.check}
        } catch (error) {
            console.log(error);
        } finally {
            disconnect();
        }

        return Register;
    }

    public async deleteById(_id: string) {
        const Register = model<IRegister>('Register', registerSchema);

        try{
            await connect(`mongodb://localhost:27017/${this.dbname}`);
            return await Register.deleteOne({_id});
        } catch (error) {
            console.log(error);
        } finally {
            disconnect();
        }
    }
}