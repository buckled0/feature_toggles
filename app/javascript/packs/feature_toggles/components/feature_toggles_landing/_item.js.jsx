import React from 'react';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.changeFeature = this.changeFeature.bind(this);
  }

  changeFeature() {
    this.props.changeFeature(this.props.item)
  }

  render() {
    return(
      <li className="active" key={this.props.item.id}>
        <a href='#' onClick={this.changeFeature}>{this.props.item.name}</a>
      </li>
    )
  }
}

export default Item
