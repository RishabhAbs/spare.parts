import { motion, useReducedMotion } from 'framer-motion'

/**
 * Every photo on the site goes through here so the treatment stays
 * consistent: cropped to a ratio, graded toward the brand palette, and
 * faded in once when it scrolls into view.
 *
 * `scrim` controls the overlay: 'ink' (bottom-up, for text over the image),
 * 'side' (left-heavy, for hero bands), 'soft' (light bottom fade) or 'none'.
 */
export default function Figure({
  src,
  alt,
  ratio = '4 / 3',
  scrim = 'none',
  className = '',
  priority = false,
  children,
}) {
  const reduce = useReducedMotion()

  return (
    <motion.figure
      className={`fig fig--${scrim} ${className}`}
      style={{ aspectRatio: ratio }}
      initial={reduce ? false : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.9, ease: [0.22, 0.68, 0, 1] }}
    >
      <img
        className="fig__img"
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
      />
      {children && <figcaption className="fig__body">{children}</figcaption>}
    </motion.figure>
  )
}
