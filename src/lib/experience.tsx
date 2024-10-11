import mongoose, { Schema, model } from 'mongoose';

const ExperienceSchema = new Schema({
  id: {
    type: Number,
    require: true,
    unique: true,
  },
  logo: {
    type: String,
    require: true,
  },
  position: {
    type: String,
    require: true,
  },
  link: {
    type: String,
    require: true,
  },
  job_type: {
    type: Number,
    require: true,
    enum: [0, 1], // 0-part-Time，1-full-Time
  },
  base: {
    type: String,
    require: true,
  },
  start_form: {
    type: String,
    require: true,
  },
  end_to: {
    type: String,
    require: true,
  },
  description: {
    type: [String],
    require: true,
  },
  tag_list: {
    type: [Number],
    require: true,
  },
})

export const ExperienceModel = mongoose.models.Experience || model('Experience', ExperienceSchema)
