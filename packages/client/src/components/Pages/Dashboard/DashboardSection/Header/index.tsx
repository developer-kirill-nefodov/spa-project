import React, {Dispatch, SetStateAction} from 'react';

import Search from "./Search";
import SingIn from "./SingIn";

import {useScrollHeader} from "../../../../../utils/hooks/useScroll";
import {ISettingModal} from "../../Sidebars/Setting";

import * as S from "./styles";

interface IHeader {
  header: string
  setOpenMenu: Dispatch<SetStateAction<boolean>>
  setOpenSetting:  Dispatch<React.SetStateAction<boolean>>
}

const Header = ({header, setOpenMenu, setOpenSetting}: IHeader & ISettingModal) => {
  const [zero] = useScrollHeader();

  return (
    <S.HeaderWrapper zero={zero}>
      <S.HeaderPage zero={zero && header === 'fixed'}>
        <S.HeaderWrapperContent zero={zero}>
          <div>
            <S.OlHeader>
              <S.LiLink>
                <a href="#">Pages</a>
              </S.LiLink>
              <S.Before>/</S.Before>
              <S.LiLink>
                Dashboard
              </S.LiLink>
            </S.OlHeader>
            <S.HeaderH6>Dashboard</S.HeaderH6>
          </div>
          <S.HeaderContent>
            <Search/>
            <S.HeaderButton>
              Online Builder
            </S.HeaderButton>
            <SingIn
              setOpenMenu={setOpenMenu}
              setOpenSetting={setOpenSetting}
            />
          </S.HeaderContent>
        </S.HeaderWrapperContent>
      </S.HeaderPage>
    </S.HeaderWrapper>
  );
};

export default Header;