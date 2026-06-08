import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionContainer from "@/components/ui/SectionContainer";

export const metadata: Metadata = {
  title: "ידידי הג'אז | מועצת הג'אז הישראלי",
  description: "הצטרפו כידידי הג'אז בישראל ותרמו לקידום הג'אז בישראל.",
};

// TODO: replace with real donation URL
const DONATION_URL = "#";

export default function DonationsPage() {
  return (
    <>
      <PageHero
        title="ידידי המועצה"
        dark
        center
      />

      <SectionContainer className="bg-base">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-10 h-1 bg-accent mx-auto mb-10" />

          <p className="text-dark leading-relaxed text-lg mb-4">
            אנו מזמינים אתכם לקחת חלק פעיל בקידום הג&apos;אז בישראל.
          </p>
          <p className="text-dark leading-relaxed text-lg mb-4">
            גם אם אינכם מוזיקאים בעצמכם, האהבה שלכם לתרבות ולמוזיקה איכותית היא בדיוק מה שמניע את העשייה שלנו.
            אנו מציעים לכם אפשרות להצטרף כ&apos;ידידי הג&apos;אז בישראל&apos; ולתרום לפעילותנו.
            התרומה שלכם תאפשר לנו להמשיך לטפח כישרונות, ליצור חוויות מוזיקליות מיוחדות ולהנגיש את עולם הג&apos;אז לקהלים רחבים.
          </p>
          <p className="text-dark leading-relaxed text-lg mb-12">
            נשמח מאוד לשיתוף הפעולה שלכם.
          </p>

          <a
            href={DONATION_URL}
            className="inline-block px-8 py-3 bg-accent text-white font-semibold text-base hover:opacity-90 transition-opacity duration-200"
          >
            לתרומה לחצו כאן
          </a>
        </div>
      </SectionContainer>
    </>
  );
}
