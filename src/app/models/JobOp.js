import mongoose from 'mongoose';

const JobOpSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  jobSalary: {
    min: {
      type: Number,
      required: true,
    },
    max: {
      type: Number,
      required: true,
    },
  },
  tags: {
    type: [String],
  },
});

export default mongoose.model('JobOp', JobOpSchema);
