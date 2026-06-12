const Assignment = require("../models/Assignment");

// Create Assignment

const createAssignment = async (req,res)=>{

    try{

        const {title,description,course} = req.body;

        const assignment = await Assignment.create({
            title,
            description,
            course
        });

        res.status(201).json(assignment);

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};

// Get Assignments

const getAssignments = async(req,res)=>{

    try{

        const assignments = await Assignment.find()
        .populate("course");

        res.json(assignments);

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};

module.exports = {
    createAssignment,
    getAssignments
};