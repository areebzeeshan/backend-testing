const bcrypt = require("bcryptjs");

const helperService = {
  encryptPassword: async (password) => {
    return await bcrypt.hash(password, 10);
  },
  comparePassword: async (password, dbPassword) => {
    return await bcrypt.compare(password, dbPassword);
  },
};

module.exports = { helperService };
