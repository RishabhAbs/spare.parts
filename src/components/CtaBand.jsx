import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'
import { company } from '../data/site.js'

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
          <a className="btn btn--ghost" href={`tel:${company.phone.replace(/\s/g, '')}`}>
            {company.phone}
          </a>
        </Reveal>
      </div>
    </section>
  )
}
