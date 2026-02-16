interface SectionHeadingProps {
  id: string;
  title: string;
}

export default function SectionHeading({ id, title }: SectionHeadingProps) {
  return (
    <h2
      id={`${id}-heading`}
      className="text-2xl font-semibold tracking-tight text-foreground"
    >
      {title}
    </h2>
  );
}
