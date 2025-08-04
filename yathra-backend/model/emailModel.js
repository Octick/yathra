const nodemailer = require("nodemailer");

exports.sendEmail = async (name, mobile, email, destination, dates, message) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAILFROM,
      pass: process.env.USERPASS,
    },
  });

  let info = await transporter.sendMail({
    from: process.env.MAILFROM,
    to: process.env.MAILTO,
    subject: `Inquiry Submission from ${email}`,
    text: `Name: ${name}\nMobile: ${mobile}\nEmail: ${email}\nDestination: ${destination}\nDates: ${dates}\nMessage: ${message}`,
  });

  console.log("Message sent: %s", info.messageId);
};

exports.sendBooking = async (departure, destination, departureDate, returnDate, name, mobile, adults, children, infants, message, type, directFlight) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAILFROM,
      pass: process.env.USERPASS,
    },
  });

  let info = await transporter.sendMail({
    from: process.env.MAILFROM,
    to: process.env.MAILTO,
    subject: `Inquiry Submission from ${name}`,
    text: `Name: ${name}\n\nMobile: ${mobile}\n\nDeparture: ${departure}\n\nDestination: ${destination}\n\nDeparture Date: ${departureDate}'\n\nReturn Date: ${returnDate}\n\nAdults: ${adults}\n\nChildren: ${children}\n\nInfants: ${infants}\n\nMessage: ${message}\n\nType: ${type}\n\nDirect Flight: ${directFlight}`,
  });

  console.log("Message sent: %s", info.messageId);
};

exports.contact = async (subject, name, mobile, email, message) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAILFROM,
      pass: process.env.USERPASS,
    },
  });

  let info = await transporter.sendMail({
    from: process.env.MAILFROM,
    to: process.env.MAILTO,
    subject: `Contact form Submission - ${subject}`,
    text: `Name: ${name}\nMobile: ${mobile}\nEmail: ${email}\nMessage: ${message}`,
  });
  console.log("Message sent: %s", info.messageId);
};

// module.exports = { sendEmail };
