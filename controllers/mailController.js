const nodeMailer = require("nodemailer");

const sendMail = async (req, res) => {
  const { email, message } = req.body;

  if (!email) {
    return res.status(400).json({ error: "No recipient email provided" });
  } else if (!message) {
    return res.status(400).json({ error: "No message provided" });
  }

  const html = `
  <h1>Hi CEO</h1>
  <br/>
    <p>A new Message has been recieved from your contact form</p>
    <br/>
    <div style="line-height: 2;">
      ${message}
    </div>
`;

  const transporter = nodeMailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: {
      user: "admin@cyberpastnft.com",
      pass: "Ad54k0hn@.a",
    },
  });

  const info = await transporter.sendMail({
    from: "CyberpastNFT Support <admin@cyberpastnft.com>",
    to: `${email}`,
    subject: "Contact Form",
    html: html,
  });

  console.log("Message sent: " + info.messageId);

  return res.json({ success: "message sent successfully" });
};

const subscribeMail = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "No recipient email provided" });
  }

  const html = `
  <h1>Hi CEO, you have a new subscriber</h1>
  <br/>
  <pSubcriber address: ${email}></p>
  `;

  const transporter = nodeMailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: {
      user: "admin@cyberpastnft.com",
      pass: "Ad54k0hn@.a",
    },
  });

  const info = await transporter.sendMail({
    from: "CyberpastNFT Support <admin@cyberpastnft.com>",
    to: "subscribe@cyberpastnft.com",
    subject: "New Subscriber",
    html: html,
  });

  console.log("Message sent: " + info.messageId);

  return res.json({ success: "message sent successfully" });
};

module.exports = {
  sendMail,
  subscribeMail,
};
