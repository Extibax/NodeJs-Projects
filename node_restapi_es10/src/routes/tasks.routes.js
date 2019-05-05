import { Router } from "express";

import { connect } from "../database";
import { ObjectID } from "mongodb";

const router = Router();

router.get('/', async (req, res) => {
    const db = await connect();
    const result = await db.collection('tasks').find({}).toArray();
    console.log(result);
    res.json(result);
});

router.post('/', async (req, res) => {
    const db = await connect();
    const task = {
        title: req.body.title,
        description: req.body.description
    };
    const result = await db.collection('tasks').insert(task);
    res.send(result.ops[0]);
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const db = await connect();
    const result = await db.collection('tasks').findOne({_id: ObjectID(id)});
    res.json(result);
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const update_task = {
        title: req.body.title,
        description: req.body.description
    };
    const db = await connect();
    const result = await db.collection('tasks').findOneAndUpdate({_id: ObjectID(id)}, { $set: update_task });
    res.json({
        message: `Task ${id} updated`,
        result
    })
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const db = await connect();
    const result = await db.collection('tasks').findOneAndDelete({_id: ObjectID(id)});
    res.json({
        message: `Task ${id} deleted`,
        result
    });
});

export default router;