"use client";

import { motion } from "motion/react";
import Button from "./Button";
import { fadeUp } from "@/lib/motionVariants";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  dark?: boolean;
  center?: boolean;
}

export default function PageHero({
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  dark = false,
  center = false,
}: PageHeroProps) {
  return (
    <div
      className={`relative overflow-hidden py-20 md:py-28 ${
        dark ? "bg-primary text-white" : "bg-surface"
      }`}
    >
      {dark && (
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="animate-float-slow absolute -top-24 -end-24 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
          <div className="animate-float absolute bottom-0 start-0 w-64 h-64 rounded-full bg-white/5 blur-2xl" />
        </div>
      )}

      <div className="relative max-w-6xl mx-auto px-6">
        <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
          <motion.div
            className={`w-12 h-1 bg-accent mb-6 ${center ? "mx-auto" : ""}`}
            variants={fadeUp}
            initial="hidden"
            animate="show"
          />
          <motion.h1
            className={`text-4xl md:text-5xl font-extrabold leading-tight mb-4 ${
              dark ? "text-white drop-shadow-lg" : "text-white"
            }`}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.1 }}
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              className={`text-lg md:text-xl leading-relaxed ${
                dark ? "text-white/80" : "text-muted"
              }`}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.2 }}
            >
              {subtitle}
            </motion.p>
          )}
          {(ctaPrimary || ctaSecondary) && (
            <motion.div
              className="flex flex-wrap gap-4 mt-8"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.28 }}
            >
              {ctaPrimary && (
                <Button
                  href={ctaPrimary.href}
                  variant={dark ? "ghost" : "primary"}
                  size="lg"
                >
                  {ctaPrimary.label}
                </Button>
              )}
              {ctaSecondary && (
                <Button
                  href={ctaSecondary.href}
                  variant="secondary"
                  size="lg"
                  className={dark ? "border-white text-white hover:bg-white hover:text-primary" : ""}
                >
                  {ctaSecondary.label}
                </Button>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
