import React from 'react';

class NewItem extends React.Component {
  handleClick() {
    var name = this.refs.name.value;
    var toggleStatus = this.refs.toggle_status.value;
    var togglePercentage = this.refs.toggle_percentage.value;
    $.ajax({
      url: '/api/v1/toggle_status/create',
      type: 'POST',
      data: {"feature_toggle": { "name": name, "toggle_status": toggleStatus, "toggle_percentage": togglePercentage } },
      success: response => {
        console.log('it worked!', response);
      }
    });
  }
  render() {
    return (
      <div className="new-feature-toggle">
        <h2>Add new Feature Toggle</h2>
        <div>
          <input ref="name" />
          <input ref={input => this.toggle_status = 'red'} type='hidden' />
          <input ref={input => this.toggle_percentage = '0'} type='hidden' />
          <button onClick={this.handleClick}>Submit</button>
        </div>
      </div>
    )
  }
}

export default NewItem
