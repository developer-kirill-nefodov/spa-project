import styled from "styled-components";

import {CardDiv, DivAllCenter} from "../styles";

export const DivIconRocket = styled(DivAllCenter)`
  background-image: linear-gradient(310deg, #7928ca, #ff0080);
  border-radius: 0.5rem;

  width: 216px;
  height: 216px;

  img {
    width: 216px;
    height: 142px;
  }

  @media (max-width: 600px) {
    width: 100%;
    height: fit-content;

    img {
      width: 100%;
      height: auto;
    }
  }
`;

export const CardRocket = styled(CardDiv)`
  margin-right: 30px;

  @media (max-width: 992px) {
    margin-bottom: 24px;
    margin-right: 0;
  }

  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

export const RocketTextContent = styled.div`
  width: 50%;

  @media (max-width: 600px) {
    width: 100%;
    margin-bottom: 30px;
  }
`;

export const RocketTitle = styled.p`
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5;
  margin: 8px 0 4px 0;
  color: #67748e;
`;