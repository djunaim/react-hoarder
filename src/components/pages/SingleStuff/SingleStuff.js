import React from 'react';
import { Link } from 'react-router-dom';
import itemsData from '../../../helpers/data/itemsData';
import authData from '../../../helpers/data/authData';

class SingleStuff extends React.Component {
  state = {
    item: {},
  }

  componentDidMount() {
    const { itemId } = this.props.match.params;
    itemsData.getSingleItem(itemId)
      .then((response) => {
        this.setState({ item: response.data });
        this.getItemsData();
      })
      .catch((errFromSingleStuff) => console.error(errFromSingleStuff));
  }

  getItemsData = () => {
    const uid = authData.getUid();
    itemsData.getItemsByUid(uid)
      .then((items) => {
        this.setState({ items });
      })
      .catch((errFromItemsData) => console.error(errFromItemsData));
  }

  deleteItem = () => {
    const { itemId } = this.props.match.params;
    itemsData.deleteItem(itemId)
      .then((items) => {
        this.setState({ items });
        this.getItemsData();
      })
      .catch((errFromDeleteItem) => console.error(errFromDeleteItem));
  }

  render() {
    const { item } = this.state;
    return (
      <div className="SingleStuff">
        <h1>{item.itemName}</h1>
        <h4>{item.itemDescription}</h4>
        <div className="card">
        <img src={item.itemImage} alt="..." />
          <div className="card-body">
            <h4 className="card-title">{item.itemName}</h4>
            <Link className="btn btn-danger" onClick={this.deleteItem} to="/stuff">Delete Item</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleStuff;
