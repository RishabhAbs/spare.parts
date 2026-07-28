import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'

/** Counts up to `value` the first time it scrolls into view. */
export default function CountUp({ value, suffix = '', duration = 1.6 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const reduce = useReducedMotion()
  const [shown, setShown] = useState(reduce ? value : 0)

  useEffect(() => {
    if (!inView || reduce) return
    const controls = animate(0, value, {
      duration,
      ease: [0.22, 0.68, 0, 1],
      onUpdate: (v) => setShown(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, value, duration, reduce])

  return (
    <span ref={ref}>
      {shown.toLocaleString('en-IN')}
      {suffix}
    </span>
  )
}
