import styled from "styled-components";

interface IDivCompletionGradient {
  percent: number
}

export const TableComponent = styled.table`
  border-collapse: inherit;
  margin-bottom: 0; 
  
  thead {
    th {
      padding: 0.75rem 1.5rem;
      border-bottom: 1px solid #e9ecef;
      font-weight: 700;
      font-size: .65rem;
      color: #8392ab;
      opacity: .7;
    }
  }
  
  tbody {
    td {
      padding: 0.75rem 1.5rem;
      border-bottom: 1px solid #e9ecef;
    }
  }
`;

export const CompaniesItemDiv = styled.div`
  display: flex;
  align-items: center;
  
  img {
    width: 36px;
    height: 36px;
    margin-right: 16px;
  }
`;

export const DivCompletion = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  background: #e9ecef;
  height: 3px;
  width: 100%;
`;

export const DivCompletionGradient = styled.div<IDivCompletionGradient>`
  background-image: ${(({percent}) => percent === 100 ? 
          'linear-gradient(310deg,#17ad37,#98ec2d)' : 'linear-gradient(310deg,#2152ff,#21d4fd)')};
  height: 6px;
  border-radius: 0.375rem;
  width: ${(({percent}) => `${percent}%`)};
`;

export const AvatarGroup = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const AvatarIconDiv = styled.div`
  position: absolute;
  display: flex;
  z-index: 2;
  
  img {
    border: 2px solid #fff;
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
`;