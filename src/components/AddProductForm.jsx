import React from "react";

const AddProductForm = () => {
  return (
    <div className="add-product">
      <h1>Add Products</h1>
      <div className="form-container">
        <form >
          <div className="form-group">
            <label for="name">Name</label>
            <input type="text" className="form-name"  placeholder="Enter name"/>
          </div>
          <div className="form-group">
            <label for="price">Price</label>
            <input type="number" min="1" className="form-price"  placeholder="Enter price"/>
          </div>
          <div className="form-group">
            <label for="description">Description</label>
            <textarea className="form-description"  placeholder="Enter description"/>
          </div>
          <div>
            <label for="image">Image</label>
            <input type="file" className="form-image"  placeholder="Enter image"/>
          </div>
          <button type="submit" className="form-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddProductForm;
