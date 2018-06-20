import React from 'react';
import $ from 'jquery'; 

class AllItems extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  componentDidMount() {
    $.getJSON('/api/v1/feature_toggles.json', (response) => { this.setState({ items: response }) });
  }

  render() {
    var items = this.state.items.map((item) => {
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
