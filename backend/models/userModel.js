const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
    fullname: String,
    address: String,
    phonenumber: String,
    avatar: {
      type: String,
      default:
        "https://res.cloudinary.com/trungvan1904/image/upload/v1666843620/image/default_avatar_pzvbqf.jpg",
    },
    gender: Boolean,
    admin: {
      type: Boolean,
      default: false,
    },
    orders: [
      {
        type: String,
        ref: 'Order'
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;