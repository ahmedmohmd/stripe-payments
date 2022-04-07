//* Imports
import React from "react";
import styled from "styled-components";
import products from "../services/ProductService";
import Product from "./common/Product";

//* Style
const HomeStyle = styled.div`
  height: 100vh;
`;

const Heading = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Fredoka One";
  color: #7235d1;
  font-size: 3rem;
  padding-bottom: 50px;
  padding-top: 25px;
`;

//* JSX
function Home() {
  return (
    <HomeStyle>
      <div className="container ">
        <Heading className="text-center">Market</Heading>
        <div className="products ">
          <div className="row gap-4 pb-5">
            {products.map(({ id, name, description, image, price }) => {
              return (
                <div
                  key={id}
                  className="col d-flex justify-content-center align-items-center"
                >
                  <Product
                    name={name}
                    description={description}
                    image={image}
                    price={price}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </HomeStyle>
  );
}

export default Home;
