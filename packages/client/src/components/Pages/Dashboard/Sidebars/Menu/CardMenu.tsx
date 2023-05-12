import React from 'react';

import diamond from '../../../../../utils/assets/svg/diamond.svg';

import * as S from "./styles";
import {SpanPercent, SubscriptionCard} from "../../DashboardSection/Cards/styles";

const creativeIcon = "https://demos.creative-tim.com/soft-ui-dashboard/assets/img/curved-images/white-curved.jpg";

interface ICardMenu {
  color: string
}

const CardMenu = ({color}: ICardMenu) => {
  return (
    <S.CardMenuWrapper>
      <S.WrapperCardMenu>
        <S.CardMenuDiv background={color}>
          <img
            src={creativeIcon}
            alt="img"
          />
          <div className="background"/>
        </S.CardMenuDiv>
        <S.DivCartMenu>
          <S.DiamondImgBlock>
            <img src={diamond} alt="diamond"/>
          </S.DiamondImgBlock>
          <SpanPercent margin={'0'}>
            Need help?
          </SpanPercent>
          <SubscriptionCard
            color={'#fff'}
            fontSize={'0.75rem'}
            margin={'0 0 16px 0'}
          >
            Please check our docs
          </SubscriptionCard>
          <S.ButtonDiamond>
            Documentation
          </S.ButtonDiamond>
        </S.DivCartMenu>
      </S.WrapperCardMenu>
      <S.ButtonDiamondBackground>
        Upgrade to pro
      </S.ButtonDiamondBackground>
    </S.CardMenuWrapper>
  );
};

export default CardMenu;