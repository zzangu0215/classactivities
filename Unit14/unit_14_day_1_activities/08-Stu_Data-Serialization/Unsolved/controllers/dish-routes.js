const router = require("express").Router();
const sequelize = require("../config/connection");
const Dish = require("../models/Dish");

router.get("/", async (req, res) => {
  // TODO: Build out this route so that it serializes all of the dish objects
  // that it receives. See the 'get' route below for a hint. You will need to
  // serialize each object in the array of dish models returned by Sequelize.
  // Use .map or a for loop to create an array of serialized dishes.
  try {
    const dishData = await Dish.findAll();
    const dishes = [];
    for (let i=0; i<dishData.length; i++) {
      dishes.push(dishData[i].get());
    }
    // const dishes = dishData.map(dish => dish.get());

    // console.log(dishes);

    res.render("all", { dishes: dishes } );
  } catch (err) {
    res.status(500).json(err);
  }
});

// route to get one dish
router.get("/dish/:id", async (req, res) => {
  try {
    const dishData = await Dish.findByPk(req.params.id);
    if (!dishData) {
      res.status(404).json({ message: "No dish with this id!" });
      return;
    }
    // serialize dishData before passing the data to render.
    const dish = dishData.get({ plain: true });
    res.render("dish", dish);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
