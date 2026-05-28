import './Contact.css';
import { useState } from 'react';

// Dev: Vite proxy (/api/appsheet → api.appsheet.com/api/v2)
// Prod: Vercel serverless function (/api/submit)
const IS_DEV = import.meta.env.DEV;
const APP_ID = import.meta.env.VITE_APPSHEET_APP_ID;
const ACCESS_KEY = import.meta.env.VITE_APPSHEET_ACCESS_KEY;
const TABLE_NAME = import.meta.env.VITE_APPSHEET_TABLE_NAME;

const API_URL = IS_DEV
  ? `/api/appsheet/apps/${APP_ID}/tables/${encodeURIComponent(TABLE_NAME)}/Action`
  : '/api/submit';

const HEADERS = {
  'Content-Type': 'application/json',
  ...(IS_DEV && { 'ApplicationAccessKey': ACCESS_KEY }),
};

export default function Contact() {
  const [form, setForm] = useState({ Name: '', Email: '', phone: '', Remarks: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error | duplicate

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      // Step 1: Check if email already exists (Find action)
      const findRes = await fetch(API_URL, {
        method: 'POST',
        headers: HEADERS,
        body: JSON.stringify({
          Action: 'Find',
          Properties: { Locale: 'en-US' },
          Rows: [],
        }),
      });

      const existingRows = await findRes.json().catch(() => []);
      const isDuplicate = Array.isArray(existingRows) &&
        existingRows.some(
          (row) => row.Email?.toLowerCase().trim() === form.Email.toLowerCase().trim()
        );

      if (isDuplicate) {
        setStatus('duplicate');
        return;
      }

      // Step 2: No duplicate — add new row
      const addRes = await fetch(API_URL, {
        method: 'POST',
        headers: HEADERS,
        body: JSON.stringify({
          Action: 'Add',
          Properties: { Locale: 'en-US' },
          Rows: [
            {
              'Date': new Date().toLocaleString('en-US'),
              Name: form.Name,
              Email: form.Email,
              phone: form.phone,
              Remarks: form.Remarks,
            },
          ],
        }),
      });

      const addData = await addRes.json().catch(() => ({}));

      if (addRes.ok) {
        setStatus('success');
        setForm({ Name: '', Email: '', phone: '', Remarks: '' });
      } else {
        console.error('AppSheet API Error:', addRes.status, addData);
        setStatus('error');
      }
    } catch (err) {
      console.error('Network/Submit error:', err);
      setStatus('error');
    }
  };


  return (
    <main className="contact-page">
      <div className="contact-page__inner">

        {/* LEFT: Info */}
        <div className="contact-page__left">
          <span className="pill-outline">Get In Touch</span>
          <h1 className="contact-page__heading display">
            LET'S WORK<br />
            <span>TOGETHER</span>
          </h1>
          <p className="contact-page__sub">
            Have a project in mind? We'd love to hear about it. Fill in your details and we'll get back to you shortly.
          </p>
          <div className="contact-page__info">
            <div className="contact-page__info-item">
              <span className="contact-page__info-label">Email</span>
              <span className="contact-page__info-val">hello@lumaxis.io</span>
            </div>
            <div className="contact-page__info-item">
              <span className="contact-page__info-label">Location</span>
              <span className="contact-page__info-val">Global — Remote First</span>
            </div>
            <div className="contact-page__info-item">
              <span className="contact-page__info-label">Response Time</span>
              <span className="contact-page__info-val">Within 24 hours</span>
            </div>
          </div>

          {/* Decorative tag */}
          <div className="contact-page__badge">
            <span className="contact-page__badge-dot" />
            Currently accepting new projects
          </div>
        </div>

        {/* RIGHT: Form */}
        <div className="contact-page__right">
          <form className="contact-page__form" onSubmit={handleSubmit}>

            <div className="contact-page__row">
              <div className="contact-page__field">
                <label htmlFor="Name">Full Name <span className="req">*</span></label>
                <input
                  id="Name"
                  name="Name"
                  type="text"
                  placeholder="John Doe"
                  value={form.Name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact-page__field">
                <label htmlFor="Email">Email Address <span className="req">*</span></label>
                <input
                  id="Email"
                  name="Email"
                  type="email"
                  placeholder="john@example.com"
                  value={form.Email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="contact-page__field">
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+91 98765 43210"
                value={form.phone}
                onChange={handleChange}
              />
            </div>

            <div className="contact-page__field">
              <label htmlFor="Remarks">Message / Remarks <span className="req">*</span></label>
              <textarea
                id="Remarks"
                name="Remarks"
                rows={5}
                placeholder="Tell us about your project, timeline, budget..."
                value={form.Remarks}
                onChange={handleChange}
                required
              />
            </div>

            {/* Status Messages */}
            {status === 'success' && (
              <div className="contact-page__alert contact-page__alert--success">
                ✓ &nbsp; Message sent! We'll get back to you within 24 hours.
              </div>
            )}
            {status === 'duplicate' && (
              <div className="contact-page__alert contact-page__alert--duplicate">
                ⚠ &nbsp; <strong>{form.Email}</strong> is already registered with us. We'll get in touch with you soon!
              </div>
            )}
            {status === 'error' && (
              <div className="contact-page__alert contact-page__alert--error">
                ✕ &nbsp; Something went wrong. Please try again.
              </div>
            )}

            <button
              className={`contact-page__submit ${status === 'loading' ? 'contact-page__submit--loading' : ''}`}
              type="submit"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? (
                <>
                  <span className="contact-page__spinner" /> Sending...
                </>
              ) : (
                <>
                  Send Message <span className="contact-page__arrow">→</span>
                </>
              )}
            </button>

          </form>
        </div>
      </div>
    </main>
  );
}
