import styled from "styled-components";

type ISpanCartG = {
  margin?: string
  justifyContent?: string
}

type ITitleActiveUser = {
  textAlign?: string
} & ISpanCartG

type ISubscriptionCard = {
  color?: string
  fontSize?: string
  display?: string
  fontWeight?: number
  lineHeight?: number
} & ISpanCartG

export const CardDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  background-color: white;

  padding: 1rem;
  border: 0 solid;
  border-radius: 1rem;
  box-shadow: 0 20px 27px 0 rgba(0, 0, 0, .05);
`;

export const DivAllCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DivR = styled.div`
  position: relative;
`;

export const TotalItem = styled(CardDiv)`
  width: calc(100% - 55px);;

  @media (max-width: 1200px) {
    margin-bottom: 24px;
  }

  @media (max-width: 600px) {
    flex-wrap: wrap;
    width: auto;
  }
`;

export const CardRocketWork = styled(CardDiv)<ISpanCartG>`
  width: auto;
  flex-direction: column;
  overflow: hidden;
  margin: ${(({margin}) => margin ? margin : '0')};
  justify-content: ${(({justifyContent}) => justifyContent ? justifyContent : 'space-between')};

  @media (max-width: 992px) {
    margin-right: 0;
  }
`;

export const ReadMoreText = styled.p`~
  display: flex;
  align-items: center;
  cursor: pointer;

  margin: 0;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.5;
  color: #67748e;
`

export const ImageRotate = styled.img`
  transform: rotate(-90deg);
  transition: all .2s cubic-bezier(.34, 1.61, .7, 1.3);
  width: 19px;
  height: 19px;

  &:hover {
    transform: rotate(-90deg) translateY(5px);
  }
`;

export const TitleCard = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: .875rem;
  line-height: 1.5;
  color: #344767;
`;

export const TextCard = styled.h5<{color?: string}>`
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.375;
  margin: 0;
  color: ${(({color}) => color ? color : '')};
`;

export const SpanPercent = styled.span<ISpanCartG>`
  font-weight: 600;
  height: fit-content;
  font-size: .75rem;
  color: #67748e;
  margin: ${(({margin}) => margin ? margin : '0 5px 0 0')};
`;

export const SubscriptionCard = styled.div<ISubscriptionCard>`
  color: ${(({color}) => color ? color : '#66738d')};
  margin: ${(({margin}) => margin ? margin : '3rem 0 0 0')};
  font-size: ${(({fontSize}) => fontSize ? fontSize : '1rem')};
  display: ${(({display}) => display ? display : 'block')};
  font-weight: ${(({fontWeight}) => fontWeight ? fontWeight : 400)};
  line-height: ${(({lineHeight}) => lineHeight ? lineHeight : 1.625)};
`;


export const TitleActiveUser = styled.h6<ITitleActiveUser>`
  font-size: 1rem;
  line-height: 1.625;
  font-weight: 600;
  margin: ${(({margin}) => margin ? margin : '1.5rem 0 0 0')};
  text-align: ${(({textAlign}) => textAlign ? textAlign : '')};
`;

export const ImgInTitleDiv = styled.div`
  display: flex;
  align-items: center;
  height: 20px;
  margin-right: 3px;

  img {
    width: 14px;
    height: 14px;
  }
`;

export const ImgArrow = styled.img`
  transform: rotate(-90deg);
`;

export const SpanCartG = styled.span<ISpanCartG>`
  color: #67748e;
  font-weight: 600;
  margin: ${(({margin}) => margin ? margin : '0')};
`;