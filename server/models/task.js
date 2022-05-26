import mongoose from 'mongoose';

const taskSchema = mongoose.Schema({
    id: String,
    title: String
});

var task = mongoose.model('task', taskSchema);

export default task;