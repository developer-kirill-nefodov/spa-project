import styled from "styled-components";

interface IHeaderPage {
  zero: boolean
}

export const HeaderPage = styled.nav<IHeaderPage>`
  position: ${({zero}) => zero ? 'fixed; top: 1%!important' : ''};
  display: flex;
  left: 1.5rem;
  right: 1.5rem;
  height: fit-content;
  border-radius: ${({zero}) => zero ? '1rem' : '0'};
  transition: box-shadow .25s ease-in,background-color .25s ease-in;
  backdrop-filter: saturate(200%) blur(30px);
  background-color: ${({zero}) => zero ? 'hsla(0,0%,100%,.8)' : 'transparent'};
  z-index: 1000;
  margin: 8px 0;
  
  @media(min-width: 1200px) {
    left: auto;
    ${({zero}) => zero ? 'width: calc(100vw - 300px);' : ''}
  }
`;

export const OlHeader = styled.ol`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  background: transparent;
  height: 21px;
  padding: 0;
  margin: 0;
`;

export const Before = styled.div`
  float: left;
  padding: 0 8px;
  color: #8284ad;
`;

export const LiLink = styled.li`
  color: #344767;
  font-size: .875rem;
  a {
    opacity: 0.5;
  }
`;

export const HeaderWrapperContent = styled.div<IHeaderPage>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 1rem ${({zero}) => zero ? '1.5rem' : '2.5rem'};
  width: 100%;
`;

export const HeaderH6 = styled.h6`
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
`;

export const SingInText = styled.span`
  font-size: .875rem;
  font-weight: 600;
  margin: 0;
  color: #67748e;
  
  @media(max-width: 575px) {
    display: none;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const SearchWrapper = styled.div`
  position: relative;
  @media(min-width: 768px) {
    padding-right: 1rem;
  }
`;

export const SearchIconWrapper = styled.div`
  position: absolute;
  display: flex;
  top: 50%;
  bottom: 50%;
  left: 10px;
  align-items: center;
  justify-content: center;
  
  img {
    width: 14px;
    height: 14px;
  }
`;

export const SearchInput = styled.input`
  padding: .5rem .75rem .5rem 34px;
  border: 1px solid #d2d6da;
  border-radius: 7px;
  background-color: #fff;
  color: #495057;
  font-size: .875rem;
  font-weight: 400;
  line-height: 1.4rem;
  
  &:focus {
    color: #495057;
    background-color: #fff;
    border-color: #e293d3;
    outline: 0;
    box-shadow: 0 0 0 2px #e9aede;
  }
  
  @media(max-width: 670px) {
    width: 50%;
  }
`;

export const HeaderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-transform: uppercase;
  margin-right: 1rem;
  color: #cb0c9f;
  font-weight: 700;
  border: 1px solid #cb0c9f;
  transition: all .15s ease-in;
  border-radius: .5rem;
  padding: 8px 32px;
  height: 35px;
  background: transparent;
  font-size: .75rem;
  
  &:hover {
    transform: scale(1.03);
  }
  &:active {
    box-shadow: 0 3px 5px -1px rgb(0 0 0 / 9%), 0 2px 3px -1px rgb(0 0 0 / 7%);
    opacity: .85;
    background: #cb0c9f;
    color: white;
  }
`;

export const ImgUser = styled.img`
  width: 19px;
  height: 19px;
  margin-right: 0.25rem
`;

export const OpenMenuIcon = styled.div`
  display: none;
  @media(max-width: 1200px) {
    display: block;
    margin: 0 -8px 0 10px;
  }
  
  img {
    width: 18px;
    height: 12px;
  }
`;

export const HeaderWrapper = styled.div<IHeaderPage>`
  position: relative;
  margin-bottom: 32px;
`;
