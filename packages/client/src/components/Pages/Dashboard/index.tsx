import React, {useState} from 'react';

import Menu from "./Sidebars/Menu";
import Header from "./DashboardSection/Header";
import DashboardSection from "./DashboardSection/Section";
import SettingModal from "./Sidebars/Setting";

import * as S from "./styles";

const DashboardComponent = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSetting, setOpenSetting] = useState(false);

  const [header, setHeader] = useState('fixed');
  const [background, setBackground] = useState('transparent');
  const [color, setColor] = useState('linear-gradient(310deg,#7928ca,#ff0080)');

  return (
    <S.DashboardWrapperContent>
      <Menu
        color={color}
        background={background}
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
      />
      <S.WrapperContent>
        <Header
          header={header}
          openSetting={true}
          setOpenMenu={setOpenMenu}
          setOpenSetting={setOpenSetting}
        />
        <DashboardSection/>
      </S.WrapperContent>
      <SettingModal
        openSetting={openSetting}
        setOpenSetting={setOpenSetting}
        color={color}
        setColor={setColor}
        background={background}
        setBackground={setBackground}
        header={header}
        setHeader={setHeader}
      />
    </S.DashboardWrapperContent>
  );
};

export default DashboardComponent;