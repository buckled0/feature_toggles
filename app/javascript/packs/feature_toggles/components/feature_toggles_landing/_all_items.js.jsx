import React from 'react';
import Item from './_item.js.jsx'

class AllItems extends React.Component {
  handleDelete(id) {
    this.props.handleDelete(id);
  }
  onUpdate(item) {
    this.props.onUpdate(item);
  }
  render() {
    var items = this.props.items.map((item) => {
      return(
        <ul className="list-unstyled components" key={item.id}>
          <Item item={item} handleUpdate={this.onUpdate.bind(this)} handleDelete={this.handleDelete.bind(this, item.id)} />
        </ul>
      )
    })
    return(
      <nav id="sidebar">
        <div className="sidebar-header">
          <h3>Active Toggles</h3>
          {items}
        </div>
      </nav>
    )
  }
}

export default AllItems
