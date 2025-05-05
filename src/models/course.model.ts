



import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
 price: {
    type: Number,
    required: true,
 },
 totalNumberOfLectures: {
    type: Number,
    required: true,
 },
 soldCount: {
    type: Number,
    required: true,
 },
  courseDuration: {
    type: Number,
    required: true,
 },
   studentsBoughtList: {
    type: Array,
    required: true,
  },
  instructor: {
    type: String,
    required: true,
  },
 category: {
    type: String,
    required: true,
 },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export const Course = mongoose.model("Course", courseSchema);