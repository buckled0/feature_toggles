import React from 'react';
import styled from 'styled-components';

const HeaderDiv = styled.div`
  color: #ffffff;
  width: 100%;
  padding: 10px;
  background-color: #999;
`;

class Header extends React.Component {
  render(){
    return (
      <HeaderDiv>
        <h1>Feature Toggles</h1>
      </HeaderDiv>
    )
  }
}

export default Header;
