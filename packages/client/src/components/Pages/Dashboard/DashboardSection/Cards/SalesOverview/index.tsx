import React from 'react';

import ChartSalesOverview from "../../Charts/ChartSalesOverview";

import arrow from '../../../../../../utils/assets/svg/arrow-20.svg'

import * as G from '../styles';
import * as S from "./styles";

const CardSalesOverview = () => {
  return (
    <S.CardSalesOverview>
      <S.TitleSales>
        Sales overview
      </S.TitleSales>
      <S.SubscriptionSales>
        <G.ImgInTitleDiv>
          <G.ImgArrow src={arrow} alt="arrow"/>
        </G.ImgInTitleDiv>
        <G.SpanCartG>
          4% more
        </G.SpanCartG>
        in 2021
      </S.SubscriptionSales>
      <S.DivSalesOverview>
        <ChartSalesOverview/>
      </S.DivSalesOverview>
    </S.CardSalesOverview>
  );
};

export default CardSalesOverview;