import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';

const NewFeature = styled.div `
  margin: 10px;
`;

const NewButton = styled.button `
  margin-top: 10px;
  color: #ffffff;
  background-color: #0066cc;
`;

class NewItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    var name = this.refs.name.value;
    var toggleStatus = this.refs.toggle_status.value;
    var togglePercentage = this.refs.toggle_percentage.value;
    $.ajax({
      url: '/api/v1/feature_toggles',
      type: 'POST',
      data: {"feature_toggle": { "name": name, "toggle_status": toggleStatus, "toggle_percentage": togglePercentage } },
      success: item => {
        this.props.handleSubmit(item);
      }
    });
  }
  render() {
    return (
      <NewFeature className="new-feature-toggle">
        <div>
          <input ref="name" />
          <input ref="toggle_status" type='hidden' value='red'/>
          <input ref="toggle_percentage" type='hidden' value='0' />
          <NewButton onClick={this.handleClick}>Create Toggle</NewButton>
        </div>
      </NewFeature>
    )
  }
}

export default NewItem