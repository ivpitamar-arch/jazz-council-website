"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import type { DonationTier } from "@/lib/types";

interface DonationFormProps {
  defaultTier?: string;
  tiers: DonationTier[];
}

export default function DonationForm({ defaultTier, tiers }: DonationFormProps) {
  const [selectedTier, setSelectedTier] = useState(defaultTier ?? tiers[0]?.id);
  const [customAmount, setCustomAmount] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    // TODO: connect to payment provider (Cardcom / Stripe / Meshulam)
    // Example: await fetch('/api/donate', { method: 'POST', body: JSON.stringify({ tier: selectedTier, amount: customAmount, email }) })
    console.log("Donation form submission:", { selectedTier, customAmount, email });

    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-accent/10 border border-accent p-8 text-center">
        <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center mx-auto mb-4">
          <svg viewBox="0 0 16 16" fill="none" className="w-5 h-5 text-primary" stroke="currentColor" strokeWidth="2">
            <polyline points="3,8 6.5,11.5 13,4" />
          </svg>
        </div>
        <h3 className="text-primary font-bold text-xl mb-2">תודה על תמיכתכם!</h3>
        <p className="text-muted">
          תרומתכם תסייע לנו להמשיך לקדם את הג&apos;אז הישראלי. ניצור אתכם קשר בקרוב.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Tier selection */}
      <div>
        <p className="text-sm font-semibold text-primary mb-3">בחרו אפשרות תמיכה</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {tiers.map((tier) => (
            <button
              key={tier.id}
              type="button"
              onClick={() => setSelectedTier(tier.id)}
              className={`p-4 text-start border-2 transition-all duration-150 ${
                selectedTier === tier.id
                  ? "border-primary bg-primary text-white"
                  : "border-border bg-white text-dark hover:border-primary/40"
              }`}
            >
              <div className="font-bold text-sm mb-1">{tier.label}</div>
              <div
                className={`text-xs ${
                  selectedTier === tier.id ? "text-white/70" : "text-muted"
                }`}
              >
                {tier.amount}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Custom amount */}
      <div>
        <label
          htmlFor="customAmount"
          className="block text-sm font-semibold text-primary mb-2"
        >
          סכום (₪)
        </label>
        <input
          id="customAmount"
          type="number"
          min="10"
          value={customAmount}
          onChange={(e) => setCustomAmount(e.target.value)}
          className="w-full border border-border bg-white px-4 py-3 text-dark placeholder:text-muted/60 focus:outline-none focus:border-primary transition-colors"
          placeholder="הכניסו סכום..."
          dir="ltr"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="donorEmail"
          className="block text-sm font-semibold text-primary mb-2"
        >
          כתובת אימייל <span className="text-accent">*</span>
        </label>
        <input
          id="donorEmail"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-border bg-white px-4 py-3 text-dark placeholder:text-muted/60 focus:outline-none focus:border-primary transition-colors"
          placeholder="your@email.com"
          dir="ltr"
        />
      </div>

      <p className="text-xs text-muted">
        {/* TODO: update with real payment provider info and legal notices */}
        לאחר לחיצה על &quot;המשך לתשלום&quot; תועברו לדף תשלום מאובטח. קבלה תישלח לאימייל שלכם.
      </p>

      <Button type="submit" variant="primary" size="lg" disabled={loading}>
        {loading ? "מעבד..." : "המשך לתשלום"}
      </Button>
    </form>
  );
}
