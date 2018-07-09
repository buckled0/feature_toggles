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
        <button type="button" id="sidebarCollapse" className="btn btn-info">
            <i className="fas fa-bars"></i>
        </button>
        <h1>Feature Toggles</h1>
      </HeaderDiv>
    )
  }
}

export default Header;
