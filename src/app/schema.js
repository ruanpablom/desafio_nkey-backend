import { gql } from 'apollo-server';

const typeDefs = gql`
  type JobOp {
    id: ID!
    title: String!
    description: String!
    location: String!
    jobSalary: JobSalary!
    tags: [String]
  }

  type JobSalary {
    min: Float!
    max: Float!
  }

  type Query {
    jobOp(id: ID!): JobOp
  }

  input JobSalaryInput {
    min: Float!
    max: Float!
  }

  input JobOpInput {
    title: String!
    description: String!
    location: String!
    jobSalary: JobSalaryInput!
    tags: [String]
  }

  input JobOpInputUpdate {
    title: String
    description: String
    location: String
    jobSalary: JobSalaryInput
    tags: [String]
  }

  type Mutation {
    addJobOp(jobOpInput: JobOpInput): JobOp
    updateJobOp(id: ID!, jobOpInputUpdate: JobOpInputUpdate): Boolean
    deleteJobOp(id: ID!): Boolean
  }
`;

export default typeDefs;
