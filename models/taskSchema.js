import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  due_date: { type: Date, required: true },
  status: {
    type: String,
    enum: ["completed", "incomplete"],
    default: "incomplete",
  },
  color: {
    type: String,
    enum: ["red", "blue","green"],
    default: "green",
  },
  archived: {
    type: Boolean,
    default: false,
  },
  createdBy: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Task = mongoose.model("Task", taskSchema);
