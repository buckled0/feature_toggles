import React from 'react';
import $ from 'jquery';

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
      <div className="new-feature-toggle">
        <h2>Add new Feature Toggle</h2>
        <div>
          <input ref="name" />
          <input ref="toggle_status" type='hidden' value='red'/>
          <input ref="toggle_percentage" type='hidden' value='0' />
          <button onClick={this.handleClick}>Submit</button>
        </div>
      </div>
    )
  }
}

export default NewItem
