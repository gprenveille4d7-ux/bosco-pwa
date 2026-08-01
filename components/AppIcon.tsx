type AppIconName =
  | "home"
  | "map"
  | "tides"
  | "conditions"
  | "square"
  | "sound"
  | "soundOff"
  | "settings";

export function AppIcon({ name }: { name: AppIconName }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.8,
  };

  return (
    <svg
      aria-hidden="true"
      className="app-icon"
      viewBox="0 0 24 24"
      focusable="false"
      {...common}
    >
      {name === "home" && (
        <>
          <path d="m3.5 10.5 8.5-7 8.5 7" />
          <path d="M5.5 9.2V21h13V9.2M9.5 21v-6h5v6" />
        </>
      )}
      {name === "map" && (
        <>
          <path d="m3.5 6 5-2 7 2 5-2v14l-5 2-7-2-5 2Z" />
          <path d="M8.5 4v14M15.5 6v14" />
          <circle cx="12" cy="11" r="2.1" />
        </>
      )}
      {name === "tides" && (
        <>
          <path d="M3 8.5c2.2-2 4.3-2 6.5 0s4.3 2 6.5 0 4.3-2 5 0" />
          <path d="M3 13c2.2-2 4.3-2 6.5 0s4.3 2 6.5 0 4.3-2 5 0" />
          <path d="M3 17.5c2.2-2 4.3-2 6.5 0s4.3 2 6.5 0 4.3-2 5 0" />
        </>
      )}
      {name === "conditions" && (
        <>
          <path d="M4 7h9M4 12h16M4 17h12" />
          <circle cx="16" cy="7" r="2" />
          <circle cx="9" cy="12" r="2" />
          <circle cx="18" cy="17" r="2" />
        </>
      )}
      {name === "square" && (
        <>
          <path d="M6 3.5h10.5A1.5 1.5 0 0 1 18 5v15.5H6A2.5 2.5 0 0 1 3.5 18V6A2.5 2.5 0 0 1 6 3.5Z" />
          <path d="M6 3.5V17h12M9 8h6M9 12h6" />
        </>
      )}
      {(name === "sound" || name === "soundOff") && (
        <>
          <path d="M4 10v4h4l5 4V6l-5 4Z" />
          {name === "sound" ? (
            <>
              <path d="M16 9a4 4 0 0 1 0 6" />
              <path d="M18.5 6.5a7.5 7.5 0 0 1 0 11" />
            </>
          ) : (
            <path d="m16.5 9 5 5m0-5-5 5" />
          )}
        </>
      )}
      {name === "settings" && (
        <>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2.8v2M12 19.2v2M21.2 12h-2M4.8 12h-2M18.5 5.5l-1.4 1.4M6.9 17.1l-1.4 1.4M18.5 18.5l-1.4-1.4M6.9 6.9 5.5 5.5" />
          <circle cx="12" cy="12" r="7" />
        </>
      )}
    </svg>
  );
}
