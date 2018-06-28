import React from 'react';
import $ from 'jquery';

class FeatureToggleDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false,
      status: '',
      item: { name: '', toggle_status: '', toggle_percentage: '' }
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  statusChange(changeEvent) {
    const val = changeEvent.target.value;
    this.setState({
      status: val
    })
  }

  handleDelete() {
    this.props.onDelete(this.state.item.id);
  }

  handleEdit() {
    if (this.state.editable) {
      var id = this.state.item.id
      var name = this.refs.name.value;
      var status = this.state.status;
      var percentage = this.refs.toggle_percentage.value;
      var item = {id: id, name: name, toggle_status: status, toggle_percentage: percentage}
      this.props.onUpdate(item);
    }
    this.setState({ editable: !this.state.editable })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.feature !== prevState.item) {
      $('#feature-div').show();
      this.setState({ item: this.props.feature })
    }
  }

  toggleStatus() {
    return (
      <div>
        <fieldset>
          <legend>Choose feature status</legend>
          <input type='radio' id='red' onChange={this.statusChange.bind(this)} name='feature-status' value='red'/>
          <label htmlFor='red'>Red</label>

          <input type='radio' id='amber' onChange={this.statusChange.bind(this)} name='feature-status' value='amber'/>
          <label htmlFor='amber'>Amber</label>

          <input type='radio' id='green' onChange={this.statusChange.bind(this)} name='feature-status' value='green'/>
          <label htmlFor='green'>Green</label>
        </fieldset>
      </div>
    )
  }

  render() {
    var name = this.state.editable ? <input type='text' ref='name' defaultValue={this.state.item.name} /> : <h3>{this.state.item.name}</h3>;
    var toggle_status = this.state.editable ? this.toggleStatus() : <p>{this.state.item.toggle_status}</p>;
    var toggle_percentage = this.state.editable ? <input type='text' ref='toggle_percentage' defaultValue={this.state.item.toggle_percentage} /> : <p>{this.state.item.toggle_percentage}</p>

    return(
      <div id="feature-div" style={{ display: 'none' }}>
        {name}
        {toggle_status}
        {toggle_percentage}
        <button onClick={this.handleEdit}>
          {" "}
          {this.state.editable ? "Submit" : "Edit" }{" "}
        </button>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    )
  }
}

export default FeatureToggleDetails
