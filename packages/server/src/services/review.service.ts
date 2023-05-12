import {Review, writeDB} from "../db/workDB";
import {uid} from "../db/dataGeneration";

import {
  IReviewID,
  IReview,
  IAllReviewParams,
  IReviewCreate,
  IReviewUpdate
} from "../interfaces/services.type";

export const getAllReviewService = ({skip = 0, take = 10, orderBy = null}: IAllReviewParams) => {
  let newReview = [...Review];

  if(orderBy) {
    for(let key of Object.keys(orderBy)) {
      newReview = newReview.filter((e: any) => `${e[key]}` === `${orderBy[key]}`)
    }
    return newReview.slice(skip, skip + take);
  }
  return newReview.slice(skip, skip + take);
}

export const getReviewService = ({id}: IReviewID) => {
  return Review.find((e) => e.id === id);
}

export const createReviewService = ({input}: IReviewCreate) => {
  const review: IReview = {
    ...input,
    id: uid(),
    createdAt: `${Date.now()}`,
    updatedAt: `${Date.now()}`
  }

  Review.push(review);
  writeDB(null);

  return review;
}

export const updateReviewService = ({id, input}: IReviewUpdate) => {
  const review = Review.find((e) => e.id === id);

  if (review) {
    const newInput = Object.entries(input).reduce((acc: any, [key, value]) => {
      if(value && key !== 'id') acc[key] = value; return acc;
    }, {});
    const newReview = {...review, ...newInput, updatedAt: `${Date.now()}`}
    Review[Review.indexOf(review)] = newReview;
    writeDB(null);

    return newReview;
  }
  return {message: 'not found'}
}

export const deleteReviewService = ({id}: IReviewID) => {
  const review = Review.find((e) => e.id === id);

  if (review) {
    Review.splice(Review.indexOf(review), 1);
    writeDB(null);

    return review;
  }
  return {message: 'not found'}
}
