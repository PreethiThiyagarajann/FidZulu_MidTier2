var express = require('express');
var router = express.Router();
const laptops = require('../modules/laptops');
const createError = require('http-errors');
const books = require('../modules/books');
const dvds = require('../modules/dvds');



router.get('/classB/laptops/all/:location', function (req, res, next) {
  const param = req.params.location;
  var result = laptops.get_laptops_location(param);
  if (result != "") {
    res.setHeader('content-type', 'application/json');
    res.end(result);
  } else {
    next(createError(404));
  }

});


router.get('/classB/laptops/team', function (req, res, next) {
  var result = laptops.get_team();
  if (result != "") {
    res.setHeader('content-type', 'application/json');
    res.end(result);
  } else {
    next(createError(404));
  }
});



router.get('/classB/dvds/all/:location', function (req, res, next) {
  const param = req.params.location;
  var result = dvds.get_dvds_location(param);
  if (result != "") {
    res.setHeader('content-type', 'application/json');
    res.end(result);
  } else {
    next(createError(404));
  }

});
router.get('/classB/dvds/:team', function (req, res, next) {
  var result = dvds.get_team();
  if (result != "") {
    res.setHeader('content-type', 'application/json');
    res.end(result);

  } else {
    next(createError(404));
  }

});

router.get('/classB/books/all/:location', function (req, res, next) {
  const param = req.params.location;
  var result = books.get_books_location(param);
  if (result != "") {
    res.setHeader('content-type', 'application/json');
    res.end(result);
  }
  else if (result == "500") {
    next(createError(500));
  } else {
    next(createError(404));
  }

});
router.get('/classB/books/team', function (req, res, next) {
  var result = books.get_team();
  if (result != "") {
    res.setHeader('content-type', 'application/json');
    res.end(result);
  } else {
    next(createError(404));
  }
});


module.exports = router;
