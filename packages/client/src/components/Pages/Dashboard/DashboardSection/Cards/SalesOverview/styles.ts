import styled from "styled-components";

import {CardDiv, TitleActiveUser} from "../styles";

export const TitleSales = styled(TitleActiveUser)`
  margin: 0;
`;

export const SubscriptionSales = styled.div`
  display: flex;
  color: #66738d;
  font-size: 0.875rem;
  line-height: 1.625;
  font-weight: 400;
  margin: 0 0 25px 0;
`

export const DivSalesOverview = styled.div`
  height: 300px;
`;

export const CardSalesOverview = styled(CardDiv)`
  width: auto;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: 992px) {
    margin-top: 24px;
  }
`;
