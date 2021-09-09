const router = require('express').Router();
const User = require('../../models/User');

// TODO: Use try/catch to catch errors
// TODO: Return the appropriate HTTP status codes

// GET a user
router.get('/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id);
    if (!userData) {
      res.status(404).json({message: "User Not Found"});
      return;
    }

    res.json(userData);
  } catch (err) {
    res.status(500).json(err);
  }

  // const userData = await User.findByPk(req.params.id).catch((err) =>
  //   res.json(err)
  // );
  // res.json(userData);
});

// UPDATE a user
router.put('/:id', async (req, res) => {
  try {
    const userData = await User.update(req.body, {
      where: {
        id: req.params.id,
      }
    });

    if (userData[0] === 0) {
      res.status(404).json({message: "User Not Found"});
      return;
    }

    res.json(userData);
  } catch(err) {
    res.status(500).json(err);
  }

  // const userData = await User.update(req.body, {
  //   where: {
  //     id: req.params.id,
  //   },
  // }).catch((err) => res.json(err));
  // res.json(userData);
});

// DELETE a user
router.delete('/:id', async (req, res) => {
  try {
    const numberDeleted = await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (numberDeleted === 0) {
      res.status(404).json({message: "User Not Found"});
      return;
    }
    res.json({deleteCount: numberDeleted});
  } catch(err) {
    res.status(500).json(err);
  }

  // const userData = await User.destroy({
  //   where: {
  //     id: req.params.id,
  //   },
  // }).catch((err) => res.json(err));
  // res.json(userData);
});

router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);
    // 200 status code means the request is successful
    res.status(200).json(userData);
  } catch (err) {
    // 400 status code means the server could not understand the request
    res.status(400).json(err);
  }
});

module.exports = router;
