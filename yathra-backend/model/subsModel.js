const nodemailer = require("nodemailer");

const sendEmail = async (email) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.MAILFROM,
      pass: process.env.USERPASS,
    },
  });

  let info = await transporter.sendMail({
    from: process.env.MAILFROM,
    to: process.env.MAILTO,
    subject: "Newsletter Subscribe",
    text: `You got a new newsletter subscriber\n${email}`,
  });
  console.log("Message sent: %s", info.messageId);
};

module.exports = { sendEmail };
