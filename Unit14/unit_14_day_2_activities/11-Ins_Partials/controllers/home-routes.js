const router = require('express').Router();
const { Gallery, Painting } = require('../models');

// GET all galleries for homepage
router.get('/', async (req, res) => {
  try {
    // use the model to get gallery data with paintings
    const dbGalleryData = await Gallery.findAll({
      include: [
        {
          model: Painting,
          attributes: ['filename', 'description'],
        },
      ],
    });

    // serialize the data for the view
    const galleries = dbGalleryData.map((gallery) =>
      gallery.get({ plain: true })
    );

    // render the view with data
    res.render('homepage', {
      galleries,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one gallery
router.get('/gallery/:id', async (req, res) => {
  try {
    // use the Model to get gallery data with paintings
    const dbGalleryData = await Gallery.findByPk(req.params.id, {
      include: [
        {
          model: Painting,
          attributes: [
            'id',
            'title',
            'artist',
            'exhibition_date',
            'filename',
            'description',
          ],
        },
      ],
    });

    // serialize data for the view
    const gallery = dbGalleryData.get({ plain: true });

    // render the gallery view with data
    res.render('gallery', { gallery });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one painting
router.get('/painting/:id', async (req, res) => {
  try {
    // use the Model to get data for the requested painting
    const dbPaintingData = await Painting.findByPk(req.params.id);

    // serialize data for the view
    const painting = dbPaintingData.get({ plain: true });

    // render painting view with data for the requested painting
    res.render('painting', { painting });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
