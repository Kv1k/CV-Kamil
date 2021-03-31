var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');
require('dotenv').config()




var transport = {
  maxConnections:30,
  service:'gmail',
  secure: true,
  auth: {
      type: 'OAuth2',
      user: '***************',
      clientId: '***************' ,
      clientSecret: '***************',
      refreshToken:'***************',
      accessToken:'***************'
  }
  
}
var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
if (error) {
  console.log(error);
} else {
  console.log('Server is ready to take messages');
}
});

router.post('/contact', (req, res, next) => {
  var nom = req.body.nom
  var email = req.body.email
  var sujet = req.body.sujet
  var message = req.body.message
  var content = `nom: ${nom} \n email: ${email} \n message: ${message} `

  var mail = {
    from: email,
    to: 'kam.nach@hotmail.com',  // Change to email address that you want to receive messages on
    subject: sujet,
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
      status: 'success',
      
      })
      transporter.close()
    }
  })
})

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)






module.exports = router;
