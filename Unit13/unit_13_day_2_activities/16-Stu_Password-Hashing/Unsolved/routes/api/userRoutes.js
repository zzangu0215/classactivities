const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../../models/User');

// CREATE a new user
router.post('/', async (req, res) => {
  try {
    const newUser = req.body;
    newUser.password = await bcrypt.hash(req.body.password, 10);
    const userData = await User.create(newUser);
  
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    // TODO: what is the purpose of the following line? What does it do?
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      // TODO: what is the purpose of the following line?
      res.status(400).json({ message: 'Login failed. Please try again!' });
      return;
    }

    // TODO: what does the following statement do?
    const validPassword = await bcrypt.compare(
      req.body.password,
      userData.password
    );

    // TODO: what is the purpose of the following conditional?
    if (!validPassword) {
      res.status(400).json({ message: 'Login failed. Please try again!' });
      return;
    }

    // TODO: what does the following statement?
    res.status(200).json({ message: 'You are now logged in!' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
