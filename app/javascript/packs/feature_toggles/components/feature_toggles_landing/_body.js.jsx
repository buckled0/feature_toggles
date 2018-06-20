import React from 'react';
import NewItem from './_new_items.js.jsx';
import AllItems from './_all_items.js.jsx';
import $ from 'jquery';

class Body extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    $.getJSON('/api/v1/feature_toggles.json', (response) => { this.setState({ items: response }) });
  }
  handleSubmit(item) {
    var newState = this.state.items.concat(item);
    this.setState({ items: newState })
   }
  render() {
    return (
      <div>
        <NewItem handleSubmit={this.handleSubmit}/>
        <AllItems items={this.state.items}/>
      </div>
    )
  }
}

export default Body
