const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: String,
    password: String,
    fullname: String,
    address: [
      {
        apartmentnumber: String,
        ward: String,
        district: String,
        city: String,
      },
    ],
    phonenumber: String,
    avatar: {
      type: String,
      default:
        "https://res.cloudinary.com/dz2fcqjpg/image/upload/v1695374699/mejug1pxuu1pkdrwbvro.jpg",
    },
    gender: {
      type: Boolean,
      default: true,
    },
    admin: {
      type: Boolean,
      default: false,
    },
    orders: [
      {
        type: String,
        ref: "Order",
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
