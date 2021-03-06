const mongoose = require("mongoose")

const CourseSchema = new mongoose.Schema({
    course_code: {
        type: String,
        required: true
    },
    course_name: {
        type: String,
        required: true
    },
    course_description: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Course", CourseSchema)