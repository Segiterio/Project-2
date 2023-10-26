const { ThanksMail } = require("../mail/Templates/ThanksMail");
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
      ThanksMail()
    );

    // console.log(mailRespose);
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
