import styled from "styled-components";


export const WrapContent = styled.div`
  margin-top: 30px;

  height: 100%;
  overflow: auto;

  .edit-plan {
    margin-left: 30px;
  }
  .make-plan {
    margin-left: 30px;
  }
  .edit-plan-small {
    margin-left: 30px;
    color: #848484;
    font-size: 0.8rem;
  }

  .temp {
    width: 100%;
    height: 20%;
  }
`;

export const EditBtn = styled.div`
  width: 333px;
  height: 45px;
  background-color: white;
  border: solid 1px #758B6F;
  border-radius: 5px;

  font-size: 14px;
  color: #758B6F;
  line-height: 45px;
  text-align: center;
  
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 30px;
`;

export const NewBtn = styled.div`
  width: 333px;
  height: 45px;
  background-color: #758B6F;
  border-radius: 5px;

  font-size: 14px;
  color: white;
  line-height: 45px;
  text-align: center;

  margin: 0 auto;
  margin-top: 10px;

`;

export const WrapCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 20px 30px;

`;

export const SavedPlanCard = styled.div`
  width: 100%;
  height: 60px;
  border-radius: 8px;
  box-shadow: 0px 0px 5px #C5C5C5;
`;


//2
export const WrapTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    .prev_button{
      width: 25px;
      height: 25px;

      display: inline-block;
    }
    .day{
      color: #758B6F;
      font-weight: 700;

      display: inline-block;
      margin: 0px 18px;
    }
    .next_button{
      width: 25px;
      height: 25px;

      display: inline-block;
    }
`;
export const WrapTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 500px;

    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;

    color: #6C6C6C;
    font-size: 14px;

    .title-input {
      padding: 7px 7px 7px 2px;
      border: none;
    }

    .title-p {
      color: black;
      font-size: 15px;
    }

    .save-btn {
      width: 68px;
      height: 27px;
      border: none;
      border-radius: 6px;
      background-color: #758B6F;
  
      color: white;
      font-size: 14px;
      text-align: center;
  
      margin-left: 10px;
      display: inline-block;
      line-height: 27px;
    }
`;

export const WrapLine = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const WrapTime = styled.div`
  .start_time{
    color: #848484;
    font-size: 14px;

    display: inline-block;
  }
`;

export const WrapSelect = styled.div`
  display: flex;
  justify-content: space-between;
  // align-items: center;
  width: 90%;
  max-width: 500px;

  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;

  .time-head {
    width: 30%;
    color: #848484;
    font-size: 13px;
  }
  .long-box {
    width: 30%;
    height: 30px;
    border: solid 1px #B5B5B5;
    border-radius: 5px;
    
    text-align: center;
    line-height: 30px;
    font-size: 13px;
  }
  
  .short-box {
    width: 7%;
    height: 30px;
    border: solid 1px #B5B5B5;
    border-radius: 5px;
    
    text-align: center;
    line-height: 30px;
    font-size: 13px;
  }
`;
export const WrapTimeButton = styled.div`
  margin-top: 30px;
  margin-bottom: 25%;
`;

export const WrapBtn = styled.div`
  display: flex;
  align-items: center;

  .icon_lock{
    width: 15.86px;
    height: 21.82px;
  }

  .save-btn {
    width: 68px;
    height: 27px;
    border: none;
    border-radius: 6px;
    background-color: #758B6F;

    color: white;
    font-size: 14px;
    text-align: center;

    margin-left: 10px;
    display: inline-block;
    line-height: 27px;
  }
  
`;
export const PlanDiv = styled.div`
    width: 90%;
    max-width: 500px;
    background-color: white;
    margin-top: 20px;
    margin-bottom: 30%;

    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;

`;
export const TimeButton = styled.span`
    color: #758B6F;
    font-size: 14px;
    border-bottom: solid 1px #758B6F;
    margin-left: 8px;
    line-height: 14px;
`;
export const DeleteAllButton = styled.div`
    width: 100%;
    height: 46px;
    display: inline-block;
    border-radius: 5px;
    border: solid 1px #DEDEDE;

    margin-top: 15px;

    font-size: 14px;
    color: #727272;
    text-align: center;
    line-height: 46px;
`;
