import React from 'react';

import itemsData from '../../../helpers/data/itemsData';

class SingleStuff extends React.Component {
  state = {
    item: {},
  }

  // getSingleItemInfo = (itemId) => {
  //   itemsData.getSingleItem(itemId)
  //     .then((item) => {
  //       this.setState({ item });
  //     })
  //     .catch((errFromSingleStuff) => console.error(errFromSingleStuff));
  // }

  componentDidMount() {
    const { itemId } = this.props.match.params;
    console.log(itemId);
    itemsData.getSingleItem(itemId)
      .then((response) => {
        this.setState({ item: response.data });
        // this.getSingleItemInfo(itemId);
      })
      .catch((errFromSingleStuff) => console.error(errFromSingleStuff));
  }

  render() {
    const { item } = this.state;
    return (
      <div className="SingleStuff">
        <h1>{item.itemName}</h1>
        <h4>{item.itemDescription}</h4>
      </div>
    );
  }
}

export default SingleStuff;
