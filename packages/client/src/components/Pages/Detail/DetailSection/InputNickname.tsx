import React from 'react';

import CheckBoxNickname from "./CheckBoxNickname";

import Edit from '../../../../utils/assets/png/Union.png';
import {IInputNickname} from "../../../../interfaces/review";

import {
  InputImageDiv,
  InputNicknameDiv,
  NicknameHeader,
  NicknameInput,
  WrapStarts,
  SubInpDiv,
  NicknameBtn
} from "../styles";

const InputNickname = ({textState, setTextStates}: IInputNickname | any) => {
  return (
    <SubInpDiv>
      <WrapStarts>
        <InputNicknameDiv>
          <NicknameHeader>
            Your Nickname (other users will see this)
          </NicknameHeader>
          <NicknameInput
            type='text'
            defaultValue={textState}
            {...setTextStates}
          />
          <InputImageDiv>
            <img src={Edit} alt="Edit"/>
          </InputImageDiv>
        </InputNicknameDiv>
        <CheckBoxNickname/>
        <NicknameBtn type='submit'>Submit Review</NicknameBtn>
      </WrapStarts>
    </SubInpDiv>
  );
};

export default InputNickname;