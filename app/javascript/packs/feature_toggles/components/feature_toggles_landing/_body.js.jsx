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
    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleDelete = this.handleDelete.bind(this);
    this.removeFeatureClient = this.removeFeatureClient.bind(this);

    this.handleUpdate = this.handleUpdate.bind(this);
    this.updateItems = this.updateItems.bind(this);
  }

  componentDidMount() {
    $.getJSON('/api/v1/feature_toggles.json', (response) => { this.setState({ items: response }) });
  }

  handleDelete(id) {
    $.ajax({
      url: `/api/v1/feature_toggles/${id}`,
      type: 'DELETE',
      success:() => {
        this.removeFeatureClient(id);
      }
    });
  }

  removeFeatureClient(id) {
    var newItems = this.state.items.filter((item) => {
      return item._id.$oid != id;
    });
    this.setState({ items: newItems })
  }

  handleUpdate(item) {
    var featureToggle = { name: item.name, toggle_status: item.toggle_status, toggle_percentage: item.toggle_percentage }
    $.ajax({
      url: `/api/v1/feature_toggles/${item.id}`,
      type: 'PUT',
      data: { feature_toggle: featureToggle },
      success: () => {
          this.updateItems({id: item.id, name: item.name, toggle_status: item.toggle_status, toggle_percentage: item.toggle_percentage});
      }
    });
  }

  updateItems(item) {
    var items = this.state.items.filter((i) => {
      console.log(i.id)
      console.log(item)
      return i.id != item.id;
    });
    items.push(item);
    this.setState({items: items})
  }

  handleSubmit(item) {
    var newState = this.state.items.concat(item);
    this.setState({ items: newState })
  }

  render() {
    return (
      <div className="wrapper">
        <nav id="sidebar">
          <NewItem handleSubmit={this.handleSubmit} />
          <AllItems items={this.state.items} handleDelete={this.handleDelete} onUpdate={this.handleUpdate} />
        </nav>
      </div>
    )
  }
}

export default Body
