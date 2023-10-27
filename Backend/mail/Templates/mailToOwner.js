exports.bookADemoMail = (clientName,clientEmail,clientPhone) => {
     return `
     <!DOCTYPE html>
     <html>
     <head>
         <title>Web Service Demo Booking</title>
         <style>
             body {
                 font-family: Arial, sans-serif;
                 background-color: #f5f5f5;
                 margin: 0;
                 padding: 0;
             }
             .container {
                 max-width: 600px;
                 margin: 0 auto;
                 padding: 20px;
                 background-color: #fff;
                 border-radius: 5px;
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
                 text-decoration: none;
             }
         </style>
     </head>
     <body>
         <div class="container">
             <h1>Web Service Demo Booking</h1>
             <p>Hello Skills Ladder Academy,</p>
             <p>We are excited to inform you that ${clientName} has just booked a demo of our web service. ${clientName} is interested in learning more about how our service can benefit their needs and is looking forward to exploring its features.</p>
             <p>The details of the demo booking are as follows:</p>
             <ul>
                 <li><strong>Name:</strong> ${clientName}</li>
                 <li><strong>Email:</strong> ${clientEmail}</li>
                 <li><strong>Phone:</strong ${clientPhone}</li>
                 <!-- You can add more details here as needed -->
             </ul>
             <p>Could you please reach out to ${clientName} to schedule the demo at a convenient time? ${clientName} is eager to get started and we want to provide a seamless experience.</p>
             <a class="button" href="mailto:${clientEmail}">Contact ${clientName}</a>
         </div>
     </body>
     </html>
     
`
} 