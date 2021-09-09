const jwt = require("jsonwebtoken");

// The secret is in the code for demonstration. Typically, this value will come
// from an environmental variable. (e.g. process.env.SECRET)
const secret = "mysecretssshhhhhhh";
const expiration = "2h";

module.exports = {
  signToken({ email, username, _id }) {
    const payload = { email, username, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
