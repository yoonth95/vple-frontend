import styled from "styled-components";
import { ButtonStyle } from '../../styles/ButtonStyle';
import IconClipW from '../../asset/IconClipW.png';
import IconClipG from '../../asset/IconClipG.png';

export const CardButtonStyle = styled(ButtonStyle)`
    box-shadow: 0px 0px 5px #C5C5C5;
    border-radius: 10px;
    margin: 10px;

    .link{
        text-decoration-line: none;
    }

`;

export const StyledImgDiv = styled.div`
    width: 132.76px;
    height: 141.16px;
    background-size: 132.76px, 141.16px;
    background-color: #F8F8F8;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

`;

export const StyledContentDiv = styled.div`
    width: 132.76px;
    height: 42.02px;
    background-size: 132.76px, 42.02px;
    background-color: #FFFFFF;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    
`;

export const ClipButtonW = styled(ButtonStyle)`
    background-image: url(${IconClipW});
    background-size: 12px 13px;
    width: 12px;
    height: 13px;
    margin-top: 11px;
    margin-left: 43px;
    
    position: absolute;
`;
export const ClipButtonG = styled(ButtonStyle)`
    background-image: url(${IconClipG});
    background-size: 12px 13px;
    width: 12px;
    height: 13px;
    margin-top: 11px;
    margin-left: 43px;

    position: absolute;
`;

export const StyledTitleFont = styled.div`
    font-size: 12px;
    color: #414141;
    padding: 5px 0px 0px 7px;
    text-align: left;
    text-decoration: none;
`;
export const StyledContentFont = styled.div`
    font-size: 7px;
    color: #5F5F5F;
    padding: 0px 0px 0px 7px;
    text-align: left;
    textDecoration: none;
`;

