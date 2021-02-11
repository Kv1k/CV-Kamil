var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');
require('dotenv').config()




var transport = {
  maxConnections:30,
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
      type: 'OAuth2',
      user: 'kam.nach34@gmail.com',
      clientId: '848252838249-9h40792luvc2r0a6fpqnumd5s4s8g89l.apps.googleusercontent.com' ,
      clientSecret: process.env.clientSecret,
      refreshToken:'1//04ZdoWNrEdKchCgYIARAAGAQSNwF-L9Ir2mrdtJLDk5758lN4g-Yw6zdU3nsEXaXlCcZ43Uy38csVgmCoquAvY3cL62_QKQilOw0',
      accessToken:'ya29.a0AfH6SMBR6mt5zamMRUGkmAzC7KUPfrx3BGHwNLPItOlqY2OMJWPtN3E_qTBJHYZ7C7FbXaQNomGP6FYzksoQkbGU8OYD3c-HIfL0xwfVFMfO7sI5Bk_q68--9C4ZVUJ1H2k1treCOItMhQtccDvmTpE_7_btSQX_96qUtOjItvM'
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
