import React, {ReactChild} from 'react';
import {ContentMealDiv, TitleMeal} from "../styles";

interface IContentMeal {
  title: string
  children: ReactChild | ReactChild[]
}

const ContentMeal = ({title, children}: IContentMeal) => {
  return (
    <ContentMealDiv>
      <TitleMeal>
        {title}
      </TitleMeal>
      {children}
    </ContentMealDiv>
  );
};

export default ContentMeal;