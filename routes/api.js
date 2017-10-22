

const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/api', (req, res, next) => {
  res.send(process.env.DB_CONNECTION);
  knex('stories')
  .then((stories) => {
    console.log('knex stories!');
    res.send(stories);
  })
  .catch((err) => {
    next(err);
  });
});


module.exports = router;
