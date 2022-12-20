import styled from "styled-components";

import {DivAllCenter} from "../styles";

export const DivTotalsIcon = styled(DivAllCenter)`
  background-image: linear-gradient(310deg, #7928ca, #ff0080);
  width: 48px;
  height: 48px;
  border-radius: 0.5rem;
  
  img {
    width: 24px;
    height: 24px;
  }
`;

export const SpanPercentTotal = styled.span`
  font-weight: 700;
  font-size: .875rem;
  margin-left: 5px;
`;

export const TitleTotals = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
  color: #67748e;
`;