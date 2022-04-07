//* Imports
import axios from "axios";
import config from "../config/config.json";

//* Stripe Helpers
const buy = async (name, price, image, amount) => {
  return axios.post(`${config.apiEndPoint}/buy`, {
    name,
    price,
    image,
    amount,
  });
};

export default buy;
