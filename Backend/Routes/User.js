const express = require("express")
const Route = express.Router();
const {contactForm} = require("../controllers/contactForm")

Route.post("/contact",contactForm);

module.exports = Route;