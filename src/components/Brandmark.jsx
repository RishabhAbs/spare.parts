/** Hub-and-bearing monogram: a race ring with six roller marks. */
export default function Brandmark({ size = 30 }) {
  return (
    <svg
      className="brand__mark"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.2" opacity="0.35" />
      <circle cx="16" cy="16" r="9.5" stroke="#F2B705" strokeWidth="2" />
      <circle cx="16" cy="16" r="3" fill="#F2B705" />
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <rect
          key={deg}
          x="15.2"
          y="0.6"
          width="1.6"
          height="3.6"
          fill="currentColor"
          opacity="0.55"
          transform={`rotate(${deg} 16 16)`}
        />
      ))}
    </svg>
  )
}
