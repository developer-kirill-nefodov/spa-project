import styled from "styled-components";

interface IDivFooterLink {
  padding?: string
}

export const DivFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const DivFooterOneText = styled.div`
  display: flex;
  align-items: center;
  padding: 0 36px;
  color: #67748e;
  font-size: .875rem;
  line-height: 1.5;
  
  img {
    width: 14px;
    height: 14px;
    margin: 0 4px;
  }
`;

export const DivFooterLink = styled.a<IDivFooterLink>`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: .875rem;
  color: #67748e;
  
  padding: ${(({padding}) => padding ? padding : '0')};
`;