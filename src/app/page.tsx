import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import ActivityAreas from "@/components/home/ActivityAreas";
import RecentArticles from "@/components/home/RecentArticles";
import CTASection from "@/components/ui/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ActivityAreas />
      <RecentArticles />
      <CTASection
        title="רוצים לפעול יחד?"
        subtitle="הצטרפו למועצת הג'אז הישראלי ותהיו חלק מהשינוי."
        ctaPrimary={{ label: "הצטרפות כחבר", href: "/membership" }}
        ctaSecondary={{ label: "צרו קשר", href: "/contact" }}
      />
    </>
  );
}
