import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({

  host: "smtp.gmail.com",
  port: 587,
  secure: false,

  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS
  },

  tls: {
    rejectUnauthorized: false
  },

  connectionTimeout: 20000,
  greetingTimeout: 20000,
  socketTimeout: 20000

});

export default transporter;