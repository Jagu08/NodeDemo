const express = require('express');
const router = express.Router();
const Task = require('../models/task');

router.get('/',async (req,res) => {
    try {
        console.log('in gettttttttttt',Task.find({}))
    const tasks = await Task.find({});
    console.log('taskssssssssss',tasks);
    res.json(tasks);
    } catch (error) {
        console.log('errorrrrrrrr in get');
    }
});

router.post('/tasks', async (req,res) => {
    try {
        console.log('reqqq',req.body);
        const newtasks = new Task(req.body);
        console.log('newtaskss',newtasks)
        await newtasks.save();
        res.json(newtasks);
        } catch (error) {
            console.error('errorrrrrrrr in post', error);
        }
})


router.put('/tasks/:id', async (req,res) => {
    try {
        const updatetasks = await Task.findByIdAndUpdate(req.params.id, req.body, {new : true});
        res.json(updatetasks);
        } catch (error) {
            console.log('errorrrrrrrr in put');
        }
})


router.delete('/:id',async (req,res) => {
    try {
        const delettask = await Task.findByIdAndDelete(req.params.id);
        if(!delettask) {
            return res.json({error: 'item not fount'});
        }
        res.json({message : 'Item deleted successfully'});
        } catch (error) {
            console.log('errorrrrrrrr in delete');
        }
})

module.exports = router;