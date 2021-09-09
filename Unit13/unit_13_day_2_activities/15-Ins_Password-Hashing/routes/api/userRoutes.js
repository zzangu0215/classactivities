// 1) Import bcrypt (make sure you've run `npm i bcrypt`)
const bcrypt = require('bcrypt');

const router = require('express').Router();
const User = require('../../models/User');

// CREATE a new user
router.post('/', async (req, res) => {
  try {
    const newUser = req.body;
    // 2) hash the password from 'req.body' and save to newUser. Pass the
    //    password and number of salt rounds to `.hash`.
    newUser.password = await bcrypt.hash(req.body.password, 10);

    // 3) create the newUser with the hashed password and save to DB
    const userData = await User.create(newUser);
  
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
