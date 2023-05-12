import styled from "styled-components";

interface ILineProgressPercent {
  percent: number
}

export const DivActiveUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #262b4a;
  border-radius: 0.75rem;
  height: 200px;
  padding: 20px;
`;

export const DivUserContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 10px;
`;

export const SpanUserPercent = styled.span`
  font-weight: 400;
  height: fit-content;
  font-size: .75rem;
  margin-left: 5px;
`;

export const TitleCardUser = styled.h4`
  font-size: 1.5rem;
  line-height: 1.375;
  font-weight: bold;
  color: #344767;
  margin: 0.5rem 0;
`;

export const LineProgress = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 3px;
  background: #e9ecef;
  border-radius: 30px;
`

export const LineProgressPercent = styled.div<ILineProgressPercent>`
  background: #344767;
  width: ${(({percent}) => `${percent}%`)};
  height: 6px;
  border-radius: 30px;
`;

export const SubscriptionUser = styled.div`
  color: #66738d;
  font-size: .875rem;
  line-height: 1.625;
  font-weight: 400;
  margin: 0 0 25px 0;
`;
