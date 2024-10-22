import { connect, disconnect, model, Schema } from "mongoose";
import { IMoodTracker, moodTrackerSchema } from "../models/moodTracker/IMoodTracker";


export class MoodTrackerRepository {
    private dbname = process.env.DB_NAME ?? 'foxpectrum';

    public async save(moodTracker: IMoodTracker): Promise<any> {
        const MoodTracker = model<IMoodTracker>('MoodTracker', moodTrackerSchema);
        console.log(moodTracker)
        const moodTrackerData = new MoodTracker({...moodTracker});

        try {
            await connect(`mongodb://localhost:27017/${this.dbname}`);
            return !!(await moodTrackerData.save()).id;
        } catch (error) {
            console.log(error);
        }
    }

    public async getAll(): Promise<IMoodTracker[]> {
        const MoodTracker = model<IMoodTracker>('MoodTracker', moodTrackerSchema);

        try {
            await connect(`mongodb://localhost:27017/${this.dbname}`);
            return await MoodTracker.find({});
        } catch (error) {
            console.log(error);
        } finally {
            disconnect();
        }

        return [];
    }

    public async getById(id: string) {
        const MoodTracker = model<IMoodTracker>('Todo', moodTrackerSchema);

        try {
            await connect(`mongodb://localhost:27017/${this.dbname}`);
            return await MoodTracker.find({ check: id as unknown as string});
        } catch (error) {
            console.log(error);
        } finally {
            disconnect();
        }

        return [];
    }

    public async update(_id: string, moodTracker: IMoodTracker) {
        const MoodTracker = model<IMoodTracker>('MoodTracker', moodTrackerSchema);

        try {
            await connect(`mongodb://localhost:27017/${this.dbname}`);
            return await MoodTracker.updateOne({_id}, {...moodTracker}); //== {task: todo.task, check: todo.check}
        } catch (error) {
            console.log(error);
        } finally {
            disconnect();
        }

        return MoodTracker;
    }

    public async deleteById(_id: string) {
        const MoodTracker = model<IMoodTracker>('MoodTracker', moodTrackerSchema);

        try{
            await connect(`mongodb://localhost:27017/${this.dbname}`);
            return await MoodTracker.deleteOne({_id});
        } catch (error) {
            console.log(error);
        } finally {
            disconnect();
        }
    }
}
