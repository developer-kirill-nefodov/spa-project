import styled from "styled-components";
import {HeaderButton} from "../../DashboardSection/Header/styles";

interface IActiveLinkItemBlock {
  active?: boolean
  color?: string
}

interface ISvg {
  color: string
}

interface IActiveMenuDiv {
  background: string
  openMenu?: boolean
}

export const MenuDiv = styled.div<IActiveMenuDiv>`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 1rem;
  width: 250px;
  height: calc(100vh - 32px);
  margin: 16px 0 16px 16px;
  background: ${(({background}) => background)};
  z-index: ${(({openMenu}) => openMenu ? 10 : 0)};;
  overflow: auto;

  @media (max-width: 1200px) {
    background: white;
    display: ${(({openMenu}) => openMenu ? 'flex' : 'none')};
  }
`;

export const LinkMenuWrapper = styled.div<IActiveLinkItemBlock>`
  display: flex;
  align-items: center;
  padding: 10px 16px;
  margin: 0 16px;
  cursor: pointer;
  ${(({active}) => active && (`
    span {
      font-weight: 600;
      color: #344767;
    }
    
    box-shadow: 0 20px 27px 0 rgb(0 0 0 / 5%);
    border-radius: 0.5rem;
    background-color: #fff;
  `))}
`;

export const LogoMenuLink = styled(LinkMenuWrapper)`
  padding: 24px 32px;
  margin: 0;

  img {
    width: 32px;
    height: 32px;
  }
`;

export const ActiveLinkItemBlock = styled(LinkMenuWrapper)`
  justify-content: center;
  padding: 10px;
  border-radius: 0.5rem;
  margin: 0 0.5rem 0 0;

  background: ${(({active, color}) => active ?
                  color : "white; box-shadow: 0 20px 27px 0 rgb(0 0 0 / 5%);"
  )};

  @media (max-width: 1200px) {
    box-shadow: 0 20px 27px 0 rgb(0 0 0 / 5%);
  }
`;

export const DiamondImgBlock = styled(ActiveLinkItemBlock)`
  padding: 0;
  width: 32px;
  height: 32px;
  margin-bottom: 16px;

  img {
    width: 16px;
    height: 16px;
  }
`;

export const SpanLinkItem = styled.span`
  margin-left: 0.25rem;
  opacity: 1;
  font-weight: 500;
  color: #67748e;
  font-size: .875rem;
`;

export const SpanLinkItemLogo = styled(SpanLinkItem)`
  font-weight: 600;
  color: #344767;
`;

export const LineMenu = styled.hr`
  background-image: linear-gradient(90deg, transparent, rgba(0, 0, 0, .4), transparent);
  height: 1px;
  margin: 0 0 1rem 0;
  color: inherit;
  border: 0;
  opacity: .25;
`;

export const TitleLineMenu = styled.h6`
  font-weight: 700;
  font-size: .75rem;
  line-height: 1.25;
  text-transform: uppercase;
  margin: 16px 8px 10px 2rem;
  opacity: .6;
  color: #324666;
`;

export const WrapperCardMenu = styled.div`
  position: relative;
  margin: 0 1rem;
  height: 176px;
`;

export const CardMenuDiv = styled.div<IActiveMenuDiv>`
  position: absolute;
  color: #fff;
  z-index: 2;
  height: 100%;
  width: 100%;

  .background {
    position: absolute;
    width: 100%;
    height: 176px;
    border-radius: 16px;
    opacity: .65;
    background-image: ${(({background}) => background)};
  }

  img {
    position: absolute;
    border-radius: 16px;
    width: 100%;
    height: 100%;
  }
`;

export const ButtonDiamond = styled(HeaderButton)`
  background: white;
  border: 1px solid white;
  color: black;
  width: 100%;

  &:active {
    box-shadow: 0 3px 5px -1px rgb(0 0 0 / 9%), 0 2px 3px -1px rgb(0 0 0 / 7%);
    opacity: .85;
    background-color: #fff;
    color: black;
  }
`;

export const ButtonDiamondBackground = styled(HeaderButton)`
  margin: 16px 0 0 0;
  width: 220px;
  background-image: linear-gradient(310deg, #7928ca, #ff0080);
  color: white;
  padding: 12px 24px;

  &:active {
    background-image: linear-gradient(310deg, #7928ca, #ff0080);
  }
`;

export const MenuWrapper = styled.div`
  width: 250px;
  @media (max-width: 1200px) {
    width: 0;
  }
`;

export const CardMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const DivCartMenu = styled.div`
  position: relative;
  padding: 16px;
  z-index: 2;
`;

export const WrapperIcon = styled.div<ISvg>`
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 12px;
  height: 12px;
  
  svg {
    g {
      fill: ${(({color}) => color)};
    }
  }
`;
