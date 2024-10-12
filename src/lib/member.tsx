import mongoose, { Schema, model } from 'mongoose';

const MemberSchema = new Schema({
  id: {
    type: Number,
    require: true,
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
  about: {
    type: [String],
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
})

export const MemberModel = mongoose.models.Member || model('Member', MemberSchema)
