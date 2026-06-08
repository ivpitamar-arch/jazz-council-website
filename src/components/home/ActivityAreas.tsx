"use client";

import { motion } from "motion/react";
import SectionContainer from "@/components/ui/SectionContainer";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motionVariants";

const areas = [
  {
    id: "artists",
    title: "אמנים",
    description:
      "תמיכה, ייצוג וקידום לאמני ג'אז ישראלים — מוסיקאים, מלחינים ומבצעים.",
  },
  {
    id: "education",
    title: "חינוך",
    description:
      "פרויקטים ותכניות חינוכיות, מלגות לסטודנטים וסדנאות לכל הגילאים.",
  },
  {
    id: "institutions",
    title: "מוסדות",
    description:
      "שיתוף פעולה עם בתי ספר למוסיקה, אקדמיות ומרכזי תרבות בכל הארץ.",
  },
  {
    id: "festivals",
    title: "פסטיבלים",
    description:
      "קשרים, תמיכה ושיתוף פעולה עם פסטיבלי ג'אז ואירועי מוסיקה בישראל ובעולם.",
  },
];

export default function ActivityAreas() {
  return (
    <SectionContainer className="bg-primary" id="activity">
      <motion.div
        className="text-center mb-14"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="w-12 h-1 bg-accent mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          תחומי פעילות
        </h2>
        <p className="text-white/70 text-lg max-w-xl mx-auto">
          פועלים עם כלל הקהילה — מהאמן הבודד ועד הפסטיבל הבינלאומי
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {areas.map((area) => (
          <motion.div
            key={area.id}
            variants={staggerItem}
            className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 hover:border-accent/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group"
          >
            <div className="w-8 h-0.5 bg-accent mb-5" />
            <h3 className="text-white font-bold text-xl mb-3 group-hover:text-accent transition-colors">
              {area.title}
            </h3>
            <p className="text-white/65 text-sm leading-relaxed">
              {area.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
}
