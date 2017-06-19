var express = require('express');
var router = express.Router();

router.get('/', (req,res) => {
    res.render('index', {title: 'Top 10 Song Analyze'});
});

module.exports = router;