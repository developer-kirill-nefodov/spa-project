import React from 'react';

import Star from "../../../../utils/assets/png/star.png";
import ActiveStar from "../../../../utils/assets/png/active-star.png";

import {
  StartsDiv,
  TitleItem,
  WrapStarts,
  WrapImageMenu,
  WrapPopularMeat
} from "../styles";
import {IItemMeat} from "../../../../interfaces/review";

const PopularMeat = ({title, stars, grade, img}: IItemMeat) => {
  return (
    <WrapPopularMeat>
      <WrapImageMenu>
        <img src={img} alt="Frame"/>
      </WrapImageMenu>
      <WrapStarts>
        <TitleItem>{title}</TitleItem>
        <StartsDiv>
          {Array(stars).fill(1).map((e, idx) => (
            <img key={'PopularMeat_' + idx} src={idx + 1 <= grade ? ActiveStar : Star} alt='Star'/>
          ))}
        </StartsDiv>
      </WrapStarts>
    </WrapPopularMeat>
  );
};

export default PopularMeat;