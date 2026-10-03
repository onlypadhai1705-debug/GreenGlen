'use client';

import { useState, useEffect, useCallback } from 'react';
import { X } from 'lucide-react';
import { purposeOptions, siteConfig } from '@/lib/content';
import type { BookingFormData } from '@/lib/types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EMPTY_FORM: BookingFormData = {
  name: '',
  phone: '',
  email: '',
  checkin: '',
  checkout: '',
  guests: '',
  purpose: '',
  message: '',
};

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [form, setForm] = useState<BookingFormData>(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleClose = useCallback(() => {
    onClose();
    // Delay reset so animation can finish
    setTimeout(() => {
      setSubmitted(false);
      setForm(EMPTY_FORM);
    }, 400);
  }, [onClose]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) handleClose();
    };
    document.addEventListener('keydown', handleKey);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleClose]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // If WhatsApp number is configured, compose a message and open WhatsApp
    if (siteConfig.whatsapp) {
      const lines = [
        `🌿 *Green Glen — Stay Enquiry*`,
        ``,
        `👤 Name: ${form.name}`,
        `📞 Phone: ${form.phone}`,
        form.email ? `📧 Email: ${form.email}` : null,
        ``,
        form.checkin  ? `📅 Check-in:  ${form.checkin}`  : null,
        form.checkout ? `📅 Check-out: ${form.checkout}` : null,
        form.guests   ? `👥 Guests: ${form.guests}`      : null,
        form.purpose  ? `🎯 Purpose: ${form.purpose}`    : null,
        ``,
        form.message  ? `💬 Message:\n${form.message}`   : null,
      ].filter(Boolean).join('\n');

      const url = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(lines)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    }

    // Simulate form submission (replace with real backend/email/form service)
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-heading"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6"
      onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
      style={{ backgroundColor: 'rgba(17,26,18,0.88)', backdropFilter: 'blur(6px)' }}
    >
      <div
        className="relative w-full sm:max-w-2xl max-h-[96vh] sm:max-h-[92vh] overflow-y-auto"
        style={{ backgroundColor: 'var(--color-gg-ivory)' }}
      >
        {/* Header */}
        <div
          className="sticky top-0 flex items-center justify-between px-5 sm:px-8 py-5 z-10"
          style={{
            backgroundColor: 'var(--color-gg-ivory)',
            borderBottom: '1px solid rgba(74,82,64,0.1)',
          }}
        >
          <div>
            <p className="text-label text-gg-terra">Green Glen</p>
            <h2
              id="booking-modal-heading"
              className="font-display mt-1"
              style={{
                fontSize: '1.625rem',
                fontWeight: 300,
                color: 'var(--color-gg-forest)',
              }}
            >
              Plan Your Stay
            </h2>
          </div>
          <button
            onClick={handleClose}
            aria-label="Close booking form"
            className="p-2 transition-opacity hover:opacity-60 focus-visible:outline-none"
            style={{ color: 'var(--color-gg-olive)' }}
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Body */}
        <div className="px-5 sm:px-8 py-6 sm:py-8">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center gap-5">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'var(--color-gg-forest)' }}
                aria-hidden="true"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10l4 4 8-8" stroke="var(--color-gg-ivory)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3
                className="font-display"
                style={{ fontSize: '1.5rem', fontWeight: 300, color: 'var(--color-gg-forest)' }}
              >
                Enquiry received.
              </h3>
              <p className="text-body" style={{ color: 'var(--color-gg-olive)', maxWidth: '320px' }}>
                Thank you, {form.name}. We&apos;ll be in touch soon about your stay at Green Glen.
              </p>
              <button
                onClick={handleClose}
                className="btn-outline-dark mt-4"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7">
                {/* Name */}
                <div className="sm:col-span-2">
                  <label htmlFor="booking-name" className="text-label text-gg-olive block mb-2">
                    Your Name *
                  </label>
                  <input
                    id="booking-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Full name"
                    className="form-input"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="booking-phone" className="text-label text-gg-olive block mb-2">
                    Phone *
                  </label>
                  <input
                    id="booking-phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 9XXXXXXXXX"
                    className="form-input"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="booking-email" className="text-label text-gg-olive block mb-2">
                    Email
                  </label>
                  <input
                    id="booking-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="form-input"
                  />
                </div>

                {/* Check-in */}
                <div>
                  <label htmlFor="booking-checkin" className="text-label text-gg-olive block mb-2">
                    Check-in
                  </label>
                  <input
                    id="booking-checkin"
                    name="checkin"
                    type="date"
                    value={form.checkin}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                {/* Check-out */}
                <div>
                  <label htmlFor="booking-checkout" className="text-label text-gg-olive block mb-2">
                    Check-out
                  </label>
                  <input
                    id="booking-checkout"
                    name="checkout"
                    type="date"
                    value={form.checkout}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                {/* Guests */}
                <div>
                  <label htmlFor="booking-guests" className="text-label text-gg-olive block mb-2">
                    Number of Guests
                  </label>
                  <input
                    id="booking-guests"
                    name="guests"
                    type="number"
                    min={1}
                    max={16}
                    value={form.guests}
                    onChange={handleChange}
                    placeholder="Up to 16"
                    className="form-input"
                  />
                </div>

                {/* Purpose */}
                <div className="sm:col-span-2">
                  <label htmlFor="booking-purpose" className="text-label text-gg-olive block mb-2">
                    Purpose of Stay
                  </label>
                  <div className="relative">
                    <select
                      id="booking-purpose"
                      name="purpose"
                      value={form.purpose}
                      onChange={handleChange}
                      className="form-select w-full"
                    >
                      <option value="">Select purpose</option>
                      {purposeOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                    <div
                      className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none"
                      aria-hidden="true"
                    >
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                        <path d="M1 1l5 5 5-5" stroke="var(--color-gg-sand)" strokeWidth="1.2" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="sm:col-span-2">
                  <label htmlFor="booking-message" className="text-label text-gg-olive block mb-2">
                    Tell us a little more
                  </label>
                  <textarea
                    id="booking-message"
                    name="message"
                    rows={3}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Any details about your group or requirements..."
                    className="form-input resize-none"
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button
                  type="submit"
                  disabled={submitting || !form.name || !form.phone}
                  className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  id="booking-submit"
                >
                  {submitting ? 'Sending…' : 'Send Enquiry'}
                </button>
                <p className="text-body-sm" style={{ color: 'var(--color-gg-sand)' }}>
                  We typically respond within 24 hours.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
