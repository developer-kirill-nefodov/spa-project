import React from 'react';

import Totals from "./Cards/Totals";
import CardUserActive from "./Cards/ActiveUser";
import CardRocket from "./Cards/Rocket";
import CardWork from "./Cards/Work";
import CardSalesOverview from "./Cards/SalesOverview";
import CardProjects from "./Cards/Project";
import CardOrders from "./Cards/Oreder";
import Footer from "./Footer";

import * as S from "./styles";

const totalsArr = [
  {title: 'Today\'s Money', text: '$53,000', percent: 55},
  {title: 'Today\'s Users', text: '2,300', percent: 3},
  {title: 'New Clients', text: '+3,462', percent: -2},
  {title: 'Sales', text: '$103,430', percent: 5},
];

const DashboardSection = () => {
  return (
    <S.DashboardWrapper>
      <S.DivTotalsCards>
        {totalsArr.map((e, idx) => (
          <Totals key={idx + '_Totals'} {...e}/>
        ))}
      </S.DivTotalsCards>
      <S.DivRocketCards>
        <CardRocket/>
        <CardWork/>
      </S.DivRocketCards>
      <S.DivUserCards>
        <CardUserActive/>
        <CardSalesOverview/>
      </S.DivUserCards>
      <S.DivProjectCards>
        <CardProjects/>
        <CardOrders/>
      </S.DivProjectCards>
      <Footer/>
    </S.DashboardWrapper>
  );
};

export default DashboardSection;