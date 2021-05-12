const router = require('express').Router();
const { getAllAdverts, getAdvert, createAdvert } = require('../controllers/advert.controller');

const validate = require('../config/joi.validate');
const schema = require('../utils/validator');

router.route('/')
  .get((req, res) => getAllAdverts(req, res))
  .post(validate(schema), (req, res) => createAdvert(req, res));
  
router.route('/:id')
  .get((req, res) => getAdvert(req, res));

module.exports = router;