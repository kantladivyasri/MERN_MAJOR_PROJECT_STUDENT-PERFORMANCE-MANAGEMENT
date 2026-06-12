const Course = require("../models/Course");

// Create Course

const createCourse = async (req, res) => {

    try {

        const { title, description, trainer } = req.body;

        const course = await Course.create({
            title,
            description,
            trainer
        });

        res.status(201).json(course);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Get All Courses

const getCourses = async (req, res) => {

    try {

        const courses = await Course.find();

        res.status(200).json(courses);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

module.exports = {
    createCourse,
    getCourses
};