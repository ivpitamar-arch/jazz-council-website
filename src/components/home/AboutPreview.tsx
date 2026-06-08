"use client";

import { motion } from "motion/react";
import Button from "@/components/ui/Button";
import { fadeUp } from "@/lib/motionVariants";

export default function AboutPreview() {
  return (
    <section className="bg-base py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="w-10 h-1 bg-accent mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6 leading-tight">
              על מועצת הג&apos;אז הישראלי
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              המועצה הישראלית לג&apos;אז היא ארגון הגג הרשמי של תעשיית הג&apos;אז בישראל.
              הוקמה מתוך הבנה כי עולם הג&apos;אז — על רבדיו היצירתיים, החינוכיים
              והביצועיים — זקוק לבית מקצועי שישמיע את קולו מול מוסדות השלטון והציבור.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              המועצה מורכבת ממוזיקאים, יוצרים ומנהלים אמנותיים המאוחדים במטרה
              להבטיח את עתידו של הג&apos;אז הישראלי כענף תרבותי מוביל ומשגשג.
            </p>
            <Button href="/about" variant="primary">
              קראו עוד על הארגון
            </Button>
          </motion.div>

          {/* Decorative block */}
          <motion.div
            className="flex justify-center md:justify-start"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative group cursor-default">
              <div className="w-72 h-80 bg-surface border border-border transition-transform duration-500 group-hover:-translate-y-1" />
              <div className="absolute -bottom-4 -start-4 w-72 h-80 border-2 border-accent transition-transform duration-500 group-hover:translate-y-1" />
              {/* Quote overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="w-8 h-1 bg-accent mb-3" />
                <blockquote className="text-white/90 text-lg font-light leading-relaxed italic">
                  &quot;הגיע הזמן שההכרה וההערכה בחוץ לארץ ייתרגמו להכרה ותמיכה בבית.&quot;
                </blockquote>
                <p className="text-accent text-sm font-semibold mt-3">— עו&quot;ד יוחאי חי, יו&quot;ר המועצה</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
