const { response } = require("express");
const User = require("../models/User");

exports.register = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    const User = await User.create({
      username,
      email,
      password,
    });
    res.status(201).json({
      success: true,
      user: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }

  res.send("register");
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({
      success: false,
      error: "please provide a password",
    });
  }

  try {
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      res.status(404).json({
        success: false,
        error: "invalid credentials",
      });
    }
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      res.status(404).json({
        success: false,
        error: "invalid credentials",
      });
    }
    res.status(200).json({
      success: true,
      token: "dkpnvvnwnofnfnif929490",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.messsage,
    });
  }
};

exports.forgotpassword = (req, res, next) => {
  res.send("forogt password");
};

exports.resetpassword = (req, res, next) => {
  res.send("resetPassword");
};
