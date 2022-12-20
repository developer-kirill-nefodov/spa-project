import React, {Dispatch, SetStateAction, useState} from 'react';

import CardMenu from "./CardMenu";
import {LinkMenuItem, LogoMenu} from "./LinkMenuItem";
import {TableSVG} from '../../../../../utils/assets'

import close from "../../../../../utils/assets/svg/close.svg";

import * as S from "./styles";
import {DivClose} from "../Setting/styles";

const arrLink = [
  {Icon: TableSVG, text: 'Dashboard'},
  {Icon: TableSVG, text: 'Tables'},
  {Icon: TableSVG, text: 'Billing'},
  {Icon: TableSVG, text: 'Virtual Reality'},
  {Icon: TableSVG, text: 'RTL'},
];

const accountPages = [
  {Icon: TableSVG, text: 'Profile'},
  {Icon: TableSVG, text: 'Sign In'},
  {Icon: TableSVG, text: 'Sign Up'},
];

const dashboardIcon = 'https://demos.creative-tim.com/soft-ui-dashboard/assets/img/logo-ct-dark.png';

interface IMenu {
  color: string
  background: string
  openMenu: boolean
  setOpenMenu: Dispatch<SetStateAction<boolean>>
}

const Menu = ({color, background, openMenu, setOpenMenu}: IMenu) => {
  const [active, setActive] = useState('Dashboard')

  return (
    <S.MenuWrapper onClick={() => setOpenMenu(false)}>
      <S.MenuDiv
        openMenu={openMenu}
        background={background}
        onClick={(e) =>  e.stopPropagation()}
      >
        <div>
          <DivClose active={true} onClick={() => setOpenMenu(false)}>
            <img src={close} alt="close"/>
          </DivClose>
          <LogoMenu
            text='Soft UI Dashboard'
            src={dashboardIcon}
          />
          <S.LineMenu/>
          {arrLink.map((e, key) => (
            <LinkMenuItem
              {...e}
              key={key + '_LinkMenuItem'}
              active={active}
              setActive={setActive}
              color={color}
            />
          ))}
          <S.TitleLineMenu>
            Account pages
          </S.TitleLineMenu>
          {accountPages.map((e, key) => (
            <LinkMenuItem
              {...e}
              key={key + '_LinkMenuItem'}
              active={active}
              setActive={setActive}
              color={color}
            />
          ))}
        </div>
        <CardMenu color={color}/>
      </S.MenuDiv>
    </S.MenuWrapper>
  );
};

export default Menu;
