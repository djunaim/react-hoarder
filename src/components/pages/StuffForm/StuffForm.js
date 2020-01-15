import React from 'react';

class StuffForm extends React.Component {
  state = {
    itemName: '',
    itemImage: '',
    itemDescription: '',
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ itemName: e.target.value });
  }

  imageChange = (e) => {
    e.preventDefault();
    this.setState({ itemImage: e.target.value });
  }

  descriptionChange = (e) => {
    e.preventDefault();
    this.setState({ itemDescription: e.target.value });
  }

  render() {
    const { itemName, itemImage, itemDescription } = this.state;

    return (
      <form className="StuffForm">
        <div className="form-group">
          <label htmlFor="item-name">Item Name</label>
          <input
            input="text"
            className="form-control"
            id="item-name"
            placeholder="Enter item name"
            value={itemName}
            onChange={this.nameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="item-image">Item Image</label>
          <input
            input="text"
            className="form-control"
            id="item-image"
            placeholder="Enter item image url"
            value={itemImage}
            onChange={this.imageChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="item-description">Item Description</label>
          <input
            input="text"
            className="form-control"
            id="item-description"
            placeholder="Enter item description"
            value={itemDescription}
            onChange={this.descriptionChange}
          />
        </div>
        <button className="btn btn-success" onClick={this.saveBoardEvent}>Save Item</button>
      </form>
    );
  }
}

export default StuffForm;
