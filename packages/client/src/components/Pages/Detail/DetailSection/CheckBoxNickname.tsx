import React from 'react';
import {CheckBoxDiv, CheckBoxNick, CheckBoxText} from "../styles";

const CheckBoxNickname = () => {
  return (
    <CheckBoxDiv>
      <CheckBoxNick type='checkbox'/>
      <CheckBoxText>
        I confirm that I have read and accepted Terms and Conditions and Privacy Policy
      </CheckBoxText>
    </CheckBoxDiv>
  );
};

export default CheckBoxNickname;