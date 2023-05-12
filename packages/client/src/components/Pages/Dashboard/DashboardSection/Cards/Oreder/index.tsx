import React from 'react';

import OrderItem from "./OrderItem";

import arrow from "../../../../../../utils/assets/svg/arrow-20.svg";

import * as G from "../styles";
import * as S from "./styles";

const arr = [
  {title: '$2400, Design changes', text: '22 DEC 7:20 PM', src: 'https://cdn-icons-png.flaticon.com/512/1216/1216733.png'},
  {title: 'New order #1832412', text: '21 DEC 11 PM', src: 'https://cdn-icons-png.flaticon.com/512/1216/1216733.png'},
  {title: 'Server payments for April', text: '21 DEC 9:34 PM', src: 'https://cdn-icons-png.flaticon.com/512/1216/1216733.png'},
  {title: 'New card added for order #4395133', text: '20 DEC 2:20 AM', src: 'https://cdn-icons-png.flaticon.com/512/1216/1216733.png'},
  {title: 'Unlock packages for development', text: '18 DEC 4:54 AM', src: 'https://cdn-icons-png.flaticon.com/512/1216/1216733.png'},
  {title: 'New order #9583120', text: '17 DEC', src: 'https://cdn-icons-png.flaticon.com/512/1216/1216733.png'},
];

const CardOrders = () => {
  return (
    <G.CardRocketWork justifyContent={'flex-start'}>
      <div>
        <G.TitleActiveUser margin={'0 0 8px 0'}>
          Orders overview
        </G.TitleActiveUser>
        <G.SubscriptionCard
          display={'flex'}
          fontSize={'0.875rem'}
          margin={'0 0 25px 0'}
        >
          <G.ImgInTitleDiv>
            <G.ImgArrow src={arrow} alt="arrow"/>
          </G.ImgInTitleDiv>
          <G.SpanCartG
            margin={'0 3px 0 0'}
          >
            24%
          </G.SpanCartG>
          this month
        </G.SubscriptionCard>
      </div>
      <S.OrderContent>
        <S.LineOrder/>
        {arr.map((e, key) => (
          <OrderItem key={key + '_OrderItem'} {...e}/>
        ))}
      </S.OrderContent>
    </G.CardRocketWork>
  );
};

export default CardOrders;