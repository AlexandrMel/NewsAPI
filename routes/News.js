const express = require('express');
const router = express.Router();

const {
  getPolitic,
  getEconomic,
  getSocial,
  getSport,
  getJustitie
} = require('../controllers/NewsController');

router
  .route('/politic')
  .get(getPolitic)
router
  .route('/economic')
  .get(getEconomic)
router
  .route('/social')
  .get(getSocial)
router
  .route('/sport')
  .get(getSport)
router
  .route('/justitie')
  .get(getJustitie)
module.exports = router;