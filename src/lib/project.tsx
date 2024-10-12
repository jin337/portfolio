import mongoose, { Schema, model } from 'mongoose';

const ProjectSchema = new Schema({
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
    type: [Number],
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
  sort: {
    type: Number,
    require: true,
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'Member',
    required: true,
  },
})

export const ProjectModel = mongoose.models.Project || model('Project', ProjectSchema)
