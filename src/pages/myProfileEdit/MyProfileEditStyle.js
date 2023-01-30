import styled from "styled-components";
import Sheet from 'react-modal-sheet';

import { ButtonStyle } from '../../styles/ButtonStyle';

export const ProfileContainer = styled.div`
    text-align: center;
    background-color: white;

    .mate-name{
        margin-top: 5px;
        font-size: 16.94px;
        font-weight: 500;
    }

    .greeting{
        border: none;
        text-align: center;

        width: 100px;
        height: 20px;
        margin: 5px auto;
        font-size: 12px;
        color #7D7D7D;

        .edit-icon{
        margin-left: 5px;
        }
    }
`;

export const WrapProfilePhoto = styled.div`
    width: 93.05px;
    height: 93.05px;
    border-radius: 100%;
    display: inline-block;
    position: relative;

    .photo{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 100%;
    };

    .edit-photo{
        width: 27px;
        height: 27px;
        position: absolute;
        top: 65px;
        left: 70px;
    }
`;

export const TagContainer = styled.div`
    display: flex;
    margin-top: 10px;
    justify-content: center;
`;
export const TagDiv = styled.div`
    width: 65px;
    height: 22px;
    background-color: white;
    background-size: 65px 22px;
    color: #758B6F;
    border: solid 1px #758B6F;
    border-radius: 23px;

    font-size: 14px;
    text-align: center;
    line-height: 25px;

    margin-top: -3px;
`;

export const WrapButton = styled.div`
    background-color: white;
    justify-content: center;
    padding: 20px 0px;
    display: flex;
`;

export const SaveButton = styled(ButtonStyle)`
    width: 156.64px;
    height: 38.77px;
    background-color: #758B6F;
    border-radius: 6.05px;

    color: white;
    font-size: 16px;

    margin-top: -5px;

`;

export const StateContainer = styled.div`
    padding: 20px 40px 20px 40px;
    background-color: white;
    text-align: center;

    .partition{
        border-top: solid 1px #737373;
    }
`;
export const ContainButton = styled(ButtonStyle)`
    padding-bottom: 20px;
    margin: 0px 53px;
    display: inline-block;

    .number{
        font-size: 16px;
        color: black;

    }
    .name{
        padding-top: 7px;
        font-size: 14px;
        color: #7D7D7D;
    }

`;

export const ContentsContainer = styled.div`
    background-color: white;

    .plan{
        padding-bottom: 300px;
        padding: 10px 30px;
        text-align: center;
    }
    .follow{
        padding-bottom: 30px;
        inline: inline-block;
        position: relative;
    }
`;

export const EidtMode = styled.div`
    display: inline;
    width: 128.72px;
    height: 161.43px;

    .icon-delete{
        width: 10px;
        height: 10px;
    }
`


export const CustomPhotoSheet = styled(Sheet)`

    width: 500px;
    height: 170px;
    margin: auto;

    margin-bottom: 2px;



    .react-modal-sheet-container {
    }
    .react-modal-sheet-content {

        padding: 0px 20px;

        .list{
            font-size: 16px;
            margin: 15px 0px;
        }

    }
`;
export const CustomTypeSheet = styled(Sheet)`

    width: 500px;
    height: 275px;
    margin: auto;
    margin-bottom: 2px;


    .react-modal-sheet-container {
    }
    .react-modal-sheet-content {

        padding: 0px 20px;

        .list{
            font-size: 16px;
            margin: 15px 0px;
        }

    }
`;
