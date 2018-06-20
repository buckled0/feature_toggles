import React from 'react';
import NewItem from './_new_items.js.jsx';
import AllItems from './_all_items.js.jsx';

class Body extends React.Component{
  render() {
    return (
      <div>
        <NewItem />
        <AllItems />
      </div>
    )
  }
}

export default Body
