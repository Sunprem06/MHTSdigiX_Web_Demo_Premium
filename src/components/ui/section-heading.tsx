type Props = {
  eyebrow?: string;
  heading: string;
  body?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({ eyebrow, heading, body, align = "left", light = false }: Props) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const textColor = light ? "text-surface" : "text-ink";
  const bodyColor = light ? "text-surface/75" : "text-ink-soft";

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <p
          className={`font-body text-xs font-semibold uppercase tracking-[0.2em] ${
            light ? "text-mint-300" : "text-mint-600"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2 className={`mt-3 font-display text-3xl sm:text-4xl ${textColor}`}>{heading}</h2>
      {body && <p className={`mt-4 text-base leading-relaxed ${bodyColor}`}>{body}</p>}
    </div>
  );
}
