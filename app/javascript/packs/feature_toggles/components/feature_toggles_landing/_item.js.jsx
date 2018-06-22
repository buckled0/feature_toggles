import React from 'react';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false,
      status: this.props.item.toggle_status
    };
    this.handleEdit = this.handleEdit.bind(this);
  }

  statusChange(changeEvent) {
    const val = changeEvent.target.value;
    this.setState({
      status: val
    })
  }

  handleDelete(id) {
    this.props.handleDelete(id);
  }

  handleEdit() {
    if (this.state.editable) {
      var id = this.props.item._id.$oid
      var name = this.refs.name.value;
      var status = this.state.status;
      var percentage = this.refs.toggle_percentage.value;
      var item = {_id: { $oid: id }, name: name, toggle_status: status, toggle_percentage: percentage}
      this.props.handleUpdate(item);
    }
    this.setState({editable: !this.state.editable})
  }

  toggleStatus() {
    return (
      <div>
        <fieldset>
          <legend>Choose feature status</legend>
          <div>
            <input type='radio' id='red' onChange={this.statusChange.bind(this)} name='red' value='red'/>
            <label htmlFor='red'>Red</label>
          </div>
          <div>
            <input type='radio' id='amber' onChange={this.statusChange.bind(this)} name='amber' value='amber'/>
            <label htmlFor='amber'>Amber</label>
          </div>
          <div>
            <input type='radio' id='green' onChange={this.statusChange.bind(this)} name='green' value='green'/>
            <label htmlFor='green'>Green</label>
          </div>
        </fieldset>
      </div>
    )
  }

  render() {
    var name = this.state.editable ? <input type='text' ref='name' defaultValue={this.props.item.name} /> : <h3>{this.props.item.name}</h3>;
    var toggle_status = this.state.editable ? this.toggleStatus() : <p>{this.props.item.toggle_status}</p>;
    var toggle_percentage = this.state.editable ? <input type='text' ref='toggle_percentage' defaultValue={this.props.item.toggle_percentage} /> : <p>{this.props.item.toggle_percentage}</p>

    return(
      <div key={this.props.item._id.$oid}>
        {name}
        {toggle_status}
        {toggle_percentage}
        <button onClick={this.handleEdit}>
          {" "}
          {this.state.editable ? "Submit" : "Edit" }{" "}
        </button>
        <button onClick={this.props.handleDelete}>Delete</button>
      </div>
    )
  }
}

export default Item
