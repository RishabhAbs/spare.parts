import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'
import { partners } from '../data/site.js'

/**
 * The brands we hold authorised stock for, shown as wordmarks. Muted until
 * hovered so the row reads as one texture rather than eight competing logos.
 */
export default function PartnerStrip() {
  return (
    <section className="section section--tight strip">
      <div className="wrap">
        <Reveal className="strip__head">
          <p className="u-mono">Authorised stockist for</p>
          <Link className="strip__link" to="/partners">
            All partners
            <span className="btn__arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </Reveal>

        <div className="strip__row">
          {partners.map((p, i) => (
            <Reveal key={p.brand} delay={i * 0.05} y={12} amount={0.3}>
              <span className="strip__mark">
                <span className="strip__glyph">{p.glyph}</span>
                {p.brand}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
