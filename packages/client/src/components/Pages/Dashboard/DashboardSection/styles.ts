import styled from "styled-components";

export const DashboardWrapper = styled.div`
  margin-right: 1.5rem;
  margin-left: 1.5rem;
`;

export const GridCardsWrapper = styled.div`
  display: grid;
  margin-top: 30px;

  @media (min-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const DivTotalsCards = styled.div`
  display: grid;

  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-items: center;
  }
`;

export const DivRocketCards = styled(GridCardsWrapper)`
  @media (max-width: 1200px) {
    margin-top: 0;
  }

  @media (min-width: 992px) {
    grid-template-columns: 58.3% 41.7%;
    min-width: 208px;
  }
`;

export const DivUserCards = styled(GridCardsWrapper)`
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1.4fr;
    min-width: 208px;
  }
`;

export const DivProjectCards = styled(GridCardsWrapper)`
  @media (min-width: 992px) {
    grid-template-columns: 2fr 1fr;
    min-width: 208px;
  }
`;