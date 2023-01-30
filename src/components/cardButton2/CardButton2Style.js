import styled from "styled-components";
import { ButtonStyle } from '../../styles/ButtonStyle';
import IconClipW from '../../asset/IconClipW.png';
import IconClipG from '../../asset/IconClipG.png';

export const CardButtonStyle = styled(ButtonStyle)`
    box-shadow: 0px 0px 5px #C5C5C5;
    border-radius: 10px;
    margin: 10px;
`;

export const StyledImgDiv = styled.div`
    width: 133px;
    height: 117px;
    background-size: 132.76px, 141.16px;
    background-color: #F8F8F8;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    
`;

export const ClipButtonW = styled(ButtonStyle)`
    background-image: url(${IconClipW});
    background-size: 12px 13px;
    width: 12px;
    height: 13px;
    margin-top: 11px;
    margin-left: 95px;
`;
export const ClipButtonG = styled(ButtonStyle)`
    background-image: url(${IconClipG});
    background-size: 12px 13px;
    width: 12px;
    height: 13px;
    margin-top: 11px;
    margin-left: 95px;
`;

export const StyledContentDiv = styled.div`
    width: 133px;
    height: 38px;
    background-size: 132.76px, 42.02px;
    background-color: #FFFFFF;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`;

export const StyledTitleFont = styled.div`
    font-size: 12px;
    color: #414141;
    padding: 10px 0px 0px 9px;
    text-align: left;
`;

