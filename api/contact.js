import nodemailer from 'nodemailer';

const requiredFields = ['name', 'email', 'service', 'message'];

const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS,
  SMTP_FROM,
  CONTACT_NOTIFY_EMAIL,
  CONTACT_TO_EMAIL,
} = process.env;

const isSmtpConfigured = SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS && SMTP_FROM;

let transporter = null;

const getTransporter = () => {
  if (!isSmtpConfigured) {
    return null;
  }

  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });
  }

  return transporter;
};

const parseBody = (body) => {
  if (!body) {
    return {};
  }

  if (typeof body === 'string') {
    try {
      return JSON.parse(body);
    } catch {
      return {};
    }
  }

  return body;
};

const sanitize = (value) => String(value || '').trim();

const escapeHtml = (value) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

const buildEmailHtml = (submission) => `
  <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.6;">
    <h2 style="margin: 0 0 16px;">New Webiqq project request</h2>
    <p><strong>Name:</strong> ${escapeHtml(submission.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(submission.email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(submission.phone || 'Not provided')}</p>
    <p><strong>Business:</strong> ${escapeHtml(submission.business || 'Not provided')}</p>
    <p><strong>Service:</strong> ${escapeHtml(submission.service)}</p>
    <p><strong>Message:</strong></p>
    <p style="white-space: pre-wrap;">${escapeHtml(submission.message)}</p>
  </div>
`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = parseBody(req.body);

  if (body.website) {
    return res.status(200).json({ ok: true });
  }

  const submission = {
    name: sanitize(body.name),
    email: sanitize(body.email),
    phone: sanitize(body.phone),
    business: sanitize(body.business),
    service: sanitize(body.service),
    message: sanitize(body.message),
  };

  const missingField = requiredFields.find((field) => !submission[field]);

  if (missingField) {
    return res.status(400).json({ error: `Missing required field: ${missingField}` });
  }

  const mailer = getTransporter();

  if (!mailer) {
    return res.status(500).json({ error: 'Email service is not configured' });
  }

  const to = (CONTACT_NOTIFY_EMAIL || CONTACT_TO_EMAIL || 'contact@webiqq.com')
    .split(',')
    .map((email) => email.trim())
    .filter(Boolean);

  try {
    await mailer.sendMail({
      from: SMTP_FROM,
      to,
      replyTo: submission.email,
      subject: `New Webiqq request: ${submission.service}`,
      html: buildEmailHtml(submission),
      text: [
        'New Webiqq project request',
        `Name: ${submission.name}`,
        `Email: ${submission.email}`,
        `Phone: ${submission.phone || 'Not provided'}`,
        `Business: ${submission.business || 'Not provided'}`,
        `Service: ${submission.service}`,
        '',
        submission.message,
      ].join('\n'),
    });
  } catch (error) {
    console.error('Contact email error:', error);
    return res.status(502).json({ error: 'Unable to send email right now' });
  }

  return res.status(200).json({ ok: true });
}
