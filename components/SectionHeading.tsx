type SectionHeadingProps = {
  kicker: string;
  title: string;
  id?: string;
};

export function SectionHeading({ kicker, title, id }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="section-kicker">{kicker}</p>
      <h2 id={id}>{title}</h2>
    </div>
  );
}
