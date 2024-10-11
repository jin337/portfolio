import mongoose, { Schema, model } from 'mongoose';

const MemberSchema = new Schema({
  id: {
    type: Number,
    require: true,
    unique: true,
  },
  name: {
    type: [String],
    require: true,
    validate: {
      validator: (v: string) => v.length === 2,
      message: '不可超过2组数据',
    },
  },
  slogn: {
    type: [String],
    require: true,
    validate: {
      validator: (v: string) => v.length === 2,
      message: '不可超过2组数据',
    },
  },
  about: {
    type: [[String]],
    require: true,
    validate: {
      validator: (v: string) => Array.isArray(v) && v.length <= 2 && v.every(i => Array.isArray(i) && i.length > 0),
      message: '不可超过2组数据',
    },
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
