

const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/api', (req, res, next) => {
  knex.select('*').from('public.story')
  .then((stories) => {
    res.send(stories);
  })
  .catch((err) => {
    next(err);
  });
  // knex.withSchema('public').select('tablename').from('story').then((stories)=>{
  //   console.log('inside knex');
  //   console.log(stories);
  // })
});
router.post('/api/newstory', (req, res, next) => {
  console.log(req);
let description = typeof req.body.description !== "undefined" ? req.body.description : null;
let disability = typeof req.body.disability !== "undefined" ? req.body.disability : null;
let ethnicity = typeof req.body.ethnicity !== "undefined" ? req.body.ethnicity : null;
let event_date = typeof req.body.event_date !== "undefined" ? req.body.event_date : null;
let experience_type = typeof req.body.experience_type !== "undefined" ? req.body.experience_type : null;
let gender = typeof req.body.gender !== "undefined" ? req.body.gender : null;
let lgbtq_status = typeof req.body.lgbtq_status !== "undefined" ? req.body.lgbtq_status : null;
let location_type = typeof req.body.location_type !== "undefined" ? req.body.location_type : null;
let motivation_type = typeof req.body.motivation_type !== "undefined" ? req.body.motivation_type : null;
let nationality = typeof req.body.nationality !== "undefined" ? req.body.nationality : null;
let race = typeof req.body.race !== "undefined" ? req.body.race : null;
let religion = typeof req.body.religion !== "undefined" ? req.body.religion : null;
let sexual_orientation = typeof req.body.sexual_orientation !== "undefined" ? req.body.sexual_orientation : null;
let has_been_reported = typeof req.body.has_been_reported !== "undefined" ? req.body.has_been_reported : null;
let x = typeof req.body.x !== "undefined" ? req.body.x : null;
let y = typeof req.body.y !== "undefined" ? req.body.y : null;
let longitude = typeof req.body.longitude !== "undefined" ? req.body.longitude : null;
let name = typeof req.body.name !== "undefined" ? req.body.name : null;
  knex('public.story').insert({
    description:  description,
    disability:  disability,
    ethnicity:  ethnicity,
    event_date:  event_date,
    experience_type:  experience_type,
    gender:  gender,
    lgbtq_status:  lgbtq_status,
    location_type:  location_type,
    motivation_type:  motivation_type,
    nationality:  nationality,
    race:  race,
    religion:  religion,
    sexual_orientation:  sexual_orientation,
    has_been_reported:  has_been_reported,
    latitude: x,
    longitude:  longitude,
    name:  name,
  })
  .returning('*')
  .then((story) => {
    res.send({
      sent: {
        description:  description,
        disability:  disability,
        ethnicity:  ethnicity,
        event_date:  event_date,
        experience_type:  experience_type,
        gender:  gender,
        lgbtq_status:  lgbtq_status,
        location_type:  location_type,
        motivation_type:  motivation_type,
        nationality:  nationality,
        race:  race,
        religion:  religion,
        sexual_orientation:  sexual_orientation,
        has_been_reported:  has_been_reported,
        latitude: x,
        longitude:  longitude,
        name:  name,
      },      
      received: story});
  })
  .catch((err) => {
    next(err);
  });
  // knex.withSchema('public').select('tablename').from('story').then((stories)=>{
  //   console.log('inside knex');
  //   console.log(stories);
  // })
});


module.exports = router;
