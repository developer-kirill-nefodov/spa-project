import React, {Dispatch, SetStateAction} from 'react';

import user from '../../../../../utils/assets/png/user.png';
import bell from "../../../../../utils/assets/png/bell.png";
import setting from "../../../../../utils/assets/svg/setting.svg";
import menu from "../../../../../utils/assets/svg/menu (1).svg";

import * as S from "./styles";

interface ISingIn {
  setOpenMenu: Dispatch<SetStateAction<boolean>>
  setOpenSetting: Dispatch<SetStateAction<boolean>>
}

const SingIn = ({setOpenMenu, setOpenSetting}: ISingIn) => {
  return (
    <>
      <S.HeaderContent>
        <S.ImgUser
          src={user}
          alt="user"
        />
        <S.SingInText>
          Sing In
        </S.SingInText>
      </S.HeaderContent>
      <S.OpenMenuIcon onClick={() => setOpenMenu(true)}>
        <img src={menu} alt="menu"/>
      </S.OpenMenuIcon>
      <S.HeaderContent onClick={() => setOpenSetting(true)} style={{margin: '0 10px 0 16px'}}>
        <img
          src={setting}
          alt="setting"
          width={19}
          height={19}
        />
      </S.HeaderContent>
      <S.HeaderContent>
        <img
          src={bell}
          alt="bell"
          width={19}
          height={19}
        />
      </S.HeaderContent>
    </>
  );
};

export default SingIn;