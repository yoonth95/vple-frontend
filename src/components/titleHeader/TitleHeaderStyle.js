import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 9%;
  background-color: #ffffff;
`;

export const HeaderTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 5px;
`;

export const IconContainer = styled.div`
  flex: 0;
  width: 100%;
  display: flex;
  margin-left: 20px;
  .back-arrow{
    margin-top: 2px;
    width: 9px;
    height: 15px;
  }
`;

export const TitleContainer = styled.div`
  flex: 10;
  text-align: center;
  width: 100%;
  padding-right: 30px;
  
  h3{
    color: #758B6F;
  }
`;

