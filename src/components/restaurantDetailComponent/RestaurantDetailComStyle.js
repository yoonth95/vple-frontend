import styled from "styled-components";
import IconClipW from '../../asset/IconClipW.png';
import IconClipG from '../../asset/IconClipG.png';

export const WrapView = styled.div`
    position: absolute;
    z-index: 5;

    max-width: 100vw;
`;


export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 70px;
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
  padding-right: 22px;
  
  h3{
    color: #758B6F;
  }
`;


const ButtonStyle = styled.button`
    &:hover{
        opacity:0.8;
    }
    border: none;
    background-color: transparent;
    font-size: 11px;
    color: #B5B5B
`;

export const ImageContainer = styled.div`

    height: 202px;

    .guide-image{
        width: 100%;
        height: 202px;
        object-fit: cover;
    }
`;

export const WrapInfo = styled.div`
    padding: 30px 25px 20px 25px;
    background-color: white;

    .titleWrap{
        font-size: 18px;
        color: black;
        text-align: left;
        display: inline;
    }
    .writerWrap{
        font-size: 12px;
        color: #A3A3A3;
        text-align: left;
        padding-top: 20px;
    }
    .partition{
        margin-top: 20px;
        margin-bottom: 20px;
        border-top: solid 1px #C9C9C9;
    }

`;

export const ClipDiv = styled.div`
    display: inline;
    float: right;

    &:hover{
        opacity:0.8;
    }
    border: none;
    background-color: transparent;
    font-size: 11px;
    color: #B5B5B5;
`;
export const ClipButtonW = styled(ButtonStyle)`
    background-image: url(${IconClipW});
    background-size: 16.67px 19.23px;
    width: 16.67px;
    height: 19.23px;
    display: inline;
`;
export const ClipButtonG = styled(ButtonStyle)`
    background-image: url(${IconClipG});
    background-size: 16.67px 19.23px;
    width: 16.67px;
    height: 19.23px;
    display: inline;
`;

export const TagContainer = styled.div`
    display: flex;
    margin-top: 10px;

    .tag {
        width: 65px;
        height: 22px;
        background-color: #758B6F;
        background-size: 65px 22px;
        color: white;
        font-size: 14px;
        text-align: center;
        border-radius: 23px;
        line-height: 23px;
        
        margin-right: 5px;
    }
`;

export const WrapIconText = styled.div`

    margin-top: 10px;

    .icon{
        margin-bottom: -4px; 
    }
    .text{
        font-size: 14px;
        display: inline;
        margin-left: 10px;
    }
    
`;
export const WrapRunTime = styled.div`
    margin-top: 10px;
    margin-left: 27px;
    font-size: 14px;

    .day{
        color: #758B6F;
        display: inline;
    }
    .hour{
        margin-left: 10px;
        color: #757575;
        display: inline;
    }
`;

export const WrapMenu = styled.div`
    padding: 25px 30px 10px 30px;
    background-color: #F8F8F8;
    text-align: center;
`;
export const MenuTitle = styled.div`
    display: flex;
    align-items: center;

    .titleDeco {
        width: 6px;
        height: 18px;
        background-color: #C9C9C9;
        margin-right: 10px;
    }
    .recommendTitle {
        font-weight: initial;
        font-size: 16px;
    }
    .arrow-btn {
        width: 9px;
        height: 15px;
        margin-left: 7px;
        margin-bottom: 2px;
    }
`;

export const WrapCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5%;
  margin-top: 20px;
`;
export const WrapCard = styled.div`
    display: inline-flex;
    flex-direction: column;
    width: 30%;
    margin-bottom: 20px;

    box-shadow: 0px 0px 3px #C5C5C5;
    border-radius: 10px;

    .img-photo {
        display: inline-flex;
        height: 80px;
        background-color: #F8F8F8;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
    .div-content {
        display: inline-flex;
        height: 38px;
        background-color: #FFFFFF;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    .div-content span {
        font-size: 13px;
        color: #414141;
        padding: 13px 0px 0px 7px;
        text-align: left;
        text-decoration: none;
    }
`;
export const WrapButton = styled(ButtonStyle)`
    display: inline-block;
    width: 100%;
    height: 46px;
    color: black;
    font-size: 14px;
    background-color: white;
    border-radius: 5px;
    border: solid 1px #DEDEDE;

    .iconMore{
        margin-right: 10px;
        margin-bottom: 2px;
    }
`;

export const ReviewContainer = styled.div`
    padding: 25px 30px 10px 30px;
    background-color: #F8F8F8;
    text-align: center;
    padding-bottom: 10%;

    .partition{
        width: 100%;
        display: inline-block;
        margin-top: 20px;
        border-top: solid 1px #C9C9C9;
    }

    .container {
        display: flex;
    }

    .write-btn{
        margin-left: auto;
    }

`;
export const ReviewTitle = styled.div`
    display: flex;

    .titleDeco {
        width: 6px;
        height: 18px;
        background-color: #C9C9C9;
        margin-right: 10px;
    }
    .recommendTitle {
        font-weight: initial;
        font-size: 16px;
    }
    .number{
        margin-top: 3px;
        margin-left: 8px;
        font-size: 12px;
        color: #ABABAB;
    }
`;
export const WriteReviewBtn = styled(ButtonStyle)`
    width: 80px;
    height: 30px;
    background-color: white;
    font-size: 14px;
    color: black;
    box-shadow: 0px 0px 2px #C5C5C5;
    border-radius: 6px;
`;

export const WrapWriting = styled.div`

  display: flex;
  flex-direction: column;

  width: 100%;
  height: 250px;
  margin: 10px 0;
  background-color: white;
  border-radius: 5px;

  .review-content {
    display: felx;
    justify-content: space-between;

    margin: 25px 25px;

    .camera {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 90px;
        height: 90px;
    
        box-shadow: 0px 0px 4px #C5C5C5;
        border-radius: 6px;

        img {
            width: 35px;
        }
    }
    .wrap-text {
        display: flex;
        flex-direction: column;

        .title {
            width: 170px;
            height: 25px;
            padding-left: 5px;
            border: none;
        }
        .title::placeholder {
            color: black;
            font-weight: 400;
            font-size: 14px;
        }

        .text {
            width: 175px;
            height: 60px;
    
            margin-top: 3px;
            margin-left: 1px;

            border: none;
            resize: none;
        }
        .text::placeholder {
            color: #7C7C7C;
            padding: 3px 4px;
            font-size: 11px;
        }
    }
  }

  .wrap-button {
    display: flex;
    flex-direction: row;

    justify-content: space-between;
    align-items: center;

    margin: 0px 25px;

    .review-button {

        width: 30%;
        height: 30px;
    
        border: solid 1px #758B6F;
        border-radius: 8px;
    
        font-size: 10px;
        line-height: 30px;
    }
  }

  .submit {
    height: 40px;
    background-color: #758B6F;
    border-radius: 8px;

    color: white;
    line-height: 40px;
    font-size: 13px;

    margin: 15px 25px;
  }
`;

export const WrapReviewBars = styled.div`
    padding: 10px 0px 0 0px;
`;
export const ReviewBar = styled.div`
    width: 100%;
    height: 42.31px;
    background-color: white;
    border-radius: 8px;
    display: inline-block;
    box-shadow: 0px 0px 2px #C5C5C5;
    margin-bottom: 5px;
`;
export const PercentBar = styled(ReviewBar)`
    float: left;
    background-color: #E2E2E2;
    width: ${props => `${props.count > 100 ? 100 : props.count}%`};
    
    .review{
        font-size: 14px;
        text-align: left;
        margin-top: 12px;
        margin-left: 15px;
    }
`;

export const UpButton = styled(ButtonStyle)`
    width: 85px;
    margin-top: 30px;
    font-size: 14px;
    color: #5F5F5F;

    .icon {
        width: 12.82px;
        height: 11.33px;
    }
`;


