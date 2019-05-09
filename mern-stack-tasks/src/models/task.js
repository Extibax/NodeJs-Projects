import mongoose from 'mongoose';

const task_schema = new mongoose.Schema ({
    title: { type: String, required: true },
    description: { type: String, required: true }
});

export default mongoose.model('task', task_schema);