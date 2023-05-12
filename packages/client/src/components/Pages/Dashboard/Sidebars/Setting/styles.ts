import styled from "styled-components";
import {ButtonDiamondBackground} from "../Menu/styles";

interface IDivSettingWrapper {
  open: boolean
}

interface IDivSettingW {
  margin?: string
  width?: string
}

interface IColorItem {
  background: string
  active: boolean
}

interface ISettingButton {
  active?: boolean
}

export const IconFixSetting = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  cursor: pointer;

  border-radius: 50%;
  z-index: 99;
  width: 52px;
  height: 52px;
  right: 30px;
  bottom: 30px;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 16%);

  img {
    width: 22px;
    height: 22px;
  }
`;

export const DivSetting = styled.div<IDivSettingWrapper>`
  position: fixed;
  overflow: auto;
  width: 100%;
  height: 100%;
  z-index: ${(({open}) => open ? 100 : -1)};;
`;

export const DivSettingW = styled.div<IDivSettingW>`
  width: ${(({width}) => width ? width : 'auto')};
  margin: ${(({margin}) => margin ? margin : "0")};
`;

export const DivSettingWrapper = styled.div<IDivSettingWrapper>`
  position: fixed;
  background: white;
  height: 100%;
  z-index: 1020;
  padding: 1rem 34px;

  width: ${(({open}) => open ? '292px;' :
                  '0; background: transparent; padding: 0; height: 0; z-index: 0;'
  )};

  top: 0;
  right: 0;
  transition: width .1s linear;
  box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, .15), 0 8px 9px -5px hsla(0, 0%, 8%, .06);
`;

export const DivClose = styled.div<ISettingButton>`
  position: absolute;
  cursor: pointer;
  top: ${({active}) => active ? '20px' : '40px'};
  right: ${({active}) => active ? '20px' : '28px'};

  @media (min-width: 1200px) {
    display: ${({active}) => active && 'none'};
  }

  img {
    width: 20px;
    height: 20px;
  }
`;

export const TitleSettingDiv = styled.div`
  h5 {
    font-weight: 600;
    margin: 1rem 0 0 0;
    font-size: 1.25rem;
    line-height: 1.375;
  }

  p {
    margin-top: 0;
    margin-bottom: 1.25rem;
  }
`;

export const ColorItem = styled.div<IColorItem>`
  border: 1px solid ${(({active}) => active ? "#344767" : "#fff")};
  border-radius: 50%;
  cursor: pointer;
  display: inline-block;
  height: 21px;
  width: 21px;
  margin-right: 10px;
  position: relative;
  transition: all .2s ease-in-out;
  background: ${(({background}) => background)};
`;

export const TextSetting = styled.p`
  margin-top: 0;
  font-size: .875rem;
  line-height: 1.5;
  font-weight: 400;
`;

export const SettingButton = styled.button<ISettingButton>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-transform: uppercase;

  color: #cb0c9f;
  background: ${(({active}) => active ?
                  'linear-gradient(310deg,#7928ca,#ff0080); color: white' :
                  'transparent;'
  )};

  padding: 12px 16px;
  width: 144px;
  height: 42px;
  font-size: .75rem;
  font-weight: 700;
  border: 1px solid #cb0c9f;
  border-radius: .5rem;
  transition: all .15s ease-in;
`;

export const SettingButtonFree = styled(ButtonDiamondBackground)<ISettingButton>`
  width: 100%;
  background: ${(({active}) => active ? 'linear-gradient(310deg,#141727,#3a416f)' : 'transparent')};
  color: ${(({active}) => active ? 'white' : '#344767')};
  border-color: #344767;
  padding: 20px 24px;

  &:active {
    background: ${(({active}) => active ? 'linear-gradient(310deg,#141727,#3a416f)' : '#fff')};
    color: ${(({active}) => active ? 'white' : '#344767')};
  }
`;

export const ButtonSharing = styled(SettingButtonFree)`
  width: fit-content;
  margin-top: 0;
  margin-right: 10px;

  img {
    width: 15px;
    height: 15px;
    margin-right: 4px;
  }
`;

export const DivStar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
`;

export const ButtonStar = styled.button`
  display: flex;
  align-items: center;

  background-color: #ebf0f4;
  border: 1px solid rgba(27, 31, 36, .15);
  padding: 4px 9px;

  img {
    width: 16px;
    height: 16px;
    margin-right: 3px;
  }

  span {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif;

    color: #24292f;
    height: 16px;
    font-size: 12px;
    line-height: 16px;
    font-weight: 600;
  }
`;

