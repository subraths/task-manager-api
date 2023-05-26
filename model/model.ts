import { Schema, model } from "mongoose";


const TaskModel = new Schema({
  name: {
    type: String,
    required: [true, "must provide name"],
    maxlength: [25, "name cannt be more than 20 characters"],
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false
  },
})


export default model("Task", TaskModel)
