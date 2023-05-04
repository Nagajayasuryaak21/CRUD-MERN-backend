const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: { type:String},
    number: { type:String},
    email: {type: String }
});

const Student = mongoose.model("Students", studentSchema);

module.exports={Student}