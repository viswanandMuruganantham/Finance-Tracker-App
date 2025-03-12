import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TransactionSchema = new Schema(
  {
    buyer: {
      type: String,
      required: true,
    },
    amount: {
      type: Number, // Store amount in cents
      required: true,
      get: (v) => (v / 100).toFixed(2), // Convert cents to dollars
      set: (v) => Math.round(parseFloat(v.toString().replace(/[^0-9.]/g, "")) * 100), // Convert dollars to cents safely
    },
    productIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  { timestamps: true, toJSON: { getters: true }, toObject: { getters: true } }
);

const Transaction = mongoose.model("Transaction", TransactionSchema);

export default Transaction;
