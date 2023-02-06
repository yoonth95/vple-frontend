import styled from 'styled-components';

export const Container = styled.header`
  display: inline-flex;
  flex-direction: row;
  background-color: white;
  max-width: 500px;
  z-index: 1;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  margin: 0 auto;
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