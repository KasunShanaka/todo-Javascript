import mongoose from "mongoose";
import task from "../models/task.js";

export const getTasks = async (req, res) => {
    try {
        const tasks = await task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createTask = async (req, res) => {
    const taskBody = req.body;
    const newTask = new task(taskBody);

    try {
        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const deleteTask = async (req, res) => {
    const {id: _id} = req.body;
    console.log(_id);
    try {
        await task.findByIdAndDelete(_id)
        res.status(201).json({ message: "Deleted Successfully"});
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}