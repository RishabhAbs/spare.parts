import { motion, useReducedMotion } from 'framer-motion'

/**
 * Scroll-triggered reveal. Everything on the site enters the same way:
 * a short rise with a soft ease, staggered by `delay`.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 22,
  as = 'div',
  once = true,
  amount = 0.25,
  className,
  ...rest
}) {
  const reduce = useReducedMotion()
  const Tag = motion[as] || motion.div

  if (reduce) {
    const Plain = as
    return (
      <Plain className={className} {...rest}>
        {children}
      </Plain>
    )
  }

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.7, delay, ease: [0.22, 0.68, 0, 1] }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
