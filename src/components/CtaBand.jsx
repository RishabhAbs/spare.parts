import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'
import { company, telHref } from '../data/site.js'

export default function CtaBand({
  title = 'Send us the chassis number. We will send back the part.',
  sub = 'Quotes on the same working day, and a straight answer if we do not carry it.',
}) {
  return (
    <section className="section section--tight cta-band">
      <div className="wrap cta-band__grid">
        <Reveal>
          <h2 className="cta-band__title">{title}</h2>
          <p className="cta-band__sub">{sub}</p>
        </Reveal>
        <Reveal delay={0.1} className="btn-row">
          <Link className="btn" to="/contact">
            Contact us
            <span className="btn__arrow" aria-hidden="true">
              →
            </span>
          </Link>
          {telHref(company.phone) ? (
            <a className="btn btn--ghost" href={telHref(company.phone)}>
              {company.phone}
            </a>
          ) : (
            <Link className="btn btn--ghost" to="/contact">
              Branch numbers
            </Link>
          )}
        </Reveal>
      </div>
    </section>
  )
}
