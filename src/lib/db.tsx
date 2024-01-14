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
