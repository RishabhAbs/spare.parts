import { motion, useReducedMotion } from 'framer-motion'

const EASE = [0.22, 0.68, 0, 1]

export default function PageHeader({ code, title, sub }) {
  const reduce = useReducedMotion()
  const words = title.split(' ')

  return (
    <header className="phead">
      <div className="wrap phead__grid">
        <motion.p
          className="phead__code"
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          {code}
        </motion.p>

        <div>
          <h1 className="phead__title">
            {words.map((word, i) => (
              <motion.span
                key={`${word}-${i}`}
                style={{ display: 'inline-block', marginRight: '0.24em' }}
                initial={reduce ? false : { opacity: 0, y: '38%' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.05 + i * 0.07, ease: EASE }}
              >
                {word}
              </motion.span>
            ))}
          </h1>
          {sub && (
            <motion.p
              className="phead__sub"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22, ease: EASE }}
            >
              {sub}
            </motion.p>
          )}
        </div>
      </div>
    </header>
  )
}
