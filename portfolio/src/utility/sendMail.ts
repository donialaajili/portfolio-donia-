import nodemailer from "nodemailer";

export type SendMailParams = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default async function sendMail({
  name,
  email,
  subject,
  message,
}: SendMailParams) {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false, // true si port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"Portfolio Form" <${process.env.SMTP_USER}>`, // ton compte Outlook
      replyTo: email, // permet de répondre directement au visiteur
      to: process.env.MAIL_RECEIVER,
      subject,
      text: message,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email envoyé :", info.messageId);

    return { status: 200, message: "Email envoyé avec succès !" };
  } catch (error: any) {
    console.error("❌ Erreur sendMail:", error);
    return {
      status: 500,
      message: error.message || "Erreur lors de l'envoi du mail",
    };
  }
}
