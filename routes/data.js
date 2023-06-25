const express = require("express");
const router = express.Router()
const Post= require('../models/post')


// get all Single Post
router.get('/post/:id', async(req, res) => {
    try {
        const data = await Post.find({_id: req.params.id})
        res.json(data)
    } catch (error) {
        res.send('Error'+error)
    }
})

// create Post data
router.post('/', async(req, res) => {

    console.log(req.body);
    const {title,desc,userId} = req.body

    try {
        const data = new Post({title,desc,userId})
        const a1 = await data.save()
        res.json(a1)
    } catch (error) {
        res.send('Error'+error)
    }
})

// Get a AllPost by Userid
router.get('/:id', async(req, res) => {
    try{
        const user = await Post.find({userId: req.params.id});
        res.status(200).json(user);
    }catch( error ){
        res.status(500).json({ message: error.message })
    }
})

// Update users data
router.patch('/:id', async(req, res) => {
    try {

        const updates = req.body;
        const options = {new:true}
        const rslt = await Post.findByIdAndUpdate(req.params.id, updates, options)
        
        res.json(rslt)
    } catch (error) {
        res.status(500).send('ERROR'+error)
    }
})

// delete Post data
router.delete('/:id', async(req, res) => {
    try {
        const rslt = await Post.findByIdAndDelete(req.params.id)
        
        res.json(rslt)
    } catch (error) {
        res.send('ERROR'+error)
    }
})

module.exports = router;