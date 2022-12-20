import React from 'react';

import * as G from "../styles";
import * as S from "./styles";

interface IOrderItem {
  title: string
  text: string
  src: string
}

const OrderItem = ({title, text, src}: IOrderItem) => {
  return (
    <S.DivOrderItem>
      <S.DivOrderItemIcon>
        <img src={`${src}`} alt="icon"/>
      </S.DivOrderItemIcon>
      <S.DivOrderItemContent>
        <G.TitleCard>
          {title}
        </G.TitleCard>
        <G.SubscriptionCard
          display={'flex'}
          fontSize={'0.75rem'}
          margin={'4px 0 0 0'}
          lineHeight={1.25}
          fontWeight={600}
        >
          {text}
        </G.SubscriptionCard>
      </S.DivOrderItemContent>
    </S.DivOrderItem>
  );
};

export default OrderItem;