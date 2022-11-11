import { model, Schema } from "mongoose";


export const ExampleSchema = new Schema<IMExample>(
    {
        field: {
            type: Number,
        }
    })

interface IMExample {
    field: number
}

export const ModelExample = model<IMExample>('model', ExampleSchema);