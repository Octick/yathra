const emailModel = require("../model/emailModel.js");

exports.sendEmail = (req, res) => {
  let name = req.body.name;
  let mobile = req.body.mobile;
  let email = req.body.email;
  let destination = req.body.destination;
  let dates = req.body.dates;
  let message = req.body.message;

  emailModel
    .sendBooking(name, mobile, email, destination, dates, message)
    .then(() => {
      res.status(201).send("Email sent successfully");
    })
    .catch((err) => {
      res.status(500).send(err);
      console.log(err);
    });
};

exports.sendBooking = (req, res) => {
  let departure = req.body.departure;
  let destination = req.body.destination;
  let departureDate = req.body.departureDate;
  let returnDate = req.body.returnDate;
  let name = req.body.name;
  let mobile = req.body.mobile;
  let adults = req.body.adults;
  let children = req.body.children;
  let infants = req.body.infants;
  let message = req.body.message;
  let type = req.body.type;
  let directFlight = req.body.directFlight === true ? 'Yes' : 'No';

  emailModel
    .sendBooking(departure, destination, departureDate, returnDate, name, mobile, adults, children, infants, message, type, directFlight)
    .then(() => {
      res.status(201).send("Email sent successfully");
    })
    .catch((err) => {
      res.status(500).send(err);
      console.log(err)
    });
};

exports.contact = (req, res) => {
  let subject = req.body.subject;
  let name = req.body.name;
  let mobile = req.body.mobile;
  let email = req.body.email;
  let message = req.body.message;

  emailModel
    .contact(subject, name, mobile, email, message)
    .then(() => {
      res.status(201).send("Email sent successfully");
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

