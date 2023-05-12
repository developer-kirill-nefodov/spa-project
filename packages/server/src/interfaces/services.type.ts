export interface IAllReviewParams {
  start?: number
  take?: number
  skip?: number
  orderBy?: null | {
    [key in string]: string | number
  }
}

export interface IReviewID {
  id: string
}

export interface IReview {
  id: string
  text1?: string
  text2?: string
  text3?: string
  summary?: string
  nickname?: string
  createdAt?: string
  updatedAt?: string
}

export interface IReviewCreate {
  input: IReview
}

export type IReviewUpdate = IReviewID & IReviewCreate