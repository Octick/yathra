const emailModel = require("../model/subsModel.js");

const sendEmail = (req, res) => {
  let email = req.body.email;

  emailModel
    .sendEmail(email)
    .then(() => {
      res.status(201).send("Email sent successfully");
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

module.exports = { sendEmail };
