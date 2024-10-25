import { connect, disconnect, model } from "mongoose";
import { IEvent, eventSchema } from "../models/event/IEvent";


export class EventRepository {

    private dbname = process.env.DB_NAME ?? 'foxpectrum';

    public async save(event: IEvent): Promise<any> {
        const Event = model<IEvent>('Event', eventSchema);

        const eventData = new Event({...event,});

        try {
            await connect(`mongodb://localhost:27017/${this.dbname}`);
            return !!(await eventData.save()).id;
        } catch (error) {
            console.log(error);
        }
    }

    public async getByDate(date: string) {
        const Event = model<IEvent>('Event', eventSchema);

        try {
            await connect(`mongodb://localhost:27017/${this.dbname}`);
            return await Event.find({ date: date as unknown as string});
        } catch (error) {
            console.log(error);
        } finally {
            disconnect();
        }

        return [];
    }

    public async update(_id: string, event: IEvent) {
        const Event = model<IEvent>('Event', eventSchema);

        try {
            await connect(`mongodb://localhost:27017/${this.dbname}`);
            return await Event.updateOne({_id}, {...event}); //== {task: todo.task, check: todo.check}
        } catch (error) {
            console.log(error);
        } finally {
            disconnect();
        }

        return Event;
    }

    public async deleteById(_id: string) {
        const Event = model<IEvent>('Event', eventSchema);

        try{
            await connect(`mongodb://localhost:27017/${this.dbname}`);
            return await Event.deleteOne({_id});
        } catch (error) {
            console.log(error);
        } finally {
            disconnect();
        }
    }
}
