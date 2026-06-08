"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Button from "@/components/ui/Button";
import { fadeUp } from "@/lib/motionVariants";

export default function HeroSection() {
  return (
    <section className="relative min-h-[75vh] flex items-end overflow-hidden text-white">
      {/* Background photo */}
      <div className="absolute inset-0">
        <Image
          src="/articles/jazz-club.jpg"
          alt=""
          fill
          className="object-cover opacity-55"
          priority
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

      {/* Logo — right side */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/Logo.png"
        alt="מועצת הג'אז הישראלי"
        className="absolute -right-16 top-2 h-72 w-auto hidden md:block"
      />

      <div className="relative w-full max-w-6xl mx-auto px-6 pb-24 md:pb-40 text-center">
        <motion.div
          className="w-16 h-1 bg-accent mx-auto mb-8"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0 }}
        />

        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.1 }}
        >
          מועצת הג&apos;אז הישראלי
        </motion.h1>

        <motion.p
          className="text-2xl md:text-3xl text-white font-light mb-4 leading-relaxed max-w-2xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.2 }}
        >
          ארגון גג לקהילת הג&apos;אז בישראל
        </motion.p>

        <motion.p
          className="text-lg md:text-xl text-white/90 leading-relaxed mb-10 max-w-xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.28 }}
        >
          מקדמים את אמנות הג&apos;אז בישראל, מחזקים את הקהילה, ומחברים בין אמנים,
          מחנכים, מוסדות ופסטיבלים לטובת פריחת הסצנה.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.36 }}
        >
          <Button href="/membership" variant="primary" size="lg">
            הצטרפות כחבר
          </Button>
          <Button
            href="/contact"
            variant="secondary"
            size="lg"
            className="border-white/50 text-white hover:bg-white/10 hover:border-white"
          >
            צרו קשר
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
