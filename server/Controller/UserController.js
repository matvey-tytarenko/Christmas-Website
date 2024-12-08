const nodemailer = require("nodemailer");
require("dotenv").config();

// JSON READ
module.exports.GetMail = async (req, res) => {
  const { email, name } = req.body;

  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      // This is saved in .env file
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    const MailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Новогоднее поздравление",
      text: `${name} поздравляю тебя с новым годом, желаю тебе, что бы в новом году у тебя не было никаких проблем, и всё получалось! Люблю тебя!`,
    };

    transport.sendMail(MailOptions, (err) => {
      if (err) {
        console.error(`Mail Snet Error: ${err}`);
        return res.status(400).json({ msg: "Email Error!", status: false });
      } else {
        console.log(`Email sent!`);
        return res.status(200).json({ msg: "Congratulation was sent!", status: true });
      }
    });
  } catch (error) {
    console.log(`JSON Error: ${error}`);
  }
};
