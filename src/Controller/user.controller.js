const UserService = require("../Services/user.service");
const auth = require("../Middlewares/auth");
var userService = new UserService();

const signup = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(422).json({
        success: false,
        data: [],
        message: ["username and password is required"],
      });
    }
    const user = await userService.signup(req);
    if (user) {
      return res.status(200).json({
        success: true,
        data: [],
        message: ["account created successfully"],
      });
    }
    return res.status(422).json({
      success: false,
      data: [],
      message: ["something went wrong please try again"],
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: [],
      message: [error.message],
    });
  }
};

const login = async (req, res) => {
  try {
    const user = await userService.login(req);
    if (user) {
      const accessToken = await auth.createToken(user._id);
      return res.status(200).json({
        success: true,
        data: { accessToken }, 
        message: ["successfully logged in"],
      });
    }
    return res.status(422).json({
      success: false,
      data: [],
      message: ["username or password is incorrect"],
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: [],
      message: [error.message]
    })
  }
};


module.exports = { signup, login };
