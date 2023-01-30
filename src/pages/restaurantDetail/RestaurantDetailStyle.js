import styled from "styled-components";
import IconClipW from '../../asset/IconClipW.png';
import IconClipG from '../../asset/IconClipG.png';
import { ButtonStyle } from '../../styles/ButtonStyle';


export const ImageWrap = styled.div`
    .guide-image{
        width: 500px;
        height: 202px;
        object-fit: cover;
    }
`;

export const InfoDiv = styled.div`
    padding: 30px 30px 20px 30px;
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
`;
export const TagDiv = styled.div`
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
`;

export const WrapInformation = styled.div`

    margin-top: 10px;

    .icon{
        margin-bottom: -4px; 
    }
    .info{
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

export const MenuDiv = styled.div`
    background-color: #F8F8F8;
    text-align: center;
`;
export const MenuTitle = styled.div`
    padding: 25px 30px 10px 30px;
    display: flex;

    .recommendTitle {
        font-weight: initial;
        font-size: 16px;
    }

    .titleDeco {
        width: 3.85px;
        height: 16.67px;
        background-color: #C9C9C9;
        margin-right: 10px;
    }
`;
export const MoreButton = styled(ButtonStyle)`
    width: 438.28px;
    height: 46px;
    color: black;
    font-size: 14px;
    background-color: white;
    display: inline-block;
    margin-top: 10px;
    border-radius: 5px;
    border: solid 1px #DEDEDE;

    .iconMore{
        margin-right: 10px;
        margin-bottom: 2px;
    }
`;

export const ReviewDiv = styled.div`
    padding-top: 20px;
    background-color: #F8F8F8;
    text-align: center;
    padding-bottom: 30px;


    .partition{
        width: 440px;
        display: inline-block;
        margin-top: 20px;
        border-top: solid 1px #C9C9C9;
    }

    .container {
        display: flex;
    }

    .align-right{
        margin-left: auto;
    }

`;
export const ReviewTitle = styled.div`
    padding: 25px 0px 20px 30px;
    display: flex;

    .recommendTitle {
        font-weight: initial;
        font-size: 16px;
    }

    .titleDeco {
        width: 3.85px;
        height: 16.67px;
        background-color: #C9C9C9;
        margin-right: 10px;
    }

    .number{
        margin-top: 3px;
        margin-left: 5px;
        font-size: 12px;
        color: #ABABAB;
    }
`
export const WriteReviewBtn = styled(ButtonStyle)`
    width: 80px;
    height: 25px;
    background-color: white;
    font-size: 14px;
    color: black;
    box-shadow: 0px 0px 2px #C5C5C5;
    border-radius: 6px;

    margin-right: 30px;
    margin-top: 22px;
`;

export const ReviewBar = styled.div`
    background-color: white;
    width: 438.28px;
    height: 42.31px;
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


