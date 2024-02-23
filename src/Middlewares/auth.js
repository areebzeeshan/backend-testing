const jwt = require("jsonwebtoken");
const createToken = (userId) => {
  try {
    return jwt.sign({ userId }, process.env.SECRET_KEY);
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: [],
      message: [error.message],
    });
  }
};

module.exports = { createToken };
