var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/create', function(req, res, next) {
  var vm = {
    title: 'Create an Account'};
  res.render('users/create', vm);
});

/* GET users listing. */
router.post('/create', function(req, res, next) {
  var SomeThingGoesWrong = false;
  if(SomeThingGoesWrong){
    var vm = {
      title: 'Create an Account',
      input: req.body,
      error: 'SomethingWentWrong'
    };
    delete  vm.input.password;
    return res.render('users/create', vm);
  }
  res.redirect('/orders');
});

module.exports = router;
