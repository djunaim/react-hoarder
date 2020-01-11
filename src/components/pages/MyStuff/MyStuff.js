import React from 'react';
import { Link } from 'react-router-dom';

import itemsData from '../../../helpers/data/itemsData';
import authData from '../../../helpers/data/authData';
import Stuff from '../../shared/Stuff/Stuff';

class MyStuff extends React.Component {
  state = {
    items: [],
  }

  componentDidMount() {
    this.getItemsData();
  }

  getItemsData = () => {
    const uid = authData.getUid();
    itemsData.getItemsByUid(uid)
      .then((items) => {
        this.setState({ items });
      })
      .catch((errFromItemsData) => console.error(errFromItemsData));
  }

  render() {
    const itemId = '12345';
    const { items } = this.state;
    return (
      <div className="MyStuff">
        <h1>My Stuff</h1>
        <div className="stuff container d-flex flex-wrap">
          {items.map((item) => <Stuff key={item.id} item={item} />)}
        </div>
        {/* <Link className="btn btn-primary" to={`/stuff/${itemId}/edit`}>Edit</Link> */}
      </div>
    );
  }
}

export default MyStuff;
