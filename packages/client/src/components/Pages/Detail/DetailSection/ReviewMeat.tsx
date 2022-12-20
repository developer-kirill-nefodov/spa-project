import React from 'react';

import ActiveStar from "../../../../utils/assets/png/active-star.png";
import Star from "../../../../utils/assets/png/star.png";

import {IItemMeat} from "../../../../interfaces/review";

import {
  TextareaMeat,
  ItemMeatDiv,
  ReviewImagDiv,
  ReviewIconDic,
  TitleItem,
  StartsDiv,
  ReviewStarsDiv,
  ReviewGrade
} from "../styles";

const ReviewMeat = ({title, stars, grade, img, setTextStates, textState}: IItemMeat | any) => {
  return (
    <ItemMeatDiv>
      <ReviewImagDiv>
        <ReviewIconDic>
          <img src={img} alt="Icon"/>
        </ReviewIconDic>
        <TitleItem>{title}</TitleItem>
        <ReviewStarsDiv>
          <StartsDiv>
            {Array(stars).fill(1).map((e, idx) => (
              <img key={'PopularMeat_' + idx} src={idx + 1 <= grade ? ActiveStar : Star} alt='Star'/>
            ))}
            <ReviewGrade>{grade}/{stars}</ReviewGrade>
          </StartsDiv>
        </ReviewStarsDiv>
      </ReviewImagDiv>
      <TextareaMeat
        defaultValue={textState}
        placeholder='Meal Summary Review'
        {...setTextStates}
      />
    </ItemMeatDiv>
  );
};

export default ReviewMeat;