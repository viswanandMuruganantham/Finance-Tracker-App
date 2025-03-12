import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    price: {
      type: Number, // Store price in cents
      required: true,
      get: (v) => (v / 100).toFixed(2), // Convert to dollars
      set: (v) => Math.round(v * 100), // Convert to cents
    },
    expense: {
      type: Number, // Store expense in cents
      required: true,
      get: (v) => (v / 100).toFixed(2),
      set: (v) => Math.round(v * 100),
    },
    transactions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Transaction",
      },
    ],
  },
  { timestamps: true, toJSON: { getters: true } }
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;
