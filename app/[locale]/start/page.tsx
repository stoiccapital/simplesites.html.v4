'use client';

import React, { useState, FormEvent } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Navbar } from '../../../lp-system/components/Navbar';
import { Footer } from '../../../lp-system/components/Footer';
import { CenteredLayout } from '../../../lp-system/components/layouts/CenteredLayout';
import { getMessages } from '../../../lp-system/locales';
import { spacing, typography, components, colors, globalBackground, ColorTheme } from '../../../lp-system/config/design-system';
import { DEFAULT_THEME } from '../../../lp-system/config/preferences';

const FORMSPREE_URL = 'https://formspree.io/f/xbdlnell';

export default function StartPage() {
  const router = useRouter();
  const params = useParams();
  const locale = (params?.locale as 'en' | 'de') || 'en';
  const messages = getMessages(locale);
  const theme: ColorTheme = DEFAULT_THEME;

  const [formData, setFormData] = useState({
    company: '',
    email: '',
    website: '',
    lp_type: '',
    languages: '',
    timeline: '7 days (standard)',
    notes: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Basic validation
    if (!formData.company || !formData.email || !formData.lp_type || !formData.languages) {
      setError('Please fill in all required fields.');
      setIsSubmitting(false);
      return;
    }

    try {
      const formPayload = new FormData();
      formPayload.append('company', formData.company);
      formPayload.append('email', formData.email);
      if (formData.website) {
        formPayload.append('website', formData.website);
      }
      formPayload.append('lp_type', formData.lp_type);
      formPayload.append('languages', formData.languages);
      formPayload.append('timeline', formData.timeline);
      if (formData.notes) {
        formPayload.append('notes', formData.notes);
      }
      if (formData.phone) {
        formPayload.append('phone', formData.phone);
      }

      // Get current domain for redirect
      const currentDomain = typeof window !== 'undefined' ? window.location.origin : '';
      const redirectUrl = `${currentDomain}/${locale}/thanks`;
      formPayload.append('_redirect', redirectUrl);

      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: formPayload,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        router.push(`/${locale}/thanks`);
      } else {
        const data = await response.json();
        setError(data.error || 'Something went wrong. Please try again.');
        setIsSubmitting(false);
      }
    } catch {
      setError('Network error. Please check your connection and try again.');
      setIsSubmitting(false);
    }
  };

  const copy = {
    heading: locale === 'en' ? 'Project intake' : 'Projektaufnahme',
    subtext: locale === 'en' 
      ? "Tell us a bit about your landing page. We'll reply within 24 hours."
      : 'Erzählen Sie uns etwas über Ihre Landingpage. Wir antworten innerhalb von 24 Stunden.',
    fields: {
      company: locale === 'en' ? 'Company / Agency' : 'Unternehmen / Agentur',
      email: locale === 'en' ? 'Contact email' : 'Kontakt-E-Mail',
      website: locale === 'en' ? 'Website' : 'Website',
      lp_type: locale === 'en' ? 'Landing page type' : 'Landingpage-Typ',
      languages: locale === 'en' ? 'Language(s)' : 'Sprache(n)',
      timeline: locale === 'en' ? 'Timeline' : 'Zeitplan',
      notes: locale === 'en' ? 'Notes (optional)' : 'Hinweise (optional)',
      phone: locale === 'en' ? 'Phone (optional)' : 'Telefon (optional)',
    },
    options: {
      lp_type: locale === 'en' 
        ? ['Lead generation', 'Product', 'Service']
        : ['Lead-Generierung', 'Produkt', 'Service'],
      languages: locale === 'en'
        ? ['German', 'English', 'German + English']
        : ['Deutsch', 'Englisch', 'Deutsch + Englisch'],
      timeline: locale === 'en'
        ? ['7 days (standard)', 'Flexible']
        : ['7 Tage (Standard)', 'Flexibel'],
    },
    submit: locale === 'en' ? 'Submit' : 'Absenden',
    required: locale === 'en' ? 'Required' : 'Erforderlich',
  };

  return (
    <div className={`min-h-screen ${globalBackground.neutral.darkest}`}>
      <Navbar theme={theme} labels={messages.navbar} locale={locale} />
      <main className={spacing.section.y['2xl']}>
        <CenteredLayout align="left">
          <div className={`max-w-2xl mx-auto ${spacing.block.y.lg}`}>
            <h1 className={`${typography.h1} text-text-primary ${spacing.block.y.md}`}>
              {copy.heading}
            </h1>
            <p className={`${typography.body} text-text-secondary ${spacing.block.y.lg}`}>
              {copy.subtext}
            </p>

            <form onSubmit={handleSubmit} className={`${components.card.base} ${colors.light.card.bg} ${colors.light.card.border} ${components.shadow.surface2} ${spacing.card.padding.lg}`}>
              {/* Honeypot */}
              <input
                type="text"
                name="_gotcha"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Company */}
              <div className={spacing.block.y.md}>
                <label htmlFor="company" className={`${typography.label} text-text-primary block ${spacing.element.y.xs}`}>
                  {copy.fields.company} <span className="text-text-muted">({copy.required})</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className={`w-full ${spacing.card.px} py-3 ${components.surface.radius} border ${colors.light.card.border} ${colors.light.card.bg} text-text-primary focus:outline-none focus:ring-2 focus:ring-ring-focus focus:ring-offset-2 focus:ring-offset-ring-focus ${components.transition.default}`}
                />
              </div>

              {/* Contact email */}
              <div className={spacing.block.y.md}>
                <label htmlFor="email" className={`${typography.label} text-text-primary block ${spacing.element.y.xs}`}>
                  {copy.fields.email} <span className="text-text-muted">({copy.required})</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder={locale === 'en' ? 'name@company.com' : 'name@unternehmen.com'}
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full ${spacing.card.px} py-3 ${components.surface.radius} border ${colors.light.card.border} ${colors.light.card.bg} text-text-primary focus:outline-none focus:ring-2 focus:ring-ring-focus focus:ring-offset-2 focus:ring-offset-ring-focus ${components.transition.default}`}
                />
              </div>

              {/* Website */}
              <div className={spacing.block.y.md}>
                <label htmlFor="website" className={`${typography.label} text-text-primary block ${spacing.element.y.xs}`}>
                  {copy.fields.website}
                </label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className={`w-full ${spacing.card.px} py-3 ${components.surface.radius} border ${colors.light.card.border} ${colors.light.card.bg} text-text-primary focus:outline-none focus:ring-2 focus:ring-ring-focus focus:ring-offset-2 focus:ring-offset-ring-focus ${components.transition.default}`}
                />
              </div>

              {/* Landing page type */}
              <div className={spacing.block.y.md}>
                <label htmlFor="lp_type" className={`${typography.label} text-text-primary block ${spacing.element.y.xs}`}>
                  {copy.fields.lp_type} <span className="text-text-muted">({copy.required})</span>
                </label>
                <select
                  id="lp_type"
                  name="lp_type"
                  required
                  value={formData.lp_type}
                  onChange={handleChange}
                  className={`w-full ${spacing.card.px} py-3 ${components.surface.radius} border ${colors.light.card.border} ${colors.light.card.bg} text-text-primary focus:outline-none focus:ring-2 focus:ring-ring-focus focus:ring-offset-2 focus:ring-offset-ring-focus ${components.transition.default} cursor-pointer`}
                >
                  <option value="">--</option>
                  {copy.options.lp_type.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Languages */}
              <div className={spacing.block.y.md}>
                <label htmlFor="languages" className={`${typography.label} text-text-primary block ${spacing.element.y.xs}`}>
                  {copy.fields.languages} <span className="text-text-muted">({copy.required})</span>
                </label>
                <select
                  id="languages"
                  name="languages"
                  required
                  value={formData.languages}
                  onChange={handleChange}
                  className={`w-full ${spacing.card.px} py-3 ${components.surface.radius} border ${colors.light.card.border} ${colors.light.card.bg} text-text-primary focus:outline-none focus:ring-2 focus:ring-ring-focus focus:ring-offset-2 focus:ring-offset-ring-focus ${components.transition.default} cursor-pointer`}
                >
                  <option value="">--</option>
                  {copy.options.languages.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Timeline */}
              <div className={spacing.block.y.md}>
                <label htmlFor="timeline" className={`${typography.label} text-text-primary block ${spacing.element.y.xs}`}>
                  {copy.fields.timeline}
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className={`w-full ${spacing.card.px} py-3 ${components.surface.radius} border ${colors.light.card.border} ${colors.light.card.bg} text-text-primary focus:outline-none focus:ring-2 focus:ring-ring-focus focus:ring-offset-2 focus:ring-offset-ring-focus ${components.transition.default} cursor-pointer`}
                >
                  {copy.options.timeline.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Notes */}
              <div className={spacing.block.y.md}>
                <label htmlFor="notes" className={`${typography.label} text-text-primary block ${spacing.element.y.xs}`}>
                  {copy.fields.notes}
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  value={formData.notes}
                  onChange={handleChange}
                  className={`w-full ${spacing.card.px} py-3 ${components.surface.radius} border ${colors.light.card.border} ${colors.light.card.bg} text-text-primary focus:outline-none focus:ring-2 focus:ring-ring-focus focus:ring-offset-2 focus:ring-offset-ring-focus ${components.transition.default} resize-y`}
                />
              </div>

              {/* Phone */}
              <div className={spacing.block.y.md}>
                <label htmlFor="phone" className={`${typography.label} text-text-primary block ${spacing.element.y.xs}`}>
                  {copy.fields.phone}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder={locale === 'en' ? '+49 170 1234567' : '+49 170 1234567'}
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full ${spacing.card.px} py-3 ${components.surface.radius} border ${colors.light.card.border} ${colors.light.card.bg} text-text-primary focus:outline-none focus:ring-2 focus:ring-ring-focus focus:ring-offset-2 focus:ring-offset-ring-focus ${components.transition.default}`}
                />
              </div>

              {/* Error message */}
              {error && (
                <div className={`${spacing.block.y.md} ${typography.body} text-red-600`}>
                  {error}
                </div>
              )}

              {/* Submit button */}
              <div className={spacing.block.y.md}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`${components.button.primary.base} ${colors.light.primary.bg} ${colors.light.primary.text} ${colors.light.primary.hover} ${colors.light.primary.active} cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {isSubmitting ? (locale === 'en' ? 'Submitting...' : 'Wird übermittelt...') : copy.submit}
                </button>
              </div>
            </form>
          </div>
        </CenteredLayout>
      </main>
      <Footer theme={theme} labels={messages.footer} />
    </div>
  );
}

