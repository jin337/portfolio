import mongoose, { Schema, model } from 'mongoose';

const MemberSchema = new Schema({
  id: {
    type: Number,
    require: true,
    unique: true,
  },
  cn_name: {
    type: String,
    require: true,
  },
  cn_slogn: {
    type: String,
    require: true,
  },
  cn_about: {
    type: [String],
    require: true,
  },
  en_name: {
    type: String,
    require: true,
  },
  en_slogn: {
    type: String,
    require: true,
  },
  en_about: {
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
