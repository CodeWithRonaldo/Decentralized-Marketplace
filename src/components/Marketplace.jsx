import React from "react";
import doodleone from "../assets/images/doodle1.png";
import doodletwo from "../assets/images/doodle2.png";
import doodlethree from "../assets/images/doodle3.png";
import doodlesix from "../assets/images/doodle6.png";
import doodlefive from "../assets/images/doodle5.png";
import { GrCart } from "react-icons/gr";

export const items = [
  {
    id: 1,
    name: "#9340",
    description: "A breathtaking digital city pulsating with quantum energy.",
    price: 100,
    image: doodleone,
  },
  {
    id: 2,
    name: "#9494",
    description: "A breathtaking digital city pulsating with quantum energy. ",
    price: 200,
    image: doodletwo,
  },
  {
    id: 3,
    name: "#8439",
    description: "A breathtaking digital city pulsating with quantum energy. ",
    price: 300,
    image: doodlethree,
  },
  {
    id: 4,
    name: "#9830",
    description: "A breathtaking digital city pulsating with quantum energy.",
    price: 400,
    image: doodlefive,
  },
  {
    id: 5,
    name: "#9939",
    description:
      "A breathtaking digital city pulsating with quantum energy. This artwork is ideal for collectors",
    price: 500,
    image: doodlesix,
  },
  {
    id: 6,
    name: "#9303",
    description:
      "A breathtaking digital city pulsating with quantum energy. This artwork is ideal for collectors",
    price: 500,
    image: doodlesix,
  },
  {
    id: 7,
    name: "#9922",
    description:
      "A breathtaking digital city pulsating with quantum energy. This artwork is ideal for collectors",
    price: 500,
    image: doodlesix,
  },
  {
    id: 8,
    name: "#0382",
    description:
      "A breathtaking digital city pulsating with quantum energy. This artwork is ideal for collectors",
    price: 500,
    image: doodlesix,
  },
  {
    id: 9,
    name: "#6393",
    description:
      "A breathtaking digital city pulsating with quantum energy. This artwork is ideal for collectors",
    price: 500,
    image: doodletwo,
  },
  {
    id: 10,
    name: "#3702",
    description:
      "A breathtaking digital city pulsating with quantum energy. This artwork is ideal for collectors",
    price: 800,
    image: doodlefive,
  },
];

const Marketplace = () => {
  const handleBuy = () => {
    alert("Order Placed Successfully");
  };
  return (
    <>
      <div className="products-container">
        <div>
          <h1>COLLECTIONS</h1>
        </div>
        <div className="products">
          <ul className="products-list">
            {items.map((item) => (
              <li key={item.id} className="product-card">
                <img src={item.image} alt={item.name} />
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <p>Price: ${item.price}</p>
                <button className="add-cart" onClick={handleBuy}>
                  Buy Now
                  <GrCart className="cart-icon" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Marketplace;
