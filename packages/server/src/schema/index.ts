import {buildSchema} from 'graphql';

export const schema = buildSchema(`
  type Review {
      id: ID
      text1: String
      text2: String
      text3: String
      summary: String
      nickname: String
      createdAt: String
      updatedAt: String
  }
  
  input ReviewInput {
      id: ID
      text1: String
      text2: String
      text3: String
      summary: String
      nickname: String
  }
  
  type Query {
    getAllReview(skip: Int, take: Int, orderBy: ReviewInput): [Review]
    getReview(id: ID): Review
  }
  
  type Mutation {
    createReview(input: ReviewInput): Review
    updateReview(id: ID, input: ReviewInput): Review
    deleteReview(id: ID): Review
  }
`);
