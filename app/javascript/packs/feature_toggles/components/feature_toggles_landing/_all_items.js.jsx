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
        <div key={item._id.$oid}>
          <Item item={item} handleUpdate={this.onUpdate.bind(this)} handleDelete={this.handleDelete.bind(this, item._id.$oid)} />
        </div>
      )
    })
    return(
      <div>
        <h2>Active Toggles</h2>
        {items}
      </div>
    )
  }
}

export default AllItems
