import styled from "styled-components";
import {CardDiv} from "../styles";

export const CardProjects = styled(CardDiv)`
  width: auto;
  flex-direction: column;
  overflow: hidden;
  
  margin-right: 30px; 
  @media (max-width: 992px) {
    margin-bottom: 24px;
    margin-right: 0;
  }
 
  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

export const WrapperTable = styled.div`
  width: 100%;
  overflow: auto;
  
  table {
    width: 100%;
  }
`;