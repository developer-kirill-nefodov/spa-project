import Frame3 from "../assets/png/Frame 2623.png";
import Frame from "../assets/png/Frame 2827.png";
import Frame1 from "../assets/png/Frame 2827 (1).png";
import Frame2 from "../assets/png/Frame 2827 (2).png";

import {IReviewData} from "../../interfaces/review";

export const ReviewMeatData: IReviewData = {
  title: 'Morroccan Chicken With Couscous',
  stars: 5,
  grade: 3,
  img: Frame3,
  idxName: 'summary'
};

export const ArrReviewMeatData: IReviewData[] = [
  {title: 'Morrocan Chicken', stars: 5, grade: 3, img: Frame, idxName: 'text1'},
  {title: 'Couscous Pilaf', stars: 5, grade: 2, img: Frame1, idxName: 'text2'},
  {title: 'Turkey Meatloaf', stars: 5, grade: 4, img: Frame2, idxName: 'text3'},
];

export const ReviewDataState = {
  id: '',
  text1: '',
  text2: '',
  text3: '',
  summary: '',
  nickname: ''
}