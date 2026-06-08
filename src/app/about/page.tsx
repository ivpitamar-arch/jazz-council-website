import type { Metadata } from "next";
import Image from "next/image";
import SectionContainer from "@/components/ui/SectionContainer";
import CTASection from "@/components/ui/CTASection";
import { team } from "@/data/team";
import { aboutContent as c } from "@/data/about";

export const metadata: Metadata = {
  title: "אודות | מועצת הג'אז הישראלי",
  description: "הכירו את המועצה הישראלית לג'אז — החזון, המשימה, ומי אנחנו.",
};

export default function AboutPage() {
  return (
    <>
      {/* Who we are */}
      <SectionContainer className="bg-base">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-dark mb-8">{c.title}</h1>
          {c.intro.map((p, i) => (
            <p key={i} className={`text-muted text-lg leading-relaxed ${i < c.intro.length - 1 ? "mb-4" : ""}`}>
              {p}
            </p>
          ))}
        </div>
      </SectionContainer>

      {/* Team */}
      <SectionContainer className="bg-surface">
        <div className="text-center mb-14">
          <div className="w-12 h-1 bg-accent mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">{c.teamTitle}</h2>
          <p className="text-muted text-lg max-w-xl mx-auto">{c.teamSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-primary border border-border p-8 text-center hover:border-accent/60 hover:shadow-md transition-all"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-5 border-2 border-border">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <div className="w-full h-full bg-border flex items-center justify-center">
                    <span className="text-dark/40 text-2xl font-bold">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
              <h3 className="text-dark font-bold text-base mb-1">{member.name}</h3>
              <p className="text-accent text-sm font-semibold mb-3">{member.role}</p>
              {member.bio && (
                <p className="text-muted text-xs leading-relaxed">{member.bio}</p>
              )}
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Vision */}
      <SectionContainer className="bg-primary">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-10 h-1 bg-accent mb-6" />
          <h2 className="text-3xl font-bold text-white mb-6">{c.visionTitle}</h2>
          {c.vision.map((p, i) => (
            <p key={i} className={`text-white/80 text-lg leading-relaxed ${i < c.vision.length - 1 ? "mb-4" : ""}`}>
              {p}
            </p>
          ))}
        </div>
      </SectionContainer>

      {/* Audience */}
      <SectionContainer className="bg-base">
        <div className="text-center mb-10">
          <div className="w-10 h-1 bg-accent mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-dark">{c.audienceTitle}</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {c.audience.map((label) => (
            <div
              key={label}
              className="bg-surface border border-border p-6 text-center hover:border-accent/60 transition-colors"
            >
              <p className="text-dark font-semibold text-sm">{label}</p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Goals */}
      <SectionContainer className="bg-surface">
        <div className="flex justify-center">
          <div className="w-full max-w-2xl text-center">
            <div className="w-10 h-1 bg-accent mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-dark mb-8">{c.goalsTitle}</h2>
            <ul className="space-y-6 mb-10 text-start">
              {c.goals.map((item) => (
                <li key={item.title} className="flex items-start gap-4">
                  <span className="w-2 h-2 bg-accent flex-shrink-0 mt-2" />
                  <div>
                    <p className="text-dark font-semibold mb-1">{item.title}</p>
                    <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <blockquote>
              <p className="text-muted text-sm italic leading-relaxed mb-2">&quot;{c.quote.text}&quot;</p>
              <p className="text-dark text-xs font-semibold">— {c.quote.author} —</p>
            </blockquote>
          </div>
        </div>
      </SectionContainer>

      <CTASection
        title={c.cta.title}
        subtitle={c.cta.subtitle}
        ctaPrimary={c.cta.primary}
        ctaSecondary={c.cta.secondary}
      />
    </>
  );
}
