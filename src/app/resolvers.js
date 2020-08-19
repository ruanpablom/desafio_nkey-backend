import JobOp from './models/JobOp';

export default {
  Query: {
    jobOp: async (_, { id }) => {
      const jobOp = await JobOp.findById(id);

      if (!jobOp) {
        return { error: "Job Opportunity doesn't exists" };
      }

      return jobOp;
    },
    jobOps: async () => {
      const jobOps = await JobOp.find({});

      if (!jobOps) {
        return {
          error: 'There are no Job Opportunities',
        };
      }

      return jobOps;
    },
  },

  Mutation: {
    addJobOp: async (_, { jobOpInput }) => {
      const jobOp = await JobOp.create(jobOpInput);

      if (!jobOp) {
        return { error: 'Job opportunity creation failed' };
      }
      return jobOp;
    },
    updateJobOp: async (_, { id, jobOpInputUpdate }) => {
      const jobOp = await JobOp.findByIdAndUpdate(id, jobOpInputUpdate);

      if (!jobOp) {
        return false;
      }

      return true;
    },
    deleteJobOp: async (_, { id }) => {
      const removed = await JobOp.findByIdAndRemove(id);

      if (!removed) {
        return false;
      }

      return true;
    },
  },
};
