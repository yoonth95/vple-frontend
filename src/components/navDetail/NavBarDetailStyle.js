import styled from "styled-components";

export const DetailContainer = styled.div`
  padding-left: 32px;
  padding-right: 26px;
  background-color: #F8F8F8;
`;

export const NoticeContainer = styled.div`
  width: 100%;
  height: 146px;
  display: flex;
  justify-content: start;
  flex-direction: column;

  .title-of-plog {
    margin-top: 39px;
    font-size: 16px;
    font-weight: bold;
  }
`;

export const DetailInfoContainer = styled.div`
  margin-top: 10px;
  .left-day {
    color: #758B6F;
    font-size: 14px;
    font-weight: bold;
    margin-right: 10px;
  }

  .location-tag {
    font-size: 14px;
    color: #7C7C7C;
  }
`;

export const NeededPersons = styled.div`
  margin-top: 10px;
  .unit-icon {
    width: 11px;
    height: 14px;
    margin-right: 10px;
  }

  .count-people {
    color: #7C7C7C;
    font-size: 14px;
  }
`;

export const DetailPlogInfo = styled.div`
  height: 350px;
  background-color: #ffffff;
  padding-left: 32px;
  padding-right: 26px;
`;

export const  DetailInfoTextWrap = styled.div`
  padding-top: 20px;
  .post-text{
    margin-top: 30px;
    width: 100%;
    height: 140px;
  }
`;

export const  PostSubmitBtn = styled.div`
  width: 100%;
  margin-bottom: 58px;
  .apply-btn {
    width: 100%;
    height: 61px;
    background-color: #758B6F;
    border-radius: 10px;
    color: #ffffff;
    font-size: 18px;
    text-align: center;
    line-height: 67px;
  }
`;

