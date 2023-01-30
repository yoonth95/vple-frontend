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

export const ContentDiv = styled.div`
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


export const EditButton = styled(ButtonStyle)`
    width: 420px;
    height: 46px;
    display: inline-block;
    margin-top: 10px;
    border-radius: 5px;
    border: solid 1px #DEDEDE;
    font-size: 14px;
`;
