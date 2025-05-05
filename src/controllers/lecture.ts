
import { Lecture } from "../models/lecture.model.js";



export const getAllLectures = async () => {
    const allLectures = await Lecture.find();
    return allLectures;
};

export const getLectureById = async (req, res) => {
    const lecture = await Lecture.findById(req.params.id);
    return lecture
};

export const createLecture = async (req, res) => {
    const lecture = await Lecture.create(req.body);
    return lecture;
};

export const updateLecture = async (req, res) => {
    const updatedLecture = await Lecture.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    return updatedLecture;
};

export const deleteLecture = async (req, res) => {

    // HARD DELETE
    const deletedLecture = await Lecture.findByIdAndDelete(req.params.id);
    return deletedLecture;
};  