import type { SVGProps } from "react";

export type IconName =
  | "heart"
  | "bone"
  | "brain"
  | "child"
  | "maternity"
  | "siren"
  | "ribbon"
  | "kidney"
  | "ear"
  | "stethoscope"
  | "skin"
  | "eye"
  | "lab"
  | "pharmacy"
  | "ambulance"
  | "bed"
  | "video"
  | "physio"
  | "cross"
  | "whatsapp"
  | "map-pin"
  | "facebook"
  | "instagram"
  | "linkedin"
  | "youtube"
  | "menu"
  | "close"
  | "chevron-down"
  | "chevron-left"
  | "chevron-right"
  | "check"
  | "mail"
  | "phone"
  | "clock"
  | "zoom";

type Props = SVGProps<SVGSVGElement> & { name: IconName; label?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Path({ name }: { name: IconName }) {
  switch (name) {
    case "heart":
      return <path d="M12 19.5 4.6 12.3a4.6 4.6 0 0 1 0-6.6 4.8 4.8 0 0 1 6.7 0l.7.7.7-.7a4.8 4.8 0 0 1 6.7 0 4.6 4.6 0 0 1 0 6.6L12 19.5Z" />;
    case "bone":
      return (
        <path d="M7 14.5a2.2 2.2 0 1 0-3-3.2l7.2-7.2a2.2 2.2 0 1 0 3.2 3L7 14.5Zm0 0a2.2 2.2 0 1 0 3.2 3L17.4 10a2.2 2.2 0 1 0-3-3.2L7 14.5Z" />
      );
    case "brain":
      return (
        <path d="M9 4.5a3 3 0 0 0-3 3v1a3 3 0 0 0-1.5 5.4A3 3 0 0 0 7 19h1M15 4.5a3 3 0 0 1 3 3v1a3 3 0 0 1 1.5 5.4A3 3 0 0 1 17 19h-1M9 4.5v14.5M15 4.5v14.5M9 9h2M13 9h2M9 13h2M13 13h2" />
      );
    case "child":
      return (
        <>
          <circle cx="12" cy="6" r="2.2" />
          <path d="M8 20v-4.5a2.5 2.5 0 0 1 2.5-2.5h3A2.5 2.5 0 0 1 16 15.5V20M12 13v-3" />
        </>
      );
    case "maternity":
      return (
        <>
          <circle cx="10" cy="6" r="2" />
          <path d="M10 8v3.5a4.5 4.5 0 0 0 4.5 4.5c1 0 1.5.5 1.5 1.5V20M8 14c-1.3.7-2 2-2 3.5V20" />
        </>
      );
    case "siren":
      return (
        <path d="M5 19v-5a7 7 0 0 1 14 0v5H5ZM12 4v2M7.5 5.5l1 1.7M16.5 5.5l-1 1.7M3 19h18" />
      );
    case "ribbon":
      return (
        <path d="M9 5a3 3 0 1 1 3 3 3 3 0 1 1 3-3M9.5 10.5 7 19l5-2.5L17 19l-2.5-8.5" />
      );
    case "kidney":
      return (
        <path d="M9 4.5c-3 .5-4.5 3-4.5 6.5S6 18 9 18.5c1.8.3 2.5-1 2.3-2.4-.3-1.7-1.6-2-1.6-3.6 0-1.8 1.6-2 1.6-3.8 0-1.6-.9-2.3-2.3-2.3Z" />
      );
    case "ear":
      return (
        <path d="M15 5a5 5 0 0 0-5 5v6a3 3 0 0 0 6 0v-1a2 2 0 0 0-2-2M15 5a5 5 0 0 1 5 5c0 2-1 3-1 5" />
      );
    case "stethoscope":
      return (
        <path d="M6 4v5a4 4 0 0 0 8 0V4M10 13v2.5a4.5 4.5 0 0 0 9 0V14M19 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
      );
    case "skin":
      return <path d="M5 12a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm3-1.5h.01M11 9h.01M14 11h.01M9.5 14.5h.01" />;
    case "eye":
      return (
        <>
          <path d="M2.5 12S6 6 12 6s9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
          <circle cx="12" cy="12" r="2.4" />
        </>
      );
    case "lab":
      return (
        <path d="M9 3v6.5L5.5 16A2 2 0 0 0 7.3 19h9.4a2 2 0 0 0 1.8-3L15 9.5V3M9 3h6M8 14h8" />
      );
    case "pharmacy":
      return (
        <>
          <rect x="4" y="5" width="16" height="14" rx="2" />
          <path d="M12 9v6M9 12h6" />
        </>
      );
    case "ambulance":
      return (
        <path d="M3 17V9a1 1 0 0 1 1-1h8v9M3 17h2M9 17h4m0 0h6v-4l-3-3h-3M14 7v6M11 10h6M6.5 19a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6ZM16.5 19a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6Z" />
      );
    case "bed":
      return (
        <path d="M3 19v-9a1 1 0 0 1 1-1h2v4M3 19h18v-5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2M3 19v1M21 19v1" />
      );
    case "video":
      return (
        <>
          <rect x="3" y="6" width="13" height="12" rx="2" />
          <path d="m16 10 5-3v10l-5-3" />
        </>
      );
    case "physio":
      return (
        <path d="M7 20l2.5-6.5L7 10M17 20l-2.5-6.5L17 10M9.5 13.5h5M12 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
      );
    case "cross":
      return <path d="M12 4v16M4 12h16" />;
    case "whatsapp":
      return (
        <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.7-1.2A9 9 0 1 0 12 3Zm4.6 12.7c-.3.8-1.6 1.4-2.3 1.5-.6.1-1.3.2-3.7-.8-3-1.2-4.9-4.3-5-4.5-.2-.2-1.2-1.6-1.2-3a3 3 0 0 1 1-2.3c.3-.3.6-.4.9-.4h.6c.2 0 .5 0 .7.5l.9 2.2c.1.2.1.4 0 .6l-.5.7c-.1.2-.2.4 0 .6.5 1 1.2 1.9 2.1 2.6.9.6 1.4.8 1.6.9.2.1.4.1.5-.1l.7-.8c.2-.2.4-.3.7-.2l2 1c.2.1.4.2.4.4.1.2.1.6-.1 1.1Z" />
      );
    case "map-pin":
      return (
        <>
          <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
          <circle cx="12" cy="10" r="2.5" />
        </>
      );
    case "facebook":
      return <path d="M14 9h2.5V6H14c-1.9 0-3.5 1.6-3.5 3.5V12H8v3h2.5v6H14v-6h2.3l.5-3H14V9.6c0-.4.1-.6.5-.6Z" />;
    case "instagram":
      return (
        <>
          <rect x="4" y="4" width="16" height="16" rx="4" />
          <circle cx="12" cy="12" r="3.2" />
          <circle cx="16.3" cy="7.7" r="0.6" fill="currentColor" stroke="none" />
        </>
      );
    case "linkedin":
      return (
        <>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M8 10.5V17M8 7.5v.01M12 17v-3.5c0-1.1.9-2 2-2s2 .9 2 2V17M12 13.5V17" />
        </>
      );
    case "youtube":
      return (
        <>
          <rect x="3" y="6" width="18" height="12" rx="3" />
          <path d="m10.5 9.5 4.5 2.5-4.5 2.5v-5Z" fill="currentColor" stroke="none" />
        </>
      );
    case "menu":
      return <path d="M4 7h16M4 12h16M4 17h16" />;
    case "close":
      return <path d="M6 6l12 12M18 6 6 18" />;
    case "chevron-down":
      return <path d="m6 9 6 6 6-6" />;
    case "chevron-left":
      return <path d="m15 6-6 6 6 6" />;
    case "chevron-right":
      return <path d="m9 6 6 6-6 6" />;
    case "check":
      return <path d="m5 13 4 4 10-10" />;
    case "mail":
      return (
        <>
          <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
          <path d="m4.5 7 7.5 6 7.5-6" />
        </>
      );
    case "phone":
      return (
        <path d="M6.5 4h3l1.5 4-2 1.5a12 12 0 0 0 5.5 5.5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.5 6.2 2 2 0 0 1 6.5 4Z" />
      );
    case "clock":
      return (
        <>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 7.5V12l3 2" />
        </>
      );
    case "zoom":
      return (
        <>
          <circle cx="10.5" cy="10.5" r="6.5" />
          <path d="M20 20l-4.5-4.5M8 10.5h5" />
        </>
      );
    default:
      return null;
  }
}

export function Icon({ name, label, className, ...rest }: Props) {
  return (
    <svg
      {...base}
      viewBox="0 0 24 24"
      width="24"
      height="24"
      className={className}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      {...rest}
    >
      <Path name={name} />
    </svg>
  );
}
