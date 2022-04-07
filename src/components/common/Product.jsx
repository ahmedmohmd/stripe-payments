//* Imports
import React, { useState } from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import buy from "../../services/stripeService";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

//* Style
const ProductStyle = styled.div`
  padding: 5px;
  border-radius: 15px;
  transition: 0.7s;
  border: none;

  &:hover {
    box-shadow: 0 1rem 3rem rgb(0 0 0 / 18%) !important;
  }

  .card-title {
    font-weight: bold;
  }

  .card-img-top {
    width: 100%;
    height: 275px;
    border-radius: 15px;
    object-fit: cover;
  }

  .card-text {
    color: #777;
  }

  .amount {
    width: 75px;
    box-shadow: none;
    border: 2px solid transparent;

    &:focus {
      border: 2px solid #ff5e7d82;
    }
  }
`;

const Button = styled.button`
  background-color: #ff5e7d;
  border-radius: 8px;
  border: none;
  padding: 5px 8px;
  text-decoration: none;
  color: #fff;
  transition: 0.5s;
  font-weight: bold;

  &:hover {
    color: #fff;
    background: #e4506d;
    cursor: pointer;
  }
`;

//* JSX
function Product({ name, description, image, price }) {
  const [amount, setAmount] = useState(0);

  return (
    <ProductStyle className="card shadow" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title text-truncate">{name}</h5>
        <p className="card-text text-truncate">{description}</p>
        <div className="d-flex justify-content-between align-items-center w-100">
          <Button
            onClick={handleGetBuyURL}
            className="d-flex justify-content-center align-items-center gap-1"
          >
            <RiMoneyDollarCircleFill style={{ fontSize: 20 }} />
            <span>Buy</span>
          </Button>
          <input
            type="number"
            className="form-control amount"
            placeholder="amount"
            value={amount}
            onChange={handleAmountInput}
          />
          <span className="badge bg-secondary">$ {price}</span>
        </div>
      </div>
      <ToastContainer />
    </ProductStyle>
  );

  function handleAmountInput(e) {
    if (+e.target.value >= 0) return setAmount(+e.target.value);
  }

  async function handleGetBuyURL(e) {
    if (amount <= 0)
      return toast.error("Please Add Accepted Amount Number!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        style: {
          boxShadow: "none",
        },
      });

    const {
      data: { url },
    } = await buy(name, price, image, amount);

    window.location = url;
  }
}

export default Product;
