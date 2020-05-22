import mongoose from 'mongoose';

const templateSchema = new mongoose.Schema({
  name: String,
  versions: [String],
});

export const Template = mongoose.model('Template', templateSchema);
