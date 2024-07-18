import Products from "../model/productModel.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Products.find();
    if (!products) {
      return res
        .status(200)
        .json({ success: false, message: "Products not found" });
    }
    res.status(200).json({ success: true, products });
  } catch (error) {
    res.status(500).json("Internal server error");
  }
};
