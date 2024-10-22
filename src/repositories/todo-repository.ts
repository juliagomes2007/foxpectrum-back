import { connect, disconnect, model } from "mongoose";
import { ITodo, todoSchema } from "../models/todo/ITodo";


export class TodoRepository {

    private dbname = process.env.DB_NAME ?? 'foxpectrum';

    public async save(todo: ITodo): Promise<any> {
        const Todo = model<ITodo>('Todo', todoSchema);

        const todoData = new Todo({...todo,});

        try {
            await connect(`mongodb://localhost:27017/${this.dbname}`);
            return !!(await todoData.save()).id;
        } catch (error) {
            console.log(error);
        }
    }

    public async getAll(): Promise<ITodo[]> {
        const Todo = model<ITodo>('Todo', todoSchema);

        try {
            await connect(`mongodb://localhost:27017/${this.dbname}`);
            return await Todo.find({});
        } catch (error) {
            console.log(error);
        } finally {
            disconnect();
        }

        return [];
    }

    public async getByStatus(status: boolean) {
        const Todo = model<ITodo>('Todo', todoSchema);

        try {
            await connect(`mongodb://localhost:27017/${this.dbname}`);
            return await Todo.find({ check: status as unknown as boolean});
        } catch (error) {
            console.log(error);
        } finally {
            disconnect();
        }

        return [];
    }

    public async getByDate(date: string) {
        const Todo = model<ITodo>('Todo', todoSchema);

        try {
            await connect(`mongodb://localhost:27017/${this.dbname}`);
            return await Todo.find({ date: date as unknown as string});
        } catch (error) {
            console.log(error);
        } finally {
            disconnect();
        }

        return [];
    }

    public async update(_id: string, todo: ITodo) {
        const Todo = model<ITodo>('Todo', todoSchema);

        try {
            await connect(`mongodb://localhost:27017/${this.dbname}`);
            return await Todo.updateOne({_id}, {...todo}); //== {task: todo.task, check: todo.check}
        } catch (error) {
            console.log(error);
        } finally {
            disconnect();
        }

        return Todo;
    }

    public async deleteById(_id: string) {
        const Todo = model<ITodo>('Todo', todoSchema);

        try{
            await connect(`mongodb://localhost:27017/${this.dbname}`);
            return await Todo.deleteOne({_id});
        } catch (error) {
            console.log(error);
        } finally {
            disconnect();
        }
    }
}
