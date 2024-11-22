import React from "react";
import doodleone from "../assets/images/doodle1.png";
import doodletwo from "../assets/images/doodle2.png";
import doodlethree from "../assets/images/doodle3.png";
import doodlesix from "../assets/images/doodle6.png";
import doodlefive from "../assets/images/doodle5.png";
import bitcoin from "../assets/images/bitcoin.png";

const items = [
  {
    id: 1,
    name: "#9340",
    price: 100,
    image: doodleone,
  },
  {
    id: 2,
    name: "#9494",
    price: 200,
    image: doodletwo,
  },
  {
    id: 3,
    name: "#8439",
    price: 300,
    image: doodlethree,
  },
  {
    id: 4,
    name: "#9830",
    price: 400,
    image: doodlefive,
  },
  {
    id: 5,
    name: "#9939",
    price: 500,
    image: doodlesix,
  },
  {
    id: 6,
    name: "#9303",
    price: 500,
    image: doodlesix,
  },
  {
    id: 7,
    name: "#9922",
    price: 500,
    image: doodlesix,
  },
  {
    id: 8,
    name: "#0382",
    price: 500,
    image: doodlesix,
  },
  {
    id: 9,
    name: "#6393",
    price: 500,
    image: doodletwo,
  },
  {
    id: 10,
    name: "#3702",
    price: 800,
    image: doodlefive,
  },
];

const Products = () => {
  return (
    <>
      <div className="products-container">
        <div>
          <h1>PRODUCTS</h1>
        </div>
        <div className="products">
          <ul className="products-list">
            {items.map((item) => (
              <li key={item.id} className="product-card">
                <img src={item.image} alt={item.name} />
                <h2>{item.name}</h2>
                <p>Price: ${item.price}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Products;
