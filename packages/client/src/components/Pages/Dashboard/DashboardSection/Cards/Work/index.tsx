import React from 'react';

import arrow from "../../../../../../utils/assets/svg/arrow(1).svg";

import * as G from '../styles';
import * as S from "./styles";

const Work = () => {
  return (
    <S.CardWork>
      <S.CardWorkContent>
        <S.BackgroundImage background={'url("https://demos.creative-tim.com/soft-ui-dashboard/assets/img/ivancik.jpg")'}/>
        <S.BackgroundImage background={'linear-gradient(310deg, #141727, #3a416f) 50%; opacity: .8;'}/>
        <G.DivR>
          <G.TextCard color={'#fff'}>
            Work with the rockets
          </G.TextCard>
          <G.SubscriptionCard color={'#fff'}>
            Wealth creation is an evolutionarily recent positive-sum game. It is all about who take the opportunity first.
          </G.SubscriptionCard>
          <G.ReadMoreText style={{color: '#fff'}}>
            Read More <G.ImageRotate src={arrow} alt="arrow"/>
          </G.ReadMoreText>
        </G.DivR>
      </S.CardWorkContent>
    </S.CardWork>
  );
};

export default Work;