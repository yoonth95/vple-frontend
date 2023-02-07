import styled from 'styled-components';

export const Container = styled.header`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  box-shadow: 0px 0px 5px #C5C5C5;
  max-width: 500px;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  margin: 0 auto;
  padding: 3vh 0 4vh 0;
`;

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 5vh;

  .nav-item {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: black;
    align-items: center;
  }

  span {
    font-size: 1.7vh;
    padding: 1vh 0;
  }

  .nav-button {
    width: 25px;
    opacity: 30%;
  }

  .nav-button-active {
    width: 25px;
    opacity: 65%;
  }
`;