const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema(
{
    student:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    assignment:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Assignment",
        required:true
    },

    submissionText:{
        type:String,
        required:true
    },

    status:{
        type:String,
        default:"Submitted"
    },

    marks:{
        type:Number,
        default:0
    }
},
{
    timestamps:true
});

module.exports = mongoose.model("Submission", submissionSchema);