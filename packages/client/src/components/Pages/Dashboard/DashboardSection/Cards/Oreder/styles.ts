import styled from "styled-components";

export const OrderContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const LineOrder = styled.div`
  position: absolute;
  top: 0;
  left: 12px;
  height: 100%;
  border-right: 2px solid #dee2e6;
`;

export const DivOrderItem = styled.div`
  position: relative;
  margin-bottom: 1rem;
  height: 45px;
  
  img {
    position: absolute;
    width: 16px;
    height: 22px;
  }
`;

export const DivOrderItemIcon = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: #fff;

  img {
    width: 16px;
    height: 16px;
  }
`;

export const DivOrderItemContent = styled.div`
  margin-left: 45px;
`;