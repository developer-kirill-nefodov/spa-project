import styled from "styled-components";

export const DashboardWrapperContent = styled.div`
  display: flex;
`;

export const WrapperContent = styled.div`
  width: calc(100vw - 250px);
  z-index: 0;
  margin-bottom: 24px;
  
  @media(max-width: 1200px) {
    width: 100vw;
  }
`;