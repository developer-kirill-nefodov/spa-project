import React, {Dispatch, SetStateAction} from 'react';

import * as S from "./styles";

interface ILinkMenuItemProps {
  Icon: any
  text: string
  active: string
  color: string
  setActive: Dispatch<SetStateAction<string>>
}

interface ILogoMenuProps {
  src: string
  text: string
}

export const LogoMenu = ({src, text}: ILogoMenuProps) => {
  return (
    <S.LogoMenuLink active={false}>
      <img src={src} alt="logo"/>
      <S.SpanLinkItemLogo>{text}</S.SpanLinkItemLogo>
    </S.LogoMenuLink>
  )
}

export const LinkMenuItem = ({Icon, active, text, color, setActive}: ILinkMenuItemProps) => {
  return (
    <S.LinkMenuWrapper active={active === text} onClick={() => setActive(text)}>
      <S.ActiveLinkItemBlock color={color} active={active === text}>
        <S.WrapperIcon color={active === text ? "#fff" : "#3a416f"}>
          <Icon/>
        </S.WrapperIcon>
      </S.ActiveLinkItemBlock>
      <S.SpanLinkItem>
        {text}
      </S.SpanLinkItem>
    </S.LinkMenuWrapper>
  );
};
