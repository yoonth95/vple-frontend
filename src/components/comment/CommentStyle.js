import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 35px;
  padding-right: 32px;
  height: 60vh;
  background-color: #ffffff;
`;

export const CommentWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 24%;
`;

export const UserWrap = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  
  .user-profile{
    width: 42px;
    height: 42px;
    border-radius: 50px;
    border: solid 1px #EFEFEF;

    .user-image{
      width: 42px;
      height:42px;
      object-fit: cover;
      border-radius: 50px;
    }
  };
  
  .user-info-state{
    margin-top: 6px;
    margin-left: 10px;
    width: 100%;
    height: 40px;
    .nickname{
      color: #000000;
      font-size: 16px;
    };
    .update-time{
      color: #7D7D7D;
      font-size: 10px;
    };
  };
`;

export const CommentTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  .comment-text-wrap{
    .comment-text{
      font-size: 16px;
    }
  }
  
  .comment-wrap{
    display: flex;
    margin-top: 10px;
    .comment-icon {
      margin-top: 6px;
      margin-right: 10px;
      width: 11px;
      height: 11px;
    }
    .recomment-input{
      padding-left: 20px;
      font-size: 12px;
      width: 80%;
      height: 26px;
      border-radius: 20px;
      outline: none;
      border: none;
      background-color: #EFEFEF;
    }
    .submit-btn {
      margin-top: 3px;
      margin-left: 10px;
      width: 18px;
      height: 19px;
    }
  }
`;

export const WritingCommentWrap = styled.div`
  display: flex;
  width: 100%;
  height: 58px;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  .comment-input{
    width: 84%;
    height: 93%;
    padding-left: 20px;
    font-size: 16px;
    color: #8F8F8F;
    outline: none;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
    
  };
  .submit{
    background-color: #758B6F;
    color: #ffffff;
    text-align: center;
    line-height: 60px;
    width: 80px;
    height: 100%;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  };
`;