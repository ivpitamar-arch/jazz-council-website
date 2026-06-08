interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  narrow?: boolean;
}

export default function SectionContainer({
  children,
  className = "",
  id,
  narrow = false,
}: SectionContainerProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className={`mx-auto px-6 ${narrow ? "max-w-3xl" : "max-w-6xl"}`}>
        {children}
      </div>
    </section>
  );
}
