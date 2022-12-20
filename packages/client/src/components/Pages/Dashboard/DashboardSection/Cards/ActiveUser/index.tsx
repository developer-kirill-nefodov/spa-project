import React from 'react';

import ActiveUser from "../../Charts/ChartActiveUser";
import ActiveUserItem from "./ActiveUserItem";

import invision from '../../../../../../utils/assets/svg/invision.svg';

import * as G from '../styles';
import * as S from './styles';

const arr = [
  {icon: invision, title: 'Users', text: '36K', percent: 60},
  {icon: invision, title: 'Clicks', text: '2m', percent: 90},
  {icon: invision, title: 'Sales', text: '435$', percent: 20},
  {icon: invision, title: 'Items', text: '43', percent: 40},
]

const CardUserActive = () => {
  return (
    <G.CardRocketWork margin={'0 15px 0 0'}>
      <S.DivActiveUser>
        <ActiveUser/>
      </S.DivActiveUser>
      <G.TitleActiveUser margin={'1.5rem 0 0 0'}>
        Active Users
      </G.TitleActiveUser>
      <S.SubscriptionUser>
        (<span style={{fontWeight: 'bold'}}>+23%</span>) than last week
      </S.SubscriptionUser>
      <S.DivUserContainer>
        {arr.map((e, idx) => (
          <ActiveUserItem {...e} key={idx + '_BlockUserActiveIcon'}/>
        ))}
      </S.DivUserContainer>
    </G.CardRocketWork>
  );
};

export default CardUserActive;