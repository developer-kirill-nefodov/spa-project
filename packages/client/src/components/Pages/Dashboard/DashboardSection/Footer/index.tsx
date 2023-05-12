import React from 'react';

import heard from '../../../../../utils/assets/png/heart.png';

import * as S from "./styles";

const Footer = () => {
  return (
    <footer style={{marginTop: '40px'}}>
      <S.DivFooter>
        <S.DivFooterOneText>
          @{new Date().getFullYear()}, made with
          <img src={heard} alt="heard"/>
          by <span style={{fontWeight: 600, margin: '0 4px'}}>Creative Tim</span> for a better web.
        </S.DivFooterOneText>
        S.<S.DivFooterOneText>
        <S.DivFooterLink padding={'0 1rem'}>Creative Tim</S.DivFooterLink>
        <S.DivFooterLink padding={'0 1rem'}>About Us</S.DivFooterLink>
        <S.DivFooterLink padding={'0 1rem'}>Blog</S.DivFooterLink>
        <S.DivFooterLink padding={'0 0 0 1rem'}>License</S.DivFooterLink>
      </S.DivFooterOneText>
      </S.DivFooter>
    </footer>
  );
};

export default Footer;