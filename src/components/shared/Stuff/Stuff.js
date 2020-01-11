import React from 'react';
import { Link } from 'react-router-dom';

import itemShape from '../../../helpers/propz/itemShape';

class Stuff extends React.Component {
  static propTypes = {
    item: itemShape.itemShape,
  }

  render() {
    const { item } = this.props;

    return (
      <div className="Stuff row">
        <div className="card col-md-4">
          <img src={item.itemImage} alt="..." />
          <div className="card-body">
            <h4 className="card-title">{item.itemName}</h4>
            {/* <p className="card-text">{item.itemDescription}</p> */}
            <Link className="btn btn-secondary" to={`/stuff/${item.id}`}>View Single Item</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Stuff;
