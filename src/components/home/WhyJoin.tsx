"use client";

import { motion } from "motion/react";
import SectionContainer from "@/components/ui/SectionContainer";
import Button from "@/components/ui/Button";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motionVariants";

const benefits = [
  {
    id: "community",
    title: "קהילה מקצועית",
    description:
      "גישה לרשת הקהילתית של אמנים, מחנכים ומוסדות. חברות פותחת דלתות לשיתופי פעולה ואפשרויות חדשות.",
  },
  {
    id: "resources",
    title: "משאבים ותמיכה",
    description:
      "גישה להזדמנויות מימון, מלגות, כלי עבודה מקצועיים ויעוץ לאמנים ולמוסדות.",
  },
  {
    id: "visibility",
    title: "חשיפה ונראות",
    description:
      "נוכחות בספריית האמנים, קידום בפלטפורמות הדיגיטליות שלנו ובתקשורת.",
  },
  {
    id: "advocacy",
    title: "ייצוג ואדבוקייס",
    description:
      "קול משמעותי בהחלטות מדיניות תרבות. אנחנו מייצגים את האינטרסים של כלל הקהילה.",
  },
  {
    id: "events",
    title: "אירועים ועדכונים",
    description:
      "הזמנות מוקדמות לאירועים, כינוסים מקצועיים ועדכונים על הזדמנויות בסצנה.",
  },
  {
    id: "international",
    title: "קשרים בינלאומיים",
    description:
      "גישה לרשת בינלאומית של פסטיבלים, ארגונים ושגרירויות. עזרה בהגעה לבמות בינלאומיות.",
  },
];

export default function WhyJoin() {
  return (
    <SectionContainer className="bg-base" id="why-join">
      <motion.div
        className="text-center mb-14"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="w-12 h-1 bg-accent mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          למה להצטרף?
        </h2>
        <p className="text-muted text-lg max-w-xl mx-auto">
          החברות במועצה פותחת אפשרויות חדשות לכל מי שאוהב ועוסק בג&apos;אז
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {benefits.map((benefit) => (
          <motion.div
            key={benefit.id}
            variants={staggerItem}
            className="bg-white border border-border p-8 hover:border-accent/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="w-6 h-0.5 bg-accent mb-4" />
            <h3 className="text-primary font-bold text-lg mb-3 group-hover:text-accent transition-colors">
              {benefit.title}
            </h3>
            <p className="text-muted text-sm leading-relaxed">
              {benefit.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <div className="text-center">
        <Button href="/membership" variant="primary" size="lg">
          הצטרפו עכשיו
        </Button>
      </div>
    </SectionContainer>
  );
}
