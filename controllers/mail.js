const nodeMailer = require("nodemailer");

const html = `
    <h1>Nodemailer Testing</h1>
`;

async function main() {
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
    to: "lotocharles8@gmail.com",
    subject: "Contact Form",
    html: html,
  });

  console.log("Message sent: " + info.messageId);
}

main().catch((err) => console.log(err));
