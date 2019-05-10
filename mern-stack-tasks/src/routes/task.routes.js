import { Router } from 'express';

import Task from '../models/task';

const router = Router();

router.get('/', async (req, res) => {
    const result = await Task.find();
    console.log(result);
    res.json(result);
});

router.get('/:id', async (req, res) => {
    const result = await Task.findById(req.params.id);
    console.log(result);
    res.json(result);
})

router.post('/', async (req, res) => {
    const { title, description } = req.body;
    const new_task = new Task ({
        title: title,
        description: description
    });
    await new_task.save();
    console.log(new_task);
    res.json({
        status: true
    });
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    const update_task = { title, description };
    const result = await Task.findByIdAndUpdate(id, update_task, {
        useFindAndModify: false
    });
    console.log(result);
    res.json({
        status: true
    });
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    console.log(id);
    const result = await Task.findByIdAndDelete(id);
    console.log(result);
    res.json({
        status: true
    });
});

export default router;