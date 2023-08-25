const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    items: [
      {
        product: {
          type: String,
          ref: "Product",
        },
        quantity: Number,
      },
    ],
    customer: {
      type: String,
      ref: "User",
    },
    status: Boolean,
    pending: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
