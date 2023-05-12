import React, {Dispatch} from 'react';
import Switch from "react-switch";

import {TitleActiveUser} from "../../DashboardSection/Cards/styles";

export interface ISettingHeader {
  header: string
  setHeader:  Dispatch<React.SetStateAction<string>>
}

const SettingHeader = ({header, setHeader}: ISettingHeader) => {
  const setCheckHeader = (value: boolean) => {
    if(value) {
      setHeader('fixed');
    } else {
      setHeader('block');
    }
  }

  return (
    <div style={{margin: '1rem 0 1.5rem 0'}}>
      <TitleActiveUser margin={'0'}>
        Navbar Fixed
      </TitleActiveUser>
      <Switch
        className="react-switch"
        onChange={setCheckHeader}
        checked={header === 'fixed'}
        onColor="#404772"
        handleDiameter={19}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow='0px 0px 1px 10px transparent'
        height={20}
        width={40}
      />
    </div>
  );
};

export default SettingHeader;