const bcrypt = require('bcrypt');

module.exports = {
  hashPassword: async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  },
  comparePassword: async (password, hash) => {
    return await bcrypt.compare(password, hash);
  }
}