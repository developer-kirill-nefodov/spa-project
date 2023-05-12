import React from 'react';

import star from '../../../../../utils/assets/png/star.png'

import * as S from "./styles";
import {TitleActiveUser} from "../../DashboardSection/Cards/styles";

const SettingSharing = () => {
  return (
    <div>
      <S.DivStar>
        <S.ButtonStar>
          <img src={star} alt="star"/>
          <span>Star</span>
        </S.ButtonStar>
        <S.ButtonStar style={{background: '#fff'}}>
          <span>375</span>
        </S.ButtonStar>
      </S.DivStar>
      <TitleActiveUser margin={'24px 0 0 0'} textAlign={'center'}>
        Thank you for sharing!
      </TitleActiveUser>
      <S.DivStar style={{margin: '8px 0 0 0'}}>
        <S.ButtonSharing active={true}>
          <img
            src="https://sites.psu.edu/racheltan/wp-content/uploads/sites/8056/2014/07/twitter.png"
            alt="Tweet"
          />
          Tweet
        </S.ButtonSharing>
        <S.ButtonSharing active={true}>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/2048px-Facebook_f_logo_%282021%29.svg.png"
            alt="Share"
          />
          Share
        </S.ButtonSharing>
      </S.DivStar>
    </div>
  );
};

export default SettingSharing;