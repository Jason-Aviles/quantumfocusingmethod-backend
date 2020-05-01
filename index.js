const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const cors = require('cors');

const app = express();

const port = 4444;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.listen(port, () => {
  console.log('We are live on port 4444');
});


app.get('/', (req, res) => {
  res.send('Welcome to my api');
})

app.post('/api/v1', (req,res) => {
  var data = req.body;

var smtpTransport = nodemailer.createTransport({

 
  host: "smtp-mail.outlook.com",
  secureConnection: false, 
  port: 587, 
  auth: {
    user: 'info@jeffaviles.com',
    pass: 'Jeter2015.'
  },
  tls: {
      ciphers:'SSLv3'
  }

});

var mailOptions = {
  from: 'info@jeffaviles.com',
  to: data.email,
  subject: `The Overthinking Cure    ${data.username} you have just received your free pdf` ,
  html: "<b>Hello world?</b>"
           ,
          attachments: [{
            filename: 'The_Overthinking_Cure.pdf',
            path: './output/The_Overthinking_Cure.pdf',
            contentType: 'application/pdf'
          }]
};

smtpTransport.sendMail(mailOptions,
(error, response) => {
  if(error) {
    res.send(error)
  }else {
    res.send('Success')
  }
  smtpTransport.close();
});

})