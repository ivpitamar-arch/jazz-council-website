import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionContainer from "@/components/ui/SectionContainer";

export const metadata: Metadata = {
  title: "תשלום דמי חברות | מועצת הג'אז הישראלי",
  description: "עמוד תשלום דמי חברות במועצת הג'אז הישראלי.",
};

export default function MembershipPaymentPage() {
  return (
    <>
      <PageHero
        title="תשלום דמי חברות"
        subtitle="בקשתכם להצטרפות נקלטה בהצלחה"
        dark
        center
      />

      <SectionContainer className="bg-base" narrow>
        <div className="text-center">
          <div className="w-10 h-1 bg-accent mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-dark mb-4">
            עמוד התשלום בהקמה
          </h2>
          <p className="text-muted leading-relaxed">
            אנו משלימים כעת את חיבור עמוד התשלום המקוון. נציג מטעם המועצה
            ייצור עמכם קשר בהקדם להשלמת תהליך התשלום.
          </p>
        </div>
      </SectionContainer>
    </>
  );
}
