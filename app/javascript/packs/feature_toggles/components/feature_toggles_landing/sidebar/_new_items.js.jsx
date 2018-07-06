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
      url: '/service/features/api/v1/feature_toggles',
      type: 'POST',
      data: {"feature_toggle": { "name": name, "toggle_status": toggleStatus, "toggle_percentage": togglePercentage } },
      success: item => {
        $('#new-feature-error').empty();
        $('#toggle-name').val('');
        this.props.handleSubmit(item);
      },
      error: error => {
        var errorResponse = error.responseJSON.name
        errorResponse.forEach(error => {
          $('#new-feature-error').append(`<p>Name ${error}</p>`);
        });
      }
    });
  }
  render() {
    return (
      <NewFeature className="new-feature-toggle">
        <div>
          <input id="toggle-name" ref="name" />
          <input ref="toggle_status" type='hidden' value='red'/>
          <input ref="toggle_percentage" type='hidden' value='0' />
          <NewButton onClick={this.handleClick}>Create Toggle</NewButton>
        </div>
        <div id="new-feature-error">
        </div>
      </NewFeature>
    )
  }
}

export default NewItem
