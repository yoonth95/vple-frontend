import styled from "styled-components";


export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #ffffff;
`;

export const HeaderIconsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoWrap = styled.div`
  width: 62px;
  height: 36px;
  margin-top: 19px;
  margin-left: 19px;
  .logo-image{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;


export const IconsWrap = styled.div`
  width: 90px;
  display: flex;
  justify-content: space-around;
  margin-top: 19px;
  
  .profileIcon{
    width: 18px;
    height: 18px;
    
  };
  .alertIcon{
    padding-right: 6px;
    width: 17px;
    height: 19px;
  };
`;

export const HeaderTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;


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

