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
    type: [String],
    require: true,
  },
})

const ProjectSchema = new Schema({
  id: {
    type: Number,
    require: true,
    unique: true,
  },
  cover: {
    type: String,
    require: true,
  },
  project_name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  tag_list: {
    type: [String],
    require: true,
  },
  github_link: {
    type: String,
    require: true,
  },
  link: {
    type: String,
    require: true,
  },
})

const TagSchema = new Schema({
  key: {
    type: Number,
    required: [true, 'Key是必填项'],
    unique: true,
  },
  value: {
    type: String,
    required: [true, 'Value是必填项'],
    minlength: [2, 'Value的长度必须大于1个字符'],
  },
});

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
export const ExperienceModel = mongoose.models.Experience || model('Experience', ExperienceSchema)
export const ProjectModel = mongoose.models.Project || model('Project', ProjectSchema)
export const TagModel = mongoose.models.Tag || model('Tag', TagSchema)
