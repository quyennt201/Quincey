const bcrypt = require("bcrypt");
const User = require("../models/userModel");

const exception = (e) => {
  return {
    error: "An error occurred!",
    data: e,
  };
};

const userController = {
  registerUser: async (req, res) => {
    try {
      const { username, password, fullname, phonenumber, gender } = req.body;
      // hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      // check email
      const checkEmail = await User.findOne({ username: username });
      if (checkEmail) {
        return res.status(400).json({ error: "Email already exists!" });
      }
      // create new user
      const newUser = new User(req.body);
      // save to db
      const user = await newUser.save();
      res.status(201).json({ message: "Signed up successfully!", data: user });
    } catch (e) {
      res.status(500).json(exception(e));
    }
  },

  loginUser: async (req, res) => {
    try {
      const { username, password } = req.body;
      // check username
      const user = await User.findOne({ username: username });
      if (!user) {
        return res.status(401).json({ error: "Wrong username!" });
      }
      // check password
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return res.status(401).json({ error: "Wrong password!" });
      }
      // login
      res.status(200).json({ message: "Login successfully!", data: user });
    } catch (e) {
      res.status(500).json(exception(e));
    }
  },

  getAll: async (req, res) => {
    try {
      const users = await User.find().populate("orders");
      res
        .status(200)
        .json({ message: "Get all user successfully!", data: users });
    } catch (e) {
      res.status(500).json(exception(e));
    }
  },
};

module.exports = userController;