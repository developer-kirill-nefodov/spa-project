import React from 'react';

import money from '../../../../../../utils/assets/svg/money.svg'

import * as G from "../styles";
import * as S from './styles';

interface ITotalsProps {
  title: string
  text: string
  percent: number
  icon?: string
}

const Totals = ({title, text, percent, icon = money}: ITotalsProps) => {
  const color = percent > 0 ? '#82d616' : '#ea0606';

  return (
    <G.TotalItem>
      <div>
        <S.TitleTotals>
          {title}
        </S.TitleTotals>
        <G.TextCard>
          {text}
          <S.SpanPercentTotal style={{color}}>
            {(percent > 0 ? '+' : '') + percent + '%'}
          </S.SpanPercentTotal>
        </G.TextCard>
      </div>
      <S.DivTotalsIcon>
        <img src={icon} alt="money"/>
      </S.DivTotalsIcon>
    </G.TotalItem>
  );
};

export default Totals;