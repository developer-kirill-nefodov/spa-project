import React from 'react';
import {CompaniesItemDiv} from "./styles";
import {TitleCard} from "../../styles";

interface ICompaniesItem {
  src: any
  text: string
}

const CompaniesItem = ({src, text}: ICompaniesItem) => {
  return (
    <td>
      <CompaniesItemDiv>
        <img src={src} alt="img"/>
        <TitleCard>
          {text}
        </TitleCard>
      </CompaniesItemDiv>
    </td>
  );
};

export default CompaniesItem;