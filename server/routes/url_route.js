const router = require('express').Router();

const {
    createShortenURL,
    getLongURL,
} = require('../controllers/url_controller');

router.route(`/api/url/shorten`)
    .post(createShortenURL);

router.route('/:code')
    .get(getLongURL);

module.exports = router;