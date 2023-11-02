var express = require('express');
var router = express.Router();


const customers = [{"id":1,"firstName":"John","lastName":"Doe"},
{"id":2,"firstName":"Jane","lastName":"Doe"},
{"id":3,"firstName":"Ziv","lastName":"Chen"},
{"id":4,"firstName":"Isaac","lastName":"Groisman"},
{"id":5,"firstName":"Avner","lastName":"Maman"},
{"id":6,"firstName":"Megan","lastName":"Dreyfuss"}]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/customers', (req,res)=>{
  res.send(customers)
})

module.exports = router;
