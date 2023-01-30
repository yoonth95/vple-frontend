import styled from "styled-components";

export const CommunityForm = styled.div`
  padding-left: 26px;
  padding-right: 26px;
  background-color: #FFFFFF;
  //border: solid 1px red;
`;

export const CommunityWrap = styled.div`
  display: flex;
  flex-direction: column;
  .hr-bar{
    width: 100%;
    height: 1px;
    background-color: #E4E4E4;
  }
`

export const ProfileForm = styled.div`
  display: flex;
  width: 100%;
  height: 76px;
  padding-top: 10px;
  //border: solid 1px red;
  
  .profile-image-wrap {
    width: 56px;
    height: 56px;
    background-color: #D9D9D9;
    border-radius: 50px;
    flex: 1;
    margin-top: 2px;
  }
  
  .user-name-wrap{
    flex: 6;
    padding-top: 12px;
    padding-left: 10px;
    .user-name{
      
    }
    .up-load-state{
      color: #7A7A7A;
      font-size: 12px;
    }
  }
  
  .save-btn{
    flex: 1;
    text-align: center;
    padding-top: 12px;
    margin-right: 4px;
    .book-mark-icon{
      width: 15px;
      height: 20px;
    }
    .more-btn{
      margin-left: 12px;
      width: 4px;
      height: 16px;
      margin-bottom: 3px;
    }
  }
`;

export const TextWrap = styled.div`
  width: 100%;
  height: 80px;
  overflow: hidden;
`;

export const ShowHashTagWrap = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: start;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 6px;
  //border: solid 1px red;
  
  .show-hash-tag {
    width: 64px;
    height: 26px;
    text-align: center;
    line-height: 29px;
    background-color: #758B6F;
    color: white;
    border-radius: 20px;
    margin-right: 10px;
    font-size: 12px;
  }
`;

export const IconWrap = styled.div`
  display: flex;
  justify-content: space-around;
  width: 30%;
  height: 100%;
  margin-top: 16px;
  margin-bottom: 16px;
  //border: solid 1px red;

  .heart-icon-wrap{
    display: flex;
    width: 100%;
    text-align: center;
    
    .heart-icon{
      margin-top: 4px;
      width: 19px;
      height: 19px;
    }
    .count-num {
      color: #758B6F;
      padding-top: 5px;
      margin-left: 6px;
    }
  }

  .bubble-icon-wrap{
    display: flex;
    width: 100%;
    text-align: center;

    .bubble-icon{
      margin-top: 4px;
      width: 24px;
      height: 21px;
    }
    
    .count-num{
      color: #758B6F;
      padding-top: 5px;
      margin-left: 6px;
    }
    
  }
`;