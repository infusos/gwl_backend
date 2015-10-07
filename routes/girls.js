var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Girl = require('../models/Girl.js');

/* GET /Girls listing. */
router.get('/', function(req, res, next) {
  Girl.find(function (err, Girls) {
    if (err) return next(err);
    res.json(Girls);
  });
});

/* POST /Girls */
router.post('/', function(req, res, next) {
  Girl.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /Girls/id */
router.get('/:id', function(req, res, next) {
  Girl.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /Girls/:id */
router.put('/:id', function(req, res, next) {
  Girl.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /Girls/:id */
router.delete('/:id', function(req, res, next) {
  Girl.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
