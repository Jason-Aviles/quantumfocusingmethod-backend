

const express = require("express");

const db = require("./modal");



const router = express.Router();





const nodemailer = require('nodemailer');





router.get('/', (req, res) => {
  res.send('Welcome to my api');
})

 router.post('/api/v1', async (req,res) => {


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
   to: req.body.email,
   subject: `The Overthinking Cure    ${req.body.username} you have just received your free pdf` ,
   html: "<b>Hello world?</b>"
            ,
           attachments: [{
             filename: 'The_Overthinking_Cure.pdf',
             path: './output/The_Overthinking_Cure.pdf',
             contentType: 'application/pdf'
           }]
 };
 await db.insert_email(req.body).then(info =>{



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

 
 })
 

 module.exports = router;