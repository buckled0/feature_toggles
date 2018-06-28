import React from 'react';
import Item from './_item.js.jsx'

class AllItems extends React.Component {
  handleDelete(id) {
    this.props.handleDelete(id);
  }
  onUpdate(item) {
    this.props.onUpdate(item);
  }
  changeFeature(feature) {
    this.props.changeFeature(feature);
  }

  render() {
    var items = this.props.items.map((item) => {
      return(
        <ul className="list-unstyled components" key={item.id}>
          <Item item={item} changeFeature={this.changeFeature.bind(this)} />
        </ul>
      )
    })
    return(
      <div className="sidebar-header">
        <h3>Active Toggles</h3>
        {items}
      </div>
    )
  }
}

export default AllItems
