const express = require("express");

const db = require("./modal");

const router = express.Router();

const nodemailer = require("nodemailer");

router.get("/", (req, res) => {
  res.send("Welcome to my api");
});

router.post("/api/v1", async (req, res) => {
  var smtpTransport = nodemailer.createTransport({
    //  host: "smtp-mail.outlook.com",
    //  secureConnection: true,
    //  port: 587,
    //  auth: {
    //    user: 'info@jeffaviles.com',
    //    pass: 'Jeter2015.'
    //  },
    //  tls: {
    //      ciphers:'SSLv3'
    //  }
    // service: 'gmail',
    service: 'Gmail',
    auth: {
      user: "javiles747@gmail.com",
      pass: "Jeff2020.", // naturally, replace both with your real credentials or an application-specific password
    },
  });

  var mailOptions = {
    from: "info@jeffaviles.com",
    to: req.body.email,
    subject: `The Overthinking Cure ${req.body.username} you have just received your free pdf`,
    html: `<style type="text/css">	  html: "<b>Hello world?</b>"
   @media only screen and (max-width: 599px) {	
       .em_divhide {	
           display: none !important	
           }	
       }	
   </style>	
   </head>	
   <body bgcolor="#ffffff" style="margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-font-smoothing:antialiased;margin:0px; padding:0px;">	
   <table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0">	
   <tr>	
   <td align="center" valign="top" style="border-collapse:collapse;mso-line-height-rule:exactly">	
   <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;table-layout:fixed;width:600px;" width="600"> <!--============Pre-Header Section============-->	
   <tr>	
   <td align="center" style="border-collapse:collapse;mso-line-height-rule:exactly;line-height:0px;font-size:0px;">	
   <div style="display:none;font-size:1px;color:#ffffff;line-height:1px;font-family:Arial, Helvetica, sans-serif;max-height:0px;max-width:0px;opacity:0;overflow:hidden;mso-hide:all;">	
                     Free E-book 	
                   </div>	
   </td>	
   </tr>	
   <tr>	
   <td align="center" valign="top" style="border-collapse:collapse;mso-line-height-rule:exactly">	
   <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;width:100%;" width="100%"> <!--============//Pre-Header Section============-->	
   <tr>	
   <td align="center" valign="top" style="border-collapse:collapse;mso-line-height-rule:exactly">	
   <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;width:100%;" width="100%">	
   <tr>	
   <td align="center" style="border-collapse:collapse;mso-line-height-rule:exactly;background-color: #F9F9F9;" valign="top">	
   </td>	
   </tr>	
   </table>	
   </td>	
   </tr>	
   <tr>	
   <td align="center" valign="top" style="border-collapse:collapse;mso-line-height-rule:exactly">	
   <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;width:100%;" width="100%">	
   <tr>	
   <td align="center" style="border-collapse:collapse;mso-line-height-rule:exactly;background-color: #F9F9F9;" valign="top"> <a href="https://trk.klclick2.com/wf/click?upn=Li6p5MRKUfk-2Flm68PLa77w62C-2B8OlJeyEiPpw-2Fo8P8VWzga8kcSgplkuPr-2FQ1X9YXPAaGILUtWHjkjs2KyGdIirnCoi1Jw1ClM0a2nLmU5qIpIkXaRp-2BCkwesUuPU524wti532GdbUqUQ3Vpojz6f0ywTOOxq1xeRDEqNQCresibm7X6OW4Ofr-2FDS5vaLyIUzmcRD3zu7rsS7CP8WcciDOvjGdkOhNdXjJd70WEc7buVgi4A780onoDj1ONa7LazuNJFpyTs0r-2FFWHWRWvNxrM-2BYf6D5-2FgJiBk3bRj5ycpxtA-2FM0lJpWIw67NJ0SnGlN_jk7xktPgXcVKAVfvg-2FHUIlXUg-2FQ-2F1ys5A2iiw31eMbPrhR05HH-2FL674yc8p-2B54DLoU6p4YxP1n0gebOzsoQUfPPjV-2FHHNwwciJEyQI6tFBToBu1ez5AC3daiF7-2BSEPf0P75mYJFqk2Hqnz9OkrwvUETrDqhPyMpcOGOVnFHDjhP4tgCS80tgz7a62x74Uqr0q228qZIeBDMGz92zT1zeuq3xvsy1n2o-2BtfEGl0qDqG4V4ESjhM4DyrXKcIj9bs2E-2F2JOOx2MkeqmWXJJet0UpNJieis83nVAmN88zT75CHDiIWWGhKDSeFTIb3sa2Z0wdQ-2F8cDL-2F174vQ2Fp2vkasO-2B1bYQLDMtf3sOGArkA83TIj3syMWOQnPk7ufm0tLpHFrXu5IeNwNpBp2bTwWrZDw-3D-3D" style="border-collapse:collapse;mso-line-height-rule:exactly;text-decoration:none;" target="_blank">	
   </a>	
   </td>	
   </tr>	
   </table>	
   </td>	
   </tr>	
   <tr>	
   <td align="center" valign="top" style="border-collapse:collapse;mso-line-height-rule:exactly">	
   <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;width:100%;" width="100%">	
   <tr>	
   <td align="center" style="border-collapse:collapse;mso-line-height-rule:exactly;background-color: #F9F9F9;" valign="top"> 	
   </a>	
   </td>	
   </tr>	
   </table>	
   </td>	
   </tr>	
   <tr>	
   <td align="center" valign="top" style="border-collapse:collapse;mso-line-height-rule:exactly">	
   <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;width:100%;" width="100%">	
   <tr>	
   <td align="center" style="border-collapse:collapse;mso-line-height-rule:exactly;background-color: #F9F9F9;" valign="top"> 	
   </td>	
   </tr>	
   </table>	
   </td>	
   </tr>	
   <tr>	
   <td align="center" valign="top" style="border-collapse:collapse;mso-line-height-rule:exactly">	
   <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;width:100%;" width="100%">	
   <tr>	
   <td align="center" style="border-collapse:collapse;mso-line-height-rule:exactly;background-color: #F9F9F9;" valign="top"> 	
   </td>	
   </tr>	
   </table>	
   </td>	
   </tr>	
   <tr>	
   <td align="center" valign="top" style="border-collapse:collapse;mso-line-height-rule:exactly">	
   <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;width:100%;" width="100%">	
   <tr>	
   <td align="center" style="border-collapse:collapse;mso-line-height-rule:exactly;background-color: #F9F9F9;" valign="top"> 	
   <img alt="Purchase any Jet Black bag to win a chance for a $200 gift card." border="0" src="http://jeffaviles.com/img/1920x1080/bio.jpg" style="border:0;outline:none;display:block; max-width:600px; font-family:Arial, sans-serif; font-size:20px; line-height:24px; color:#000000; font-weight:normal;" width="600">	
   </td>	
   </tr>	
   </table>	
   </td>	
   </tr>	
   <tr>	
   <td align="center" valign="top" style="border-collapse:collapse;mso-line-height-rule:exactly">	
   <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0">	
   <tr>	
   <td class="em_side" style="border-collapse:collapse;mso-line-height-rule:exactly;width:15px;" width="15">	
                                  
                             </td>	
   <td align="center" class="em_gray" style="border-collapse:collapse;mso-line-height-rule:exactly;font-family:Helvetica, Arial, sans-serif;color:#959595;font-size:12px;line-height:16px;">	
   <br>	
   <br>	
   <br>	
   <!--                             If Jet Black travel pouch or straps are unavailable, another color will be chosen. Free gifts can not be transferred for credit. Purchase must be made to enter $200 gift card contest. On October 31st, a winner will be emailed a $200 gift card for any future purchase at www.woolandoak.com. Gift card cannot be transferred for credit or cash. Available while supplies last. -->	
                               <br>	
   <br>Jeff &amp; Aviles © 2020  &amp; quantumfocusingmethod, Inc. All rights reserved.  <br>	
   <br>	
                                 |  	
      
   </td>	
   <td class="em_side" style="border-collapse:collapse;mso-line-height-rule:exactly;width:15px;" width="15">	
                                  
                             </td>	
   </tr>	
   </table>	
   </td>	
   </tr>	
   <tr>	
   <td height="10" style="border-collapse:collapse;mso-line-height-rule:exactly;height:10px;line-height:1px;font-size:1px;">	
                            
                       </td>	
   </tr>	
   <!--============//Footer Section============-->	
   </table>	
   </td>	
   </tr>	
   </table>	
   <div class="gmailfix" style="display:none;white-space:nowrap;font:15px courier;line-height:0;">	
   </div>	
   </td>	
   </tr>	
   </table>	
       
     </body>	
   </html>`,
    attachments: [
      {
        filename: "The_Overthinking_Cure.pdf",
        path: "./output/The_Overthinking_Cure.pdf",
        contentType: "application/pdf",
      },
    ],
  };
  await db.insert_email(req.body).then((info) => {
    smtpTransport.sendMail(mailOptions, (error, response) => {
      if (error) {
        res.send(error);
      } else {
        res.send("Success");
      }
      smtpTransport.close();
    });
  });
});

module.exports = router;
