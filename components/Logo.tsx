export function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M24 3l16 6v12c0 10.5-6.8 19.8-16 23-9.2-3.2-16-12.5-16-23V9l16-6z"
        fill="#0d1424"
        stroke="#ffce1f"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path d="M24 12v24" stroke="#ffce1f" strokeWidth="2.5" strokeDasharray="3 3" />
      <path
        d="M16 22h4l2-4h4l2 4h4"
        stroke="#ffffff"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="18" cy="30" r="2.4" fill="#ffffff" />
      <circle cx="30" cy="30" r="2.4" fill="#ffffff" />
    </svg>
  );
}
