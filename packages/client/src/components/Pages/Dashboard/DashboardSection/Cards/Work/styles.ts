import styled from "styled-components";
import {CardDiv} from "../styles";

interface IImageBackgroundBlockProps {
  background: string
}

export const BackgroundImage = styled.div<IImageBackgroundBlockProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  padding: 1rem;
  background: ${({background}) => background};
  background-size: cover;
  top: 0;
  left: 0;
`;

export const CardWork = styled(CardDiv)`
  width: auto;
  overflow: hidden;
`;

export const CardWorkContent = styled.div`
  position: relative;
  overflow: hidden;
  
  width: 100%;
  padding: 1rem;
  border-radius: 1rem;
`;