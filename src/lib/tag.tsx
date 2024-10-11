import mongoose, { Schema, model } from 'mongoose';

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
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'Member',
    required: true,
  },
});

export const TagModel = mongoose.models.Tag || model('Tag', TagSchema)
