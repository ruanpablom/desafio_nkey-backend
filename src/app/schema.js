import { gql } from 'apollo-server';

const typeDefs = gql`
  type JobOp {
    id: ID!
    title: String!
    description: String!
    location: String!
    salaryRange: SalaryRange!
    requirements: [String]
    experience: String!
    ocupation: String
  }

  type SalaryRange {
    min: Float!
    max: Float!
  }

  input SalaryRangeInput {
    min: Float!
    max: Float!
  }

  input JobOpInput {
    title: String!
    description: String!
    location: String!
    salaryRange: SalaryRangeInput!
    requirements: [String]
    experience: String!
    ocupation: String!
  }

  input JobOpInputUpdate {
    title: String
    description: String
    location: String
    salaryRange: SalaryRangeInput
    requirements: [String]
    experience: String
    ocupation: String
  }

  type Mutation {
    addJobOp(jobOpInput: JobOpInput): JobOp
    updateJobOp(id: ID!, jobOpInputUpdate: JobOpInputUpdate): Boolean
    deleteJobOp(id: ID!): Boolean
  }

  type Query {
    jobOp(id: ID!): JobOp
    jobOps: [JobOp]
  }
`;

export default typeDefs;
