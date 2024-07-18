import axios from "axios";

export const getProducts = async () => {
  let response = await axios.get("http://127.0.0.1:3000/product/all");
  return response.data;
};
