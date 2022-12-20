import React from 'react';

import * as S from "./styles";

interface IBlockUserActiveIconProps {
  icon: any
  title: string
  text: string
  percent: number
}

const ActiveUserItem = ({icon, text, percent, title}: IBlockUserActiveIconProps) => {
  return (
    <div style={{padding: '0 .75rem 1rem 0', width: '20%'}}>
      <div style={{display: 'flex', alignItems: 'center'}}>
          <div style={{height: 20, marginRight: '0.3rem'}}>
            <img
              src={icon}
              alt="icon"
              width={20}
              height={20}
            />
          </div>
        <S.SpanUserPercent>
          {title}
        </S.SpanUserPercent>
      </div>
      <S.TitleCardUser>
        {text}
      </S.TitleCardUser>
      <S.LineProgress>
        <S.LineProgressPercent percent={percent}/>
      </S.LineProgress>
    </div>
  );
};

export default ActiveUserItem;