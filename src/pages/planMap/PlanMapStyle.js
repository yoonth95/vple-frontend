import styled from "styled-components";

// const ButtonStyle = styled.button`
//     &:hover{
//         opacity:0.8;
//     }
//     border: none;
//     background-color: transparent;
//     font-size: 11px;
//     color: #B5B5B
// `;


export const ContainerMap = styled.div`
  width: 100%;
  height: 91vh;
  background-color: #ffffff;

  position: relative;
  overflow: hidden;
  
  .map-container{
    position: relative;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  margin: 0 5%;
  justify-content: space-between;

  position: absolute;
  top: 20px;
  z-index: 2;
  width: 90%;
  
  .search-btn {
    width: 20%;
    height: 30px;

    position: relative;
    // left: 200px;
    // top: 20px;

    border: none;
    border-radius: 20px;
    background-color: #758B6F;
    color: #ffffff;
  }
  
  .search-location{
    padding-left: 10px;
    width: 75%;
    @media screen and (max-width: 500px) {
      width: 75%;
    }
    // margin-left: 20px;
    height: 32px;

    border-radius: 20px;
    outline: none;
    border: none;
    box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  };
`;

export const WrapSavedButton = styled.div`
  position: absolute;
  top: 65px;
  right: 20px;
  z-index: 3;

  text-align: center;

  .background-circle {
    width: 40px;
    height: 40px;
    background-color: white;
    border-radius: 50%;
    box-shadow: 0px 0px 3px #C5C5C5;
  }
  .clip-img {
    width: 15px;
    margin-top: 12px;
  }
`;

export const WrapMoreButton = styled.div`
  display: flex;
  justify-content: center;
  
  width: 52%;
  height: 47px;
  background-color: #758B6F;
  border-radius: 50px;

  position: absolute;
  z-index: 1;
  bottom: 8%;
  left: 24%;

  .button {
    font-size: 16px;
    color: white;
    letter-spacing: 0.1em;
    line-height: 47px;
  }
`;

export const MapModal = styled.div`
display: flex;
align-items: center;

width: 115px;
height: 35px;
background-color: white;
border-radius: 10px;

padding: 10px 10px;
box-shadow: 0px 0px 3px #C5C5C5;

text-align: center;


.map-modal-detail {
  width: 50%;
  white-space: normal;

  padding-top: 4px;
  padding-right: 3px;
}

.map-modal-add {

  border-left: solid 1px black;
  height: 100%;
  width: 50%;
  line-height: 35px;

}
`;





