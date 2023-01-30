import React from 'react';
import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  background-color: white;
`;

export const HeaderIcons = styled.div`
  display: flex;
  justify-content: space-between;

  .logoWrap {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 70px;
    margin: 0.1vh 0;

    .logoIcon {
      width: 62px;
      height: 37px;
    }
  }
`;