import React from 'react';

class AllItems extends React.Component{
  render() {
    var items = this.props.items.map((item) => {
      return(
        <div key={item._id.$oid}>
          <h3>{item.name}</h3>
          <p>{item.toggle_status}</p>
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
