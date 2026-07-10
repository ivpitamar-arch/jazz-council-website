"use client";

import { motion } from "motion/react";
import Button from "@/components/ui/Button";
import { fadeUp } from "@/lib/motionVariants";

export default function AboutPreview() {
  return (
    <section className="bg-base py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="w-10 h-1 bg-accent mb-6 mx-auto" />
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

          <div className="w-8 h-1 bg-accent mx-auto mt-10 mb-4" />
          <blockquote className="text-muted text-sm italic leading-relaxed max-w-xl mx-auto">
            &quot;הג&apos;אז הישראלי הוא פסיפס תרבותי מרתק של שורשים מקומיים, תעוזה
            ומצוינות מוזיקלית, הזוכה להערכה עמוקה בארץ ובעולם. מועצת הג&apos;אז קמה
            כדי להעניק גב מקצועי, יציב ורחב ליוצרים בכל שלבי דרכם, ולפעול לפיתוח
            תשתיות שיבטיחו את שגשוגם. אנו מחויבים להנגיש את העשייה המופלאה הזו,
            לחבר את המוזיקאים לחזית העשייה הבינלאומית, ולהציב את הג&apos;אז במקומו
            הטבעי — במרכז התרבות הישראלית והעולמית.&quot;
          </blockquote>
          <p className="text-accent text-sm font-semibold mt-3">— עו&quot;ד יוחאי חי</p>
        </motion.div>
      </div>
    </section>
  );
}
