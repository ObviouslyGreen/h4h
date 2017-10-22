

const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/api', (req, res, next) => {
  res.send(process.env.DB_CONNECTION);
  // knex('items')
  // .then((items) => {
  //   knex('images')
  //   .then((images) => {
  //     knex('artists')
  //     .then((artists) => {
  //       res.render('pages/items', {
  //         data: items,
  //         data2: images,
  //         data3: artists
  //       });
  //     })
  //   })
  // })
  // .catch((err) => {
  //   next(err);
  // });
});


module.exports = router;
