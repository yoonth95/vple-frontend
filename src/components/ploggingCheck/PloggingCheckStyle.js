import styled from "styled-components";

export const CheckImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-left: 32px;
  padding-right: 32px;
  
  .check-image-wrap{
    //margin-top: 14px;
    margin-bottom: 14px;
    width: 131px;
    height: 131px;
    border-radius: 10px;
    background-color: grey;

    .check-item{
      width: 100%;
      height: 100%;
      border-radius: 10px;
      object-fit: cover;
    }
  }


`;