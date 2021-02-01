require('dotenv').config();
const validUrl = require('valid-url');
const shortid = require('shortid');
const Url = require('../models/url');

const base_url = process.env.BASEURL;

// Create shorten url
const createShortenURL = async (req, res) => {
  const { long_url } = req.body;

  // Check base url
  if (!validUrl.isUri(base_url)) {
    return res.status(401).json('Invalid base url');
  }

  // Create url code
  const url_code = shortid.generate();

  // Check long url
  if (validUrl.isUri(long_url)) {
    try {
      let url = await Url.findOne({ long_url });

      if (url) {
        res.json(url);
      } else {
        const short_url = base_url + '/' + url_code;

        url = new Url({
          long_url,
          short_url,
          url_code,
          date: new Date()
        });

        await url.save();

        res.json(url);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json('Server error');
    }
  } else {
    res.status(401).json('Invalid long url');
  }
};

// Get long url from shorten url
const getLongURL = async (req, res) => {
  try {
    const url = await Url.findOne({ url_code: req.params.code });

    if (url) {
      url.click++; 
      await url.save();
      return res.redirect(url.long_url);
    } else {
      return res.status(404).json('No url found');
    }
  } catch (err) {
    console.error(err);
    res.status(500).json('Server error');
  }
};

module.exports = {
    createShortenURL,
    getLongURL
};
