import React, {Dispatch} from 'react';

import SettingColors, {ISettingColors} from "./SettingColors";
import SettingHeader, {ISettingHeader} from "./SettingHeader";
import SettingSharing from "./SettingSharing";

import setting from "../../../../../utils/assets/svg/setting.svg";
import close from "../../../../../utils/assets/svg/close.svg";

import {LineMenu} from "../Menu/styles";
import * as S from "./styles";

export interface ISettingModal {
  openSetting: boolean
  setOpenSetting:  Dispatch<React.SetStateAction<boolean>>
}

const SettingModal = ({
  color,
  header,
  background,
  openSetting,
  setOpenSetting,
  setColor,
  setHeader,
  setBackground
}: ISettingColors & ISettingHeader & ISettingModal) => {

  return (
    <>
      <S.IconFixSetting onClick={() => setOpenSetting(true)}>
        <img src={setting} alt="setting"/>
      </S.IconFixSetting>
      <S.DivSetting onClick={() => setOpenSetting(false)} open={openSetting}>
        <S.DivSettingWrapper open={openSetting} onClick={(e) =>  e.stopPropagation()}>
          {openSetting && (
            <S.DivSettingW width={'292px'}>
              <S.DivClose onClick={() => setOpenSetting(false)}>
                <img src={close} alt="close"/>
              </S.DivClose>
              <S.TitleSettingDiv>
                <h5>Soft UI Configurator</h5>
                <p>See our dashboard options.</p>
              </S.TitleSettingDiv>
              <LineMenu/>
              <SettingColors
                color={color}
                background={background}
                setColor={setColor}
                setBackground={setBackground}
              />
              <SettingHeader
                header={header}
                setHeader={setHeader}
              />
              <LineMenu/>
              <S.DivSettingW margin={'24px 0 0 0'}>
                <S.SettingButtonFree active={true}>
                  Free Download
                </S.SettingButtonFree>
                <S.SettingButtonFree active={false}>
                  View documentation
                </S.SettingButtonFree>
              </S.DivSettingW>
              <SettingSharing/>
            </S.DivSettingW>
          )}
        </S.DivSettingWrapper>
      </S.DivSetting>
    </>
  );
};

export default SettingModal;