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
  salaryRange: {
    min: {
      type: Number,
      required: true,
    },
    max: {
      type: Number,
      required: true,
    },
  },
  requirements: {
    type: [String],
  },
  experience: {
    type: String,
    required: true,
  },
  ocupation: {
    type: String,
    required: true,
  },
});

export default mongoose.model('JobOp', JobOpSchema);
