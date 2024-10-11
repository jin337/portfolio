import mongoose, { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  id: {
    type: Number,
    require: true,
    unique: true,
  },
  type: {
    type: String,
    require: true,
    enum: ['en', 'cn'],
  },
  name: {
    type: String,
    require: true,
  },
  slogn: {
    type: String,
    require: true,
  },
  cover: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  github_link: {
    type: String,
    require: true,
  },
  twitter_link: {
    type: String,
    require: true,
  },
  bannerbg: {
    type: String,
    require: true,
  },
  about: {
    type: [String],
    require: true,
  },
  skills: {
    type: [String],
    require: true,
  },
  experience_list: {
    type: [ExperienceSchema],
    require: true,
  },
  project_list: {
    type: [ProjectSchema],
    require: true,
  },
})

export const UserModel = mongoose.models.User || model('User', UserSchema)
