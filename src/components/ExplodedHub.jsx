import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

/**
 * The signature element: a front hub assembly drawn as a technical
 * exploded view. On load the parts separate along the axle centreline,
 * exactly the way a fitment diagram in a parts catalogue does.
 * Every part is a real line in our stock list.
 */

const AXIS_Y = 214
const ASSEMBLED_X = 352

const PARTS = [
  { id: 'axle', name: 'Stub axle', pn: 'AXL-1180', x: 96, r: 17, t: 150, label: 104, bore: 0 },
  { id: 'seal', name: 'Oil seal', pn: 'SEL-8341', x: 210, r: 42, t: 13, label: 52, bore: 0.42 },
  { id: 'bearing', name: 'Taper roller bearing', pn: 'BRG-6205-2RS', x: 278, r: 55, t: 32, label: 104, bore: 0.5, rollers: true },
  { id: 'hub', name: 'Wheel hub', pn: 'HUB-1180-A', x: 384, r: 74, t: 70, label: 48, bore: 0.34 },
  { id: 'drum', name: 'Brake drum', pn: 'BRK-4212', x: 512, r: 98, t: 54, label: 96, bore: 0.3 },
  { id: 'nut', name: 'Axle nut, M22', pn: 'NUT-M22-K', x: 600, r: 19, t: 16, label: 48, bore: 0.45 },
]

const PERSPECTIVE = 0.3

function Cylinder({ r, t, bore, rollers }) {
  const ex = r * PERSPECTIVE
  const left = -t / 2
  const right = t / 2
  return (
    <g>
      <ellipse cx={left} cy={0} rx={ex} ry={r} />
      <line x1={left} y1={-r} x2={right} y2={-r} />
      <line x1={left} y1={r} x2={right} y2={r} />
      <ellipse cx={right} cy={0} rx={ex} ry={r} />
      {bore > 0 && (
        <ellipse cx={right} cy={0} rx={ex * bore} ry={r * bore} opacity="0.75" />
      )}
      {rollers &&
        [-0.72, -0.36, 0, 0.36, 0.72].map((p) => (
          <line
            key={p}
            x1={left + 3}
            y1={r * p * 0.92}
            x2={right - 3}
            y2={r * p * 0.92}
            opacity="0.5"
          />
        ))}
    </g>
  )
}

export default function ExplodedHub() {
  const [active, setActive] = useState(null)
  const reduce = useReducedMotion()
  const current = PARTS.find((p) => p.id === active)

  return (
    <div className="hub">
      <svg
        className="hub__svg"
        viewBox="8 34 692 292"
        role="img"
        aria-label="Exploded view of a front hub assembly: stub axle, oil seal, taper roller bearing, wheel hub, brake drum and axle nut."
      >
        {/* axle centreline */}
        <motion.line
          x1="20"
          y1={AXIS_Y}
          x2="690"
          y2={AXIS_Y}
          stroke="#F2B705"
          strokeWidth="1"
          strokeDasharray="10 7"
          initial={reduce ? false : { opacity: 0, strokeDashoffset: 220 }}
          animate={{ opacity: 0.5, strokeDashoffset: 0 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
        />

        {PARTS.map((part, i) => {
          const isActive = active === part.id
          return (
            <motion.g
              key={part.id}
              className="hub__part"
              initial={reduce ? false : { x: ASSEMBLED_X - part.x, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 1.15,
                delay: 0.25 + i * 0.09,
                ease: [0.22, 0.68, 0, 1],
              }}
              onMouseEnter={() => setActive(part.id)}
              onMouseLeave={() => setActive(null)}
            >
              {/* leader line + part number */}
              <motion.g
                className="hub__callout"
                animate={{ opacity: active && !isActive ? 0.3 : 1 }}
                transition={{ duration: 0.25 }}
              >
                <line
                  x1={part.x}
                  y1={AXIS_Y - part.r - 8}
                  x2={part.x}
                  y2={part.label + 8}
                  stroke={isActive ? '#F2B705' : '#8b9aa4'}
                  strokeWidth="1"
                  opacity={isActive ? 1 : 0.45}
                />
                <circle
                  cx={part.x}
                  cy={part.label + 8}
                  r="2.5"
                  fill={isActive ? '#F2B705' : '#8b9aa4'}
                />
                <text
                  x={part.x + 9}
                  y={part.label + 12}
                  fill={isActive ? '#F2B705' : '#8b9aa4'}
                  fontFamily="'IBM Plex Mono', monospace"
                  fontSize="11.5"
                  letterSpacing="0.06em"
                >
                  {part.pn}
                </text>
              </motion.g>

              <motion.g
                transform={`translate(${part.x} ${AXIS_Y})`}
                stroke={isActive ? '#F2B705' : '#cdd5da'}
                strokeWidth={isActive ? 2.6 : 1.7}
                fill="none"
                strokeLinecap="round"
                animate={{ opacity: active && !isActive ? 0.28 : 0.95 }}
                transition={{ duration: 0.25 }}
              >
                <Cylinder r={part.r} t={part.t} bore={part.bore} rollers={part.rollers} />
              </motion.g>
            </motion.g>
          )
        })}
      </svg>

      <div className="hub__legend">
        {PARTS.map((part) => (
          <button
            key={part.id}
            type="button"
            className={`hub__chip${active === part.id ? ' is-active' : ''}`}
            onMouseEnter={() => setActive(part.id)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(part.id)}
            onBlur={() => setActive(null)}
          >
            {part.name}
          </button>
        ))}
      </div>

      <p className="hub__caption">
        {current
          ? `${current.pn} — ${current.name}, in stock across 6 warehouses`
          : 'Front hub assembly · exploded view · hover a part'}
      </p>
    </div>
  )
}
