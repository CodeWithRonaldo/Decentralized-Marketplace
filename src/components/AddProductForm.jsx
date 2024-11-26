import React from "react";
import { useState } from "react";

import { items } from "./Marketplace";

const AddProductForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: items.length + 1,
      name,
      price,
      description,
      imageUrl,
    };
    items.push(newProduct);
    setName("");
    setPrice("");
    setDescription("");
    setImageUrl("");
  };

  return (
    <div className="add-product">
      <h1>Add Products</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              min="1"
              className="form-price"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              className="form-description"
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="image">Image Url:</label>
            <input
              type="url"
              className="form-image"
              placeholder="Enter image Url"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="form-btn">
            Submit
          </button>
        </form>
      </div>
      {/* console.log({name});
      console.log({price}); */}
    </div>
  );
};

export default AddProductForm;
