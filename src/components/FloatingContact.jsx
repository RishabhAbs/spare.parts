import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import Icon from './Icon.jsx'
import { company, telHref, waHref } from '../data/site.js'

/**
 * Persistent way to reach the counter. Workshops call rather than email, so
 * the phone stays one tap away on every page. While the numbers are still
 * placeholders both buttons route to the contact page instead of dialling.
 */
export default function FloatingContact() {
  const reduce = useReducedMotion()
  const wa = waHref(company.whatsapp)
  const tel = telHref(company.phone)

  return (
    <motion.div
      className="float"
      initial={reduce ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1, ease: [0.22, 0.68, 0, 1] }}
    >
      {wa ? (
        <a
          className="float__btn float__btn--chat"
          href={wa}
          target="_blank"
          rel="noreferrer"
          aria-label={`Message the counter on WhatsApp at ${company.whatsapp}`}
        >
          <Icon name="chat" size={21} />
          <span className="float__label">WhatsApp</span>
        </a>
      ) : (
        <Link className="float__btn float__btn--chat" to="/contact" aria-label="Send an enquiry">
          <Icon name="chat" size={21} />
          <span className="float__label">Enquire</span>
        </Link>
      )}

      {tel ? (
        <a className="float__btn" href={tel} aria-label={`Call the counter on ${company.phone}`}>
          <Icon name="phone" size={19} />
          <span className="float__label">Call</span>
        </a>
      ) : (
        <Link className="float__btn" to="/contact" aria-label="Branch phone numbers">
          <Icon name="phone" size={19} />
          <span className="float__label">Call</span>
        </Link>
      )}
    </motion.div>
  )
}
