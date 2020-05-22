import mongoose from 'mongoose';

const deploymentSchema = new mongoose.Schema({
  url: String,
  templateName: String,
  version: String,
  deployedAt: { type: Date, default: Date.now },
});

export const Deployment = mongoose.model('Deployment', deploymentSchema);
