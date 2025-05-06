import { Course } from "../models/course.model.js";



export const getAllCourses = async () => {
    const allCourses = await Course.find();
    return allCourses;
};

export const getCourseById = async (req, arg: {id:string}) => {
    console.log(arg.id)
    const course = (await Course.findById(arg.id)).populate("instructor");
    return course;

};

export const createCourse = async (req, res) => {
    const course = await Course.create(req.body);
    return course;
};

export const updateCourse = async (req, res) => {
    const updatedCourse = await Course.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    return updatedCourse;
};

export const deleteCourse = async (req, res) => {

    // HARD DELETE
    const deletedCourse = await Course.findByIdAndDelete(req.params.id);
    return deletedCourse;
};