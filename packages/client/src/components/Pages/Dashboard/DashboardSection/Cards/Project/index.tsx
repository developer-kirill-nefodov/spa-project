import React from 'react';

import TableProject from "./Table";

import done from "../../../../../../utils/assets/svg/done.svg";

import * as G from '../styles';
import * as S from './styles';
import {SpanCartG} from "../styles";

const CardProjects = () => {
  return (
    <S.CardProjects>
      <G.TitleActiveUser margin={'0 0 8px 0'}>
        Objects
      </G.TitleActiveUser>
      <G.SubscriptionCard
        display={'flex'}
        margin={'0 0 12px 0'}
        fontSize={'0.875rem'}
      >
        <G.ImgInTitleDiv>
          <img src={done} alt="done"/>
        </G.ImgInTitleDiv>
        <SpanCartG
          margin={'0 3px 0 0'}
        >
          30 done
        </SpanCartG>
        this month
      </G.SubscriptionCard>
      <S.WrapperTable>
        <TableProject/>
      </S.WrapperTable>
    </S.CardProjects>
  );
};

export default CardProjects;