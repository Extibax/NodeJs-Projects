import {
    Router
} from 'express';

import user_model from '../models/user';

const router = Router();

router.get('/', async (req, res) => {
    const rows = await user_model.getUsers();
    console.log(rows);
    res.json(rows);
});

router.post('/', async (req, res) => {
    const new_user = {
        id: null,
        firstname: req.body.firstname,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        created_at: null,
        updated_at: null
    };
    const result = await user_model.insertUser(new_user);
    console.log(result);
    res.json(result);
});

router.put('/:id', async (req, res) => {
    const update_user = {
        id: req.params.id,
        firstname: req.body.firstname,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        created_at: null,
        updated_at: null
    };

    const result = await user_model.updateUser(update_user);
    console.log(result);
    res.json(result);
});

router.delete('/:id', async (req, res) => {
    const result = await user_model.deleteUser(req.params.id);
    console.log(result);
    res.json(result);
})

export default router;