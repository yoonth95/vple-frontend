import styled from "styled-components";

export const LoginWindow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.6);
  
  display: flex;
  justify-content: center;
  align-items: center;

  .modal-background{
    position: absolute;
    top: 35vh;

    display: flex;
    flex-direction: column;
    gap: 15px;

    width: 200px;
    padding: 30px 20px 20px 20px;

    background-color: white;
    box-shadow: 0px 0px 3px #C5C5C5;
    border-radius: 8px;

    img {
      width: 35px;
      margin: 0 auto;
    }
    .text-bold {
      color: #758B6F;
      font-weight: bold;
      text-align: center;
    }
    .text {
        text-align: center;
        font-size: 12px;
    }
    .line {
        border-bottom: 1px solid lightgrey;
    }
    .button {
        text-align: center;
        color: #B5B5B5;
        
    }
}
`;


export const PlanContainer = styled.div`
  background-color: #ffffff;
  padding-left: 26px;
  padding-right: 26px;
  margin-top: 10px;
`;

export const SetLocationWrap = styled.div`
  width: 100%;
  height: 113px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  
  .trip-location{
    color: #000000;
    font-size: 16px;
    margin-top: 20px;
    margin-left: 17px;
    margin-bottom: 7px;
  };
`;


export const SelectLocationOption = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  
  .select-box{
    color: #A5A5A5;
    font-size: 13px;
    padding-left: 15px;
    margin-top: 6px;
    width: 44%;
    height: 36px;
    border-radius: 10px;
    outline: none;
    border: solid 0.5px #858585;
    appearance:none;

    .option{
      padding-left: 10px;
      color: #858585;
    }
  };
`;

export const CalendarWrap = styled.div`
  width: 100%;
  height: 344px;
  border-radius: 10px;
  margin-top: 19px;
  margin-bottom: 19px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

export const CountWrap = styled.div`
  height: 60px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

export const CountContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  .set-btn{
    font-size: 25px;
    line-height: 27px;
    text-align: center;
    width: 24px;
    height: 24px;
    border-radius: 50px;
    border: solid 0.5px black;
  };
  .count{
    padding: 0 10px;
  }
`;

export const SubmitButtonActive = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 61px;
  border-radius: 10px;
  background-color: #758B6F;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
export const SubmitButton = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 61px;
  border-radius: 10px;
  background-color: #D9D9D9;
  display: flex;
  justify-content: center;
  align-items: center;
`;