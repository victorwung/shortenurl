const router = require('express').Router();

const {
    createShortenURL,
} = require('../controllers/url_controller');

router.route('/shorten')
    .post(createShortenURL);

module.exports = router;