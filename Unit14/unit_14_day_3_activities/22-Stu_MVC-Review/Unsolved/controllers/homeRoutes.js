const router = require('express').Router();
// TODO: import User model
const { User } = require("../models");

router.get('/', async (req, res) => {
  // TODO: use the User model to get all the users from the database sorted by
  // name.

  // TODO: serialize the array of user data. (HINT: you will need to serialize
  // each object in the array.)

  // TODO: pass the array of users to the Handlebars template.
  try {
    const userData = await User.findAll({
      order: ["name"]
    })

    const users = userData.map((userModel) => userModel.get({ plain: true }));

    res.render('homepage', {
      users,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
