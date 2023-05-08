import styled from "styled-components";
import IconClipW from '../../asset/IconClipW.png';
import IconClipG from '../../asset/IconClipG.png';

const ButtonStyle = styled.button`
    &:hover{
        opacity:0.8;
    }
    border: none;
    background-color: transparent;
    font-size: 11px;
    color: #B5B5B5;
`;

export const ImageContainer = styled.div`
    .guide-image{
        width: 100%;
        height: 202px;
        object-fit: cover;
    }
`;

export const ContentContainer = styled.div`
    padding: 30px 40px;
    background-color: white;

    .titleWrap{
        font-size: 18px;
        color: black;
        text-align: left;
        display: inline;
    }

    .writerWrap{
        font-size: 15px;
        color: #ABABAB;
        text-align: left;
        padding-top: 5px;
    }

`;

export const WrapClip = styled.div`
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
export const EditButton = styled(ButtonStyle)`
    width: 100%;
    height: 46px;
    display: inline-block;
    margin-top: 10px;
    border-radius: 5px;
    border: solid 1px #DEDEDE;
    font-size: 14px;
`;

export const WrapTime = styled.div`
    margin-top: 25px;
    background-color: white;

    .start_time{
        color: #848484;
        font-size: 15px;
    }
    .time-btn {
        margin-left: 8px;
        line-height: 14px;

        color: #758B6F;
        font-size: 15px;
        border-bottom: solid 1px #758B6F;
    }
`;

export const WrapTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;

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
    .saved-plan {
      color: #758B6F;
      font-weight: 700;

      display: inline-block;
      margin: 0px 18px;
      margin-bottom: 15px;
    }
`;

export const CardSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 17px;
    margin: 15px 0 30% 0;
    
`;

export const WrapCard = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 92.31px;
    background-size: 420.51px, 92.31px;
    box-shadow: 0px 0px 5px #C5C5C5;
    border-radius: 10px;

    .plan-img{
        width: 62.82px;
        height: 62.82px;
        border-radius: 8px;
        object-fit: cover;

        display: inline-block;
        margin-left: 16.67px;
    }

    .spot-name{
        display: block;
        margin-left: 15px;
        font-size: 14px;
    }
    
    .time{
        color: #848484;
        font-size: 14px;
        display: inline-block;
        margin-left: 15px;
        margin-top: 20px;
    }
    .time-btn {
        margin-left: 8px;
        line-height: 14px;

        color: #758B6F;
        font-size: 15px;
        border-bottom: solid 1px #758B6F;
    }

    .delete-btn{
        width: 13px;
        height: 13px;
        display: inline-block;
        margin-left: auto;
        margin-bottom: auto;
        margin-right: 16.67px;
        margin-top: 20px;
    }
`;