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
      user: 'kam.nach34@gmail.com',
      clientId: '848252838249-9h40792luvc2r0a6fpqnumd5s4s8g89l.apps.googleusercontent.com' ,
      clientSecret: 'Ypy-fdl3yocove-mEndBTD3s',
      refreshToken:'1//04u0igad3y8TECgYIARAAGAQSNwF-L9Ir-l4UcSK0Q4wszTzjqmmHwBr1-LYDyqPKY8n8Uv3f2dIHXxOC3yOQr6mZpkAStLa5-M0',
      accessToken:'ya29.A0AfH6SMCmuA6zkehfwPjmJszaLEmwAKWE8IDG8WCbwx_4hqKmOmvKMLT7ivOpjhxG5NaMuu7bXs-dUJo-wRlk5QLEmNIiOOkUT30fy3sAWK8hY_DjRCjjbCbyd7RyIZsPtG157BgXLmZZeFsz39QV9Ou3hhsB'
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
