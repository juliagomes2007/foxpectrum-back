import { connect, disconnect, model } from "mongoose";
import { IMedication, medicationSchema } from "../models/medication/IMedication";


export class MedicationRepository {

    private dbname = process.env.DB_NAME ?? 'foxpectrum';

    public async save(medication: IMedication): Promise<any> {
        const Medication = model<IMedication>('Medication', medicationSchema);

        const medicationData = new Medication({...medication,});

        try {
            await connect(`mongodb://localhost:27017/${this.dbname}`);
            return !!(await medicationData.save()).id;
        } catch (error) {
            console.log(error);
        }
    }

    public async getAll(): Promise<IMedication[]> {
        const Medication = model<IMedication>('Medication', medicationSchema);

        try {
            await connect(`mongodb://localhost:27017/${this.dbname}`);
            return await Medication.find({});
        } catch (error) {
            console.log(error);
        } finally {
            disconnect();
        }

        return [];
    }

    public async update(_id: string, medication: IMedication) {
        const Medication = model<IMedication>('Medication', medicationSchema);

        try {
            await connect(`mongodb://localhost:27017/${this.dbname}`);
            return await Medication.updateOne({_id}, {...medication}); //== {task: todo.task, check: todo.check}
        } catch (error) {
            console.log(error);
        } finally {
            disconnect();
        }

        return Medication;
    }

    public async deleteById(_id: string) {
        const Medication = model<IMedication>('Medication', medicationSchema);

        try{
            await connect(`mongodb://localhost:27017/${this.dbname}`);
            return await Medication.deleteOne({_id});
        } catch (error) {
            console.log(error);
        } finally {
            disconnect();
        }
    }
}