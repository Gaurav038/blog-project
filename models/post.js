const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("posts", postSchema)