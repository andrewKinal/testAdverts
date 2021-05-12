const router = require('express').Router();
const { getAllAdverts, getAdvert, createAdvert } = require('../controllers/advert.controller');

router.route('/')
  .get((req, res) => getAllAdverts(req, res))
  .post((req, res) => createAdvert(req, res));
  
router.route('/:id')
  .get((req, res) => getAdvert(req, res));

module.exports = router;