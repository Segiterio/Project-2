const { ThanksMail } = require("../mail/Templates/ThanksMail");
const { bookADemoMail } = require("../mail/Templates/mailToOwner");
const mailSender = require("../utils/mailSender");

exports.contactForm = async (req, res) => {
  try {
    const { name, email, company, phone, countryCode, team } = req.body;

    if (!name || !email || !company || !phone) {
      return res.status(401).json({
        message: "Please fill all required fields",
        success: false,
      });
    }

    const mailRespose = await mailSender(
      email,
      "Thanks for fate",
      ThanksMail(name,process.env.MAILUSER)
    );

    const ownerMail = await mailSender(
      process.env.MAILUSER,
      `${name} book demo for web service`,
      bookADemoMail(name, email, phone)
    );

    console.log("owner mail", ownerMail);
    console.log("client mail", mailRespose);
    return res.status(200).json({
      success: true,
      message: "Your request is Received",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "internal server error",
    });
  }
};
