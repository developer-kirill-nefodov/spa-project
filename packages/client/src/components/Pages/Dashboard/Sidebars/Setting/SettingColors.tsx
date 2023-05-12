import React, {Dispatch} from 'react';

import {TitleActiveUser} from "../../DashboardSection/Cards/styles";
import {ColorItem, SettingButton, TextSetting} from "./styles";

const arr = [
  'linear-gradient(310deg,#7928ca,#ff0080)',
  'linear-gradient(310deg,#141727,#3a416f)',
  'linear-gradient(310deg,#2152ff,#21d4fd)',
  'linear-gradient(310deg,#17ad37,#98ec2d)',
  'linear-gradient(310deg,#f53939,#fbcf33)',
  'linear-gradient(310deg,#ea0606,#ff667c)'
];

export interface ISettingColors {
  color: string
  background: string
  setColor: Dispatch<React.SetStateAction<string>>
  setBackground:  Dispatch<React.SetStateAction<string>>
}

const SettingColors = ({setColor, color, setBackground, background}: ISettingColors) => {
  return (
    <div>
      <TitleActiveUser margin={'0 0 8px 0'}>
        Sidebar Colors
      </TitleActiveUser>
      <div>
        {arr.map((e, key) => (
          <ColorItem
            key={'ColorItem_' + key}
            onClick={() => setColor(e)}
            background={e}
            active={color === e}
          />
        ))}
      </div>
      <TitleActiveUser margin={'20px 0 0 0'}>
        Sidenav Type
      </TitleActiveUser>
      <TextSetting>
        Choose between 2 different sidenav types.
      </TextSetting>
      <div style={{display: 'flex'}}>
        <SettingButton
          active={background === 'transparent'}
          onClick={() => setBackground('transparent')}
        >
          Transparent
        </SettingButton>
        <SettingButton
          style={{margin: '0 0 0 8px'}}
          active={background === '#fff'}
          onClick={() => setBackground('#fff')}
        >
          White
        </SettingButton>
      </div>
    </div>
  );
};

export default SettingColors;