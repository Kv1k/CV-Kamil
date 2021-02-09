var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');
const creds = require('../config.js');




var transport = {
  maxConnections:30,
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
      type: 'OAuth2',
      user: 'kam.nach34@gmail.com',
      clientId: '523889534088-rjmongrhbc3nr6662k3n6bmae8f7edeh.apps.googleusercontent.com',
      clientSecret: 'YcwhXqwfojzZ-qtWqRRb-FJ3',
      refreshToken: '1//04l_HzGTvfYS3CgYIARAAGAQSNwF-L9IroCbmGKOxxaoNRYfXMujFIV_O3YWnNUdUpi5dqQw95ZOcSIm2HZzRGiRjXo09Qj0Z3Fw',
      accessToken: 'ya29.a0AfH6SMCHD1fSh8rRSt5jo3RFlAwoyC_ILiF1sTdmR7YYIYLZ5BCHZ1hgPVmRmR7YQQgoNOf6y3YFXjmlUusR3T0172WPrGqi1NDOPiIlBG5d887BzmsGWInzGVwr8NsqK9XC8KJ2L0wNlQJPIQdxEVqrPVpSnH52MIBNA-oB4bs'
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
    to: 'kam.nach34@gmail.com',  // Change to email address that you want to receive messages on
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
