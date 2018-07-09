import React from 'react';
import NewItem from './sidebar/_new_items.js.jsx';
import AllItems from './sidebar/_all_items.js.jsx';
import Header from './main/_header.js.jsx';
import FeatureToggleDetails from './main/_feature_toggle_details.js.jsx'
import $ from 'jquery';
import styled from 'styled-components'

const WrapperDiv = styled.div`
  display: flex;
  width: 100%;
  align-items: stretch;
`;

const BodyDiv = styled.div`
  width: 100%;
`;

const Sidebar = styled.nav`
  min-width:250px;
  max-width:250px;
  min-height:100vh;
  background: #0066cc;
  color: #fff;
  transition: all 0.3s;

  &.active {
    margin-left: -250px;
  }

  h3 {
    padding: 20px;
    background: #0066cc;
  }

  ul.components {
    padding: 20px 0;
    border-bottom: 1px solid #0066cc;
  }

  ul li a {
    padding: 10px;
    font-size: 1.1em;
    display: block;
  }

  ul li a:hover {
    color: #7386D5;
    background: #fff;
  }

  @media (max-width: 768px) {
    margin-left: -250px;
    &.active {
      margin-left: 0;
    }
    #sidebarCollapse span {
      display: none;
    }
}
`;

$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});

class Body extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      feature: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleDelete = this.handleDelete.bind(this);
    this.removeFeatureClient = this.removeFeatureClient.bind(this);

    this.handleUpdate = this.handleUpdate.bind(this);
    this.updateItems = this.updateItems.bind(this);

    this.changeFeature = this.changeFeature.bind(this);
  }

  componentDidMount() {
    $.getJSON('/service/features/api/v1/feature_toggles.json', (response) => { this.setState({ items: response }) });
  }

  handleDelete(id) {
    $.ajax({
      url: `/service/features/api/v1/feature_toggles/${id}`,
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
    $('#feature-div').hide();
    this.setState({ items: newItems })
  }

  handleUpdate(item) {
    var featureToggle = { name: item.name, toggle_status: item.toggle_status, toggle_percentage: item.toggle_percentage }
    $.ajax({
      url: `/service/features/api/v1/feature_toggles/${item.id}`,
      type: 'PUT',
      data: { feature_toggle: featureToggle },
      success: () => {
          this.updateItems({id: item.id, name: item.name, toggle_status: item.toggle_status, toggle_percentage: item.toggle_percentage});
      }
    });
  }

  updateItems(item) {
    var items = this.state.items.filter((i) => {
      return i.id != item.id;
    });
    items.push(item);
    this.setState({feature: item})
  }

  handleSubmit(item) {
    var newState = this.state.items.concat(item);
    this.setState({ items: newState })
  }

  changeFeature(feature) {
    this.setState({ feature: feature });
  }

  render() {
    return (
      <WrapperDiv>
        <Sidebar id="sidebar">
          <NewItem handleSubmit={this.handleSubmit} />
          <AllItems items={this.state.items}  changeFeature={this.changeFeature}/>
        </Sidebar>
        <BodyDiv>
          <Header />
          <FeatureToggleDetails feature={this.state.feature} onDelete={this.handleDelete} onUpdate={this.handleUpdate}/>
        </BodyDiv>
      </WrapperDiv>
    )
  }
}

export default Body
