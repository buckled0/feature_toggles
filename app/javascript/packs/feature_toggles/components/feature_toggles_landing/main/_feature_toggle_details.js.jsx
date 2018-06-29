import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';

const StatusButtons = styled.input `
  vertical-align: middle;
  padding: 10px;
  margin: 10px;
`;

const FeatureDiv = styled.div `
  margin: 10px;
  display: none;
`;

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
      this.setState({ item: this.props.feature })
    }
  }

  toggleStatus() {
    return (
      <div>
        <fieldset>
          <legend>Choose feature status</legend>
          <StatusButtons type='radio' id='red' onChange={this.statusChange.bind(this)} name='feature-status' value='red'/>
          <label htmlFor='red'>Red</label>

          <StatusButtons type='radio' id='amber' onChange={this.statusChange.bind(this)} name='feature-status' value='amber'/>
          <label htmlFor='amber'>Amber</label>

          <StatusButtons type='radio' id='green' onChange={this.statusChange.bind(this)} name='feature-status' value='green'/>
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
      <FeatureDiv id="feature-div">
        {name}
        {toggle_status}
        {toggle_percentage}
        <button onClick={this.handleEdit}>
          {" "}
          {this.state.editable ? "Submit" : "Edit" }{" "}
        </button>
        <button onClick={this.handleDelete}>Delete</button>
      </FeatureDiv>
    )
  }
}

export default FeatureToggleDetails
