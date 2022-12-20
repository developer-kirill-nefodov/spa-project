import {
  getReviewService,
  getAllReviewService,
  createReviewService,
  updateReviewService,
  deleteReviewService
} from "../services/review.service";

export const root = {
  getReview: getReviewService,
  getAllReview: getAllReviewService,
  createReview: createReviewService,
  updateReview: updateReviewService,
  deleteReview: deleteReviewService
}
