var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
require('dotenv').config();

var transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: 'snapshot8d@hotmail.com',
    pass: process.env.PASS
  }
});

var mailOptions = {
  from: 'snapshot8d@hotmail.com',
  to: 'snapshot8d@gmail.com',
  subject: 'Stacy redeemed a coupon!',
  text: 'That was easy!'
};

/*transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});*/

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nodemailer POC' });
});

router.get('/email', function(req, res, next) {
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
});

module.exports = router;
