"use client";

import { motion } from "motion/react";
import Button from "./Button";
import { fadeUp } from "@/lib/motionVariants";

interface CTASectionProps {
  title: string;
  subtitle?: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
}

export default function CTASection({
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-accent py-20">
      {/* Floating blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="animate-float absolute -top-16 -start-16 w-72 h-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="animate-float-slow absolute -bottom-16 -end-16 w-64 h-64 rounded-full bg-white/5 blur-2xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          className="flex flex-col items-center text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="w-12 h-1 bg-white/40 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-white/75 max-w-xl mb-10">
              {subtitle}
            </p>
          )}
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              href={ctaPrimary.href}
              variant="ghost"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-accent"
            >
              {ctaPrimary.label}
            </Button>
            {ctaSecondary && (
              <Button
                href={ctaSecondary.href}
                variant="secondary"
                size="lg"
                className="border-white/60 text-white/80 hover:border-white hover:text-white"
              >
                {ctaSecondary.label}
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
