import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  background-color: white;
  z-index: 1;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 3vh 0;
`;

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 30px;
  cursor: pointer;

  .navItem {
    text-align: center;
    width: 100%;
    font-weight: bold;
    font-size: 17px;
    color: #000000;
  }
`;