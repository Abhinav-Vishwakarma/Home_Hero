const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    name :String,
    description:String
})

const itemModel =mongoose.model("Item",itemScheme)
module.exports = itemModel