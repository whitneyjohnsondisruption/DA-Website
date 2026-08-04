export default function RingDivider({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`flex justify-center py-6 ${className}`}>
      <svg
        width="56"
        height="30"
        viewBox="0 0 56 30"
        fill="none"
        aria-hidden="true"
        className="opacity-50"
      >
        <path
          d="M3 24C3 24 17 24 21 16C25 8 33 6 53 6"
          stroke="var(--color-teal)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
