import { connect, disconnect, model } from "mongoose";
import { IBtnCrisis, btnCrisisSchema } from "../models/btnCrisis/IBtnCrisis";


export class BtnCrisisRepository {

    private dbname = process.env.DB_NAME ?? 'foxpectrum';

    public async save(btnCrisis: IBtnCrisis): Promise<any> {
        const BtnCrisis = model<IBtnCrisis>('BtnCrisis', btnCrisisSchema);

        const btnCrisisData = new BtnCrisis({...btnCrisis,});

        try {
            await connect(`mongodb://localhost:27017/${this.dbname}`);
            return !!(await btnCrisisData.save()).id;
        } catch (error) {
            console.log(error);
        }
    }

    public async getAll(): Promise<IBtnCrisis[]> {
        const BtnCrisis = model<IBtnCrisis>('BtnCrisis', btnCrisisSchema);

        try {
            await connect(`mongodb://localhost:27017/${this.dbname}`);
            return await BtnCrisis.find({});
        } catch (error) {
            console.log(error);
        } finally {
            disconnect();
        }

        return [];
    }

    public async update(_id: string, btnCrisis: IBtnCrisis) {
        const BtnCrisis = model<IBtnCrisis>('BtnCrisis', btnCrisisSchema);

        try {
            await connect(`mongodb://localhost:27017/${this.dbname}`);
            return await BtnCrisis.updateOne({_id}, {...btnCrisis}); //== {task: todo.task, check: todo.check}
        } catch (error) {
            console.log(error);
        } finally {
            disconnect();
        }

        return BtnCrisis;
    }

    public async deleteById(_id: string) {
        const BtnCrisis = model<IBtnCrisis>('BtnCrisis', btnCrisisSchema);

        try{
            await connect(`mongodb://localhost:27017/${this.dbname}`);
            return await BtnCrisis.deleteOne({_id});
        } catch (error) {
            console.log(error);
        } finally {
            disconnect();
        }
    }
}
