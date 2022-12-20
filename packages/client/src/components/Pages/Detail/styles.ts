import styled from "styled-components";

export const TitleDetail = styled.h2`
  font-weight: 500;
  letter-spacing: -0.3px;
  margin-top: 32px;
  text-align: center;
`;

export const TitleMeal = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  width: 100%;
`;

export const TitleItem = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
`;

export const WrapPopularMeat = styled.div`
  display: flex;
`;

export const WrapImageMenu = styled.div`
  position: relative;
  overflow: hidden;
  width: 72px;
  height: 72px;

  img {
    width: 100%;
    height: 100%;
  }
`

export const WrapStarts = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StartsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 120px;
`;

export const LineMeat = styled.div`
  height: 1px;
  width: 85%;
  background: #E1E3E6;
  margin: 32px 0;
`;

export const ContentMealDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;
`;

export const InputMeat = styled.input`
  width: 390px;
  padding: 12px;
  height: 56px;

  border-radius: 8px;
  border: 1.5px solid #BEC1C4;
  box-sizing: border-box;
`;

export const ItemMeatDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 18px;
`;

export const ReviewImagDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;

  width: 189px;
  height: 246px;
  border: 1px solid #E1E3E6;
  border-radius: 8px;
  padding: 16px;
`;

export const ReviewIconDic = styled.div`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin-bottom: 12px;

  img {
    width: 100%;
    height: 100%;
  }
`;


export const TextareaMeat = styled.textarea`
  width: 390px;
  height: 280px;
  padding: 12px;
  box-sizing: border-box;
  border: 1.5px solid #BEC1C4;
  border-radius: 8px;
  resize: none;
`;

export const ReviewStarsDiv = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 100%;
`;

export const ReviewGrade = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  margin-left: 5px;
  color: #744500;
`;

export const SubInpDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 150px 0 50px 0;
  width: 85%;
`;

export const InputNicknameDiv = styled.div`
  position: relative;
  width: 100%;
`;

export const NicknameHeader = styled.div`
  position: absolute;
  top: -7px;
  left: 16px;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
`;

export const NicknameInput = styled(InputMeat)`
  width: 100%;
`;

export const InputImageDiv = styled.div`
  position: absolute;
  cursor: pointer;
  width: 17px;
  height: 17px;
  right: 17px;
  top: 18px;
`;

export const CheckBoxDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 30px 0;
`;

export const CheckBoxNick = styled.input`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1.5px solid #BEC1C4;
  margin-right: 16px;
`;

export const CheckBoxText = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #87898C;
`;

export const NicknameBtn = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #0A6629;
  border-radius: 8px;
  padding: 16px;
  width: 100%;
  color: white;
`;