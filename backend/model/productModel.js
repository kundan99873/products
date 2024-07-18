import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: [true, "id is required"],
    },
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    price: {
      type: Number,
      required: [true, "Title is required"],
    },
    description: {
      type: String,
      required: [true, "Title is required"],
    },
    category: {
      type: String,
      required: [true, "Title is required"],
    },
    image: {
      type: String,
      required: [true, "Title is required"],
    },
    rating: {
      rate: {
        type: Number,
        required: [true, "rate is required"],
      },
      count: {
        type: Number,
        required: [true, "count is required"],
      },
    },
    title: {
      type: String,
      required: [true, "Title is required"],
    },
  },
  {
    timestamps: true,
    validateBeforeSave: true,
  }
);

const productModel =
  mongoose.model.products || mongoose.model("products", productSchema);
export default productModel;
