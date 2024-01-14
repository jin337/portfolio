import mongoose from 'mongoose'

export const connectDB = async () => {
  try {
    const uri: string = process.env.MONGODB_URI || ''
    if (!uri) {
      throw new Error('connect error!')
    }
    await mongoose.connect(uri)
  } catch (error) {
    throw new Error('connect error!')
  }
}

const Schema = mongoose.Schema
const ExperienceSchema = new Schema({
  id: {
    type: Number,
    require: true,
  },
  logo: {
    type: String,
    require: true,
  },
  position: {
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
  time_form: {
    type: String,
    require: true,
  },
  time_to: {
    type: Number,
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
})
const ProjectSchema = new Schema({
  id: {
    type: Number,
    require: true,
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
const UserSchema = new Schema({
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
  linkedin_link: {
    type: String,
    require: true,
  },
  bannerbg: {
    type: String,
    require: true,
  },
  description: {
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

export const UserModel = mongoose.models.User || mongoose.model('User', UserSchema)