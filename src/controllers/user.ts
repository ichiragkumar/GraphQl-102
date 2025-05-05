import { User } from "../models/user.model.js";



export const getAllUsers = async () => {
    const allUsers = await User.find();
    return allUsers;
};

export const getUserById = async (req, res) => {
    const user = await User.findById(req.params.id);
    return user
};

export const createUser = async (req, res) => {
    const user = await User.create(req.body);
    res.status(201).json(user);
};

export const updateUser = async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.status(200).json(user);
};

export const deleteUser = async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).json(user);
};