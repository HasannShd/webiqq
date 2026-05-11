const requiredFields = ['name', 'email', 'service', 'message'];

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
    <h2 style="margin: 0 0 16px;">New Webiq project request</h2>
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

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ error: 'Email service is not configured' });
  }

  const to = (process.env.CONTACT_TO_EMAIL || 'webbiqq@gmail.com')
    .split(',')
    .map((email) => email.trim())
    .filter(Boolean);

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || 'Webiq Website <onboarding@resend.dev>',
        to,
        reply_to: submission.email,
        subject: `New Webiq request: ${submission.service}`,
        html: buildEmailHtml(submission),
        text: [
          'New Webiq project request',
          `Name: ${submission.name}`,
          `Email: ${submission.email}`,
          `Phone: ${submission.phone || 'Not provided'}`,
          `Business: ${submission.business || 'Not provided'}`,
          `Service: ${submission.service}`,
          '',
          submission.message,
        ].join('\n'),
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error('Resend email error:', errorBody);
      return res.status(502).json({ error: 'Unable to send email right now' });
    }
  } catch (error) {
    console.error('Contact email error:', error);
    return res.status(502).json({ error: 'Unable to send email right now' });
  }

  return res.status(200).json({ ok: true });
}
