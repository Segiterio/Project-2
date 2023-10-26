const nodemailer = require("nodemailer");
require("dotenv").config();

const mailSender = async (email, title, body) => {
  try {
    let transporter = nodemailer.createTransport({
      host: process.env.MAILHOST,
      auth: {
        pass: process.env.MAILPASS,
        user: process.env.MAILUSER,
      },
    });
    let resposneEmail = await transporter.sendMail({
      from: {
        name:"Skills Ladder Academy",
        address:process.env.MAILUSER,
      },
      to: `${email}`,
      subject: `${title}`,
      html: `${body}`,
    });

    // console.log(resposneEmail);
    return resposneEmail;
  } catch (error) {
    console.log(error);
  }
};

module.exports = mailSender;
