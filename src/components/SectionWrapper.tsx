interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({
  id,
  children,
  className,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`py-20 ${className ?? ""}`}
      aria-labelledby={`${id}-heading`}
    >
      {children}
    </section>
  );
}
