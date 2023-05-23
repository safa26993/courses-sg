const express = require('express')
const router = express.Router()

// home page route
router.get("/", (req, res) => {
    res.render("game/index");
  });

  module.exports = router