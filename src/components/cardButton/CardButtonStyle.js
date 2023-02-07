import styled from "styled-components";
import DefaultButton from '../../components/DefaultButton';
import IconClipW from '../../asset/IconClipW.png';
import IconClipG from '../../asset/IconClipG.png';

export const CardButtonStyle = styled(DefaultButton)`
    box-shadow: 0px 0px 5px #C5C5C5;
    border-radius: 10px;
    margin: 10px;
    position: relative;

    .link{
        text-decoration-line: none;
    }

`;

export const StyledImgDiv = styled.div`
    width : 40vw;
    height: 17vh;
    //background-size: 35vw;, 141.16px;
    background-color: #F8F8F8;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

`;

export const StyledContentDiv = styled.div`
    width: 40vw;
    height: 6vh;
    //background-size: 132.76px, 42.02px;
    background-color: #FFFFFF;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`;

export const ClipButtonW = styled(DefaultButton)`
    background-image: url(${IconClipW});
    background-size: 17px 20px;
    width: 17px;
    height: 20px;
    background-repeat: no-repeat;
    
    position: absolute;
    top: 13px;
    right: 13px;
`;
export const ClipButtonG = styled(DefaultButton)`
    background-image: url(${IconClipG});
    background-size: 17px 20px;
    width: 17px;
    height: 20px;
    background-repeat: no-repeat;

    position: absolute;
    top: 13px;
    right: 13px;
`;

export const StyledTitleFont = styled.div`
    font-size: 16px;
    color: #414141;
    padding: 13px 0px 0px 10px;
    text-align: left;
    text-decoration: none;
`;

