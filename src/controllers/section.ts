import { Section } from "../models/section.model.js";



export const getAllSections = async () => {
    const allSections = await Section.find();
    return allSections;
};

export const getSectionById = async (req, res) => {
    const section = await Section.findById(req.params.id);
    return section
};

export const createSection = async (req, res) => {
    const section = await Section.create(req.body);
    return section;
};

export const updateSection = async (req, res) => {
    const updatedSection = await Section.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    return updatedSection;
};

export const deleteSection = async (req, res) => {

    // HARD DELETE
    const deletedSection = await Section.findByIdAndDelete(req.params.id);
    return deletedSection;
};      