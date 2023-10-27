exports.ThanksMail = (name) => {
  return `
  <!DOCTYPE html>
  <html>
  <head>
      <title>Request for a Web Service Demo</title>
      <style>
          body {
              font-family: Arial, sans-serif;
          }
          .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #f5f5f5;
          }
          h1 {
              color: #333;
              font-size: 24px;
          }
          p {
              color: #666;
              font-size: 16px;
          }
          .button {
              background-color: #3f72af;
              color: #fff;
              padding: 10px 20px;
              border-radius: 5px;
              font-weight: bold;
              display: inline-block;
              text-decoration: none;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <h1>Request for a Web Service Demo</h1>
          <p>Hello ${name},</p>
          <p>We hope this email finds you well. We would like to offer you a personalized demo of our web service to showcase its features and benefits.</p>
          <p>Thank you for your interest in our web service. We look forward to assisting you.</p>
          <p>Someone will get in touch with you in 24hrs</p>
      </div>
  </body>
  </html>
  

     `;
};
