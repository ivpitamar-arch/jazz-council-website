"use client";

import { useState } from "react";
import PageHero from "@/components/ui/PageHero";
import SectionContainer from "@/components/ui/SectionContainer";
import Button from "@/components/ui/Button";

const contactItems = [
  {
    label: "דוא\"ל",
    value: "info@jazzcouncil.org.il",
    href: "mailto:info@jazzcouncil.org.il",
  },
  {
    label: "טלפון",
    value: "052-258-0547",
    href: "tel:0522580547",
  },
  {
    label: "כתובת",
    value: "תל אביב, ישראל" /* TODO: update with real address */,
    href: undefined,
  },
];

const inputClass = "w-full border border-border bg-surface text-dark px-4 py-3 placeholder:text-muted/60 focus:outline-none focus:border-accent transition-colors";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    console.log("Contact form submission:", form);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <>
      <PageHero
        title="צרו קשר"
        dark
      />

      <SectionContainer className="bg-base">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact info */}
          <div>
            <div className="w-10 h-1 bg-accent mb-6" />
            <h2 className="text-2xl font-bold text-dark mb-8">
              פרטי התקשרות
            </h2>

            <div className="space-y-6 mb-10">
              {contactItems.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <span className="w-2 h-2 bg-accent flex-shrink-0 mt-2" />
                  <div>
                    <p className="text-muted text-sm mb-1">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-dark font-semibold hover:text-accent transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-dark font-semibold">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="bg-surface border border-border h-48 flex items-center justify-center">
              <p className="text-sm text-muted">
                מפה תוצג כאן
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div>
            <div className="w-10 h-1 bg-accent mb-6" />
            <h2 className="text-2xl font-bold text-dark mb-8">שלחו הודעה</h2>

            {submitted ? (
              <div className="bg-accent/10 border border-accent p-8 text-center">
                <div className="w-10 h-10 rounded-full border-2 border-dark flex items-center justify-center mx-auto mb-4">
                  <svg viewBox="0 0 16 16" fill="none" className="w-5 h-5 text-dark" stroke="currentColor" strokeWidth="2">
                    <polyline points="3,8 6.5,11.5 13,4" />
                  </svg>
                </div>
                <h3 className="text-dark font-bold text-xl mb-2">ההודעה נשלחה!</h3>
                <p className="text-muted">נחזור אליכם בהקדם.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-dark mb-2">
                      שם מלא <span className="text-accent">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="שם מלא"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-dark mb-2">
                      אימייל <span className="text-accent">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="your@email.com"
                      dir="ltr"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-dark mb-2">
                    נושא
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="נושא ההודעה"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-dark mb-2">
                    הודעה <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                    placeholder="כתבו את הודעתכם כאן..."
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" disabled={loading}>
                  {loading ? "שולח..." : "שלח הודעה"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
