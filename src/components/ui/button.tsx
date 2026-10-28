import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "accent" | "ghost";

const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    "bg-harbor-500 text-surface hover:bg-harbor-600 focus-visible:ring-harbor-400",
  secondary:
    "border border-harbor-500 text-harbor-600 hover:bg-harbor-500/10 focus-visible:ring-harbor-400",
  accent: "bg-rose-500 text-surface hover:bg-rose-600 focus-visible:ring-rose-400",
  ghost: "text-ink hover:bg-ink/5 focus-visible:ring-ink/30",
};

type BaseProps = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
};

type ButtonAsLink = BaseProps & {
  href: string;
  onClick?: never;
  type?: never;
};

type ButtonAsButton = BaseProps & {
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit";
};

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", children, className = "" } = props;
  const base =
    "inline-flex min-h-[48px] items-center justify-center gap-2 rounded-sm px-6 py-3 font-body text-sm font-semibold transition-colors duration-200 ease-editorial focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas";
  const classes = `${base} ${VARIANT_CLASSES[variant]} ${className}`;

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={"type" in props ? props.type ?? "button" : "button"}
      onClick={"onClick" in props ? props.onClick : undefined}
      className={classes}
    >
      {children}
    </button>
  );
}
