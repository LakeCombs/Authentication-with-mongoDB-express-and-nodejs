const { response } = require("express");
const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");

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
    return next(new ErrorResponse("please provide an email and password", 400));
  }

  try {
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return next(new ErrorResponse("invalid credentials", 401));
    }
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return next(new ErrorResponse("invalid credentials", 404));
    }
    res.status(200).json({
      success: true,
      token: "dkpnvvnwnofnfnif929490",
    });
  } catch (error) {
    next(error);
  }
};

exports.forgotpassword = (req, res, next) => {
  res.send("forogt password");
};

exports.resetpassword = (req, res, next) => {
  res.send("resetPassword");
};
