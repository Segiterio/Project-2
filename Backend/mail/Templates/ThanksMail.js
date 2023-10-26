exports.ThanksMail = () => {
  return `
     <!DOCTYPE html>
<html>
<head>
    <title>Thank You</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #f5f5f5;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        h1 {
            color: #333;
            font-size: 24px;
        }
        p {
            color: #666;
            font-size: 16px;
        }
        .thank-you {
            background-color: #3f72af;
            color: #fff;
            padding: 10px 20px;
            border-radius: 5px;
            font-weight: bold;
            display: inline-block;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Thank You!</h1>
        <p>We appreciate your support and wanted to express our gratitude.</p>
        <p>Your kindness means a lot to us.</p>
        <p>Thank you again!</p>
        <div class="thank-you">Your Message Here</div>
    </div>
</body>
</html>

     `;
};
