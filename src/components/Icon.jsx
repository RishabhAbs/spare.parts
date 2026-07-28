/**
 * Line icons drawn on the same 24-unit grid and 1.5 stroke as the fitment
 * diagram, so the icon set reads as part of the drawings rather than clip art.
 */

const PATHS = {
  sku: (
    <>
      <path d="M12 2.6 21.4 7v10L12 21.4 2.6 17V7Z" />
      <path d="M2.6 7 12 11.5 21.4 7" />
      <path d="M12 11.5v9.9" />
    </>
  ),
  warehouse: (
    <>
      <path d="M2.6 9.6 12 3.4l9.4 6.2v11H2.6Z" />
      <path d="M7.2 20.6v-6.4h9.6v6.4" />
      <path d="M7.2 17.2h9.6" />
    </>
  ),
  workshop: (
    <>
      <path d="M14.8 3.6a4.2 4.2 0 0 0-5.3 5.3L3.2 15.2a1.8 1.8 0 0 0 2.6 2.6l6.3-6.3a4.2 4.2 0 0 0 5.3-5.3l-2.6 2.6-2.4-.6-.6-2.4Z" />
      <path d="M15.4 14.2l5.2 5.2" />
    </>
  ),
  people: (
    <>
      <circle cx="9" cy="8.4" r="3.4" />
      <path d="M2.8 20.4a6.2 6.2 0 0 1 12.4 0" />
      <path d="M16.2 5.6a3.4 3.4 0 0 1 0 5.6" />
      <path d="M17.6 14.8a6.2 6.2 0 0 1 3.6 5.6" />
    </>
  ),
  truck: (
    <>
      <path d="M2.6 5.8h10.8v10.4H2.6Z" />
      <path d="M13.4 9.4h3.8l3.2 3.4v3.4h-7Z" />
      <circle cx="7" cy="18.4" r="2.1" />
      <circle cx="17.2" cy="18.4" r="2.1" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.8" />
      <path d="M12 6.6V12l3.8 2.4" />
    </>
  ),
  phone: (
    <>
      <path d="M7.6 3.4 10 8l-2 1.9a12 12 0 0 0 6.1 6.1L16 14l4.6 2.4-1 3.4a2 2 0 0 1-2.2 1.4C10.6 20.3 3.7 13.4 2.8 6.6a2 2 0 0 1 1.4-2.2Z" />
    </>
  ),
  chat: (
    <>
      <path d="M3.4 11.2a8 8 0 1 1 4 6.9L3.2 19.4l1.3-3.8a7.8 7.8 0 0 1-1.1-4.4Z" />
      <path d="M8.6 11.2h6.8" />
      <path d="M8.6 14.4h4.2" />
    </>
  ),
}

export default function Icon({ name, size = 24, className = '' }) {
  const path = PATHS[name]
  if (!path) return null
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {path}
    </svg>
  )
}
