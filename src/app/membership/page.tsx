import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionContainer from "@/components/ui/SectionContainer";
import MembershipForm from "@/components/forms/MembershipForm";

export const metadata: Metadata = {
  title: "הצטרפות | מועצת הג'אז הישראלי",
  description: "הצטרפו למועצת הג'אז הישראלי — פתחו דלתות לקהילה, למשאבים ולהזדמנויות.",
};

const benefits = [
  {
    title: "שייכות לקהילה",
    desc: "הצטרפות לרשת רחבה של אמנים, מחנכים ומוסדות",
  },
  {
    title: "משאבים ייחודיים",
    desc: "גישה להזדמנויות מימון, מלגות וכלי עבודה מקצועיים",
  },
  {
    title: "נוכחות ונראות",
    desc: "קידום בפלטפורמות הדיגיטליות ובתקשורת",
  },
  {
    title: "ייצוג אמיתי",
    desc: "קול ממשי בהחלטות מדיניות תרבות ומוסיקה",
  },
  {
    title: "קשרים בינלאומיים",
    desc: "גישה לרשת פסטיבלים ושותפים מרחבי העולם",
  },
  {
    title: "אירועים בלעדיים",
    desc: "הזמנות לכינוסים, סדנאות ואירועים מקצועיים",
  },
];

export default function MembershipPage() {
  return (
    <>
      <PageHero
        title="הצטרפות כחבר"
        subtitle="הצטרפו לקהילה הגדלה של אמני הג'אז, מחנכים ומוסדות הפועלים יחד לקידום הסצנה"
        dark
      />

      {/* Benefits */}
      <SectionContainer className="bg-base">
        <div className="text-center mb-12">
          <div className="w-10 h-1 bg-accent mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-dark mb-4">
            יתרונות החברות
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            החברות במועצה פותחת אפשרויות שלא תמצאו במקום אחר
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="bg-surface border border-border p-6 hover:border-accent/60 transition-colors"
            >
              <div className="w-6 h-0.5 bg-accent mb-4" />
              <h3 className="text-dark font-bold mb-1">{b.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Membership request form */}
      <SectionContainer className="bg-base">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <div className="w-10 h-1 bg-accent mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-dark mb-4">
              טופס בקשה לחברות בעמותה
            </h2>
          </div>
          <MembershipForm />
        </div>
      </SectionContainer>

    </>
  );
}
