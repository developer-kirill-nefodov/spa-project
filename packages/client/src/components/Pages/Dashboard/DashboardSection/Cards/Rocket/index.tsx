import React from 'react';

import arrow from '../../../../../../utils/assets/svg/arrow.svg';

import * as G from "../styles";
import * as S from "./styles";

const Rocket = () => {
  return (
    <S.CardRocket>
      <S.RocketTextContent>
        <S.RocketTitle>
          Built by developers
        </S.RocketTitle>
        <G.TextCard>
          Soft UI Dashboard
        </G.TextCard>
        <G.SubscriptionCard>
          From colors, cards, typography to complex elements, you will find the full documentation.
        </G.SubscriptionCard>
        <G.ReadMoreText>
          Read More <G.ImageRotate src={arrow} alt="arrow"/>
        </G.ReadMoreText>
      </S.RocketTextContent>
      <S.DivIconRocket>
        <img src='https://demos.creative-tim.com/soft-ui-dashboard/assets/img/illustrations/rocket-white.png' alt="icon"/>
      </S.DivIconRocket>
    </S.CardRocket>
  );
};

export default Rocket;