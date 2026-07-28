import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'

import ExplodedHub from '../components/ExplodedHub.jsx'
import Figure from '../components/Figure.jsx'
import Icon from '../components/Icon.jsx'
import PartnerStrip from '../components/PartnerStrip.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHead from '../components/SectionHead.jsx'
import CountUp from '../components/CountUp.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { categories, company, process, stats } from '../data/site.js'
import { alts, img, photos } from '../data/images.js'

const EASE = [0.22, 0.68, 0, 1]

/** Each catalogue category gets a photograph from the same graded set. */
const CATEGORY_PHOTOS = [
  photos.wheelsRack,
  photos.bearingMacro,
  photos.engineChrome,
  photos.engineBelts,
  photos.sprocketChain,
  photos.handsEngine,
]

const CATEGORY_ALTS = [
  alts.wheelsRack,
  alts.bearingMacro,
  alts.engineChrome,
  alts.engineBelts,
  alts.sprocketChain,
  alts.handsEngine,
]

export default function Home() {
  const reduce = useReducedMotion()
  const rise = (delay) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.75, delay, ease: EASE },
  })

  return (
    <>
      <section className="hero">
        <div className="hero__bg">
          <img
            src={img(photos.warehouseAisle, 2000)}
            alt=""
            aria-hidden="true"
            fetchpriority="high"
          />
        </div>

        <div className="wrap hero__grid">
          <div>
            <motion.p className="u-mono hero__eyebrow" {...rise(0.05)}>
              Est. {company.founded} · {company.city}
            </motion.p>

            <motion.h1 className="hero__title" {...rise(0.12)}>
              Every part,
              <br />
              <em>accounted for.</em>
            </motion.h1>

            <motion.p className="hero__copy" {...rise(0.22)}>
              We stock 42,000 part numbers for commercial vehicles and factory
              equipment — and we know which one fits your machine. Tell us the
              vehicle; the catalogue is our problem.
            </motion.p>

            <motion.div className="btn-row hero__actions" {...rise(0.3)}>
              <Link className="btn" to="/contact">
                Ask the counter
                <span className="btn__arrow" aria-hidden="true">
                  →
                </span>
              </Link>
              <Link className="btn btn--ghost" to="/journey">
                Our journey
              </Link>
            </motion.div>

            <motion.div className="hero__meta" {...rise(0.4)}>
              <span>
                <b>6</b> warehouses
              </span>
              <span>
                <b>94%</b> same-day dispatch
              </span>
              <span>
                <b>1,240</b> workshops supplied
              </span>
            </motion.div>
          </div>

          <motion.div
            className="hero__panel"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
          >
            <div className="hero__panel-head">
              <span>Fitment diagram</span>
              <span>
                Front hub assembly · <b>6 parts</b>
              </span>
            </div>
            <ExplodedHub />
          </motion.div>
        </div>
      </section>

      <section className="stats">
        <div className="wrap">
          <div className="stats__grid">
            {stats.map((s, i) => (
              <Reveal className="stat" key={s.label} delay={i * 0.05}>
                <Icon className="stat__icon" name={s.icon} size={26} />
                <p className="stat__num">
                  <CountUp value={s.value} suffix={s.suffix} />
                </p>
                <p className="stat__label">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PartnerStrip />

      <section className="section">
        <div className="wrap">
          <SectionHead
            code="WHAT WE STOCK"
            title="Six aisles,"
            accent="one stock ledger"
            sub="Braking to electricals, held in depth rather than in breadth-only. If a line moves, we carry it in quantity."
          />
          <div className="tiles">
            {categories.map((cat, i) => (
              <Reveal className="tile" key={cat.code} delay={(i % 3) * 0.08} amount={0.15}>
                <Figure
                  src={img(CATEGORY_PHOTOS[i], 720)}
                  alt={CATEGORY_ALTS[i]}
                  ratio="5 / 4"
                  scrim="ink"
                />
                <div className="tile__body">
                  <p className="tile__code">
                    {cat.code} · {cat.range}
                  </p>
                  <h3 className="tile__name">{cat.name}</h3>
                  <p className="tile__items">{cat.items}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="band__bg">
          <img src={img(photos.fleetAerial, 1800)} alt="" aria-hidden="true" loading="lazy" />
        </div>
        <div className="wrap band__inner">
          <Reveal>
            <p className="u-mono" style={{ color: 'var(--cadmium)', marginBottom: 18 }}>
              Dispatch
            </p>
            <h2 className="band__title">
              Confirmed by four. On the courier by seven.
            </h2>
            <p className="band__sub">
              Picking is sequenced around courier cut-offs, not around our shift
              times. That is the whole reason a part ordered in Ludhiana reaches
              a workshop in Nagpur the next morning.
            </p>
            <div className="band__figures">
              <div className="band__figure">
                <b>94%</b>
                <span>Same-day dispatch</span>
              </div>
              <div className="band__figure">
                <b>16:00</b>
                <span>Order cut-off</span>
              </div>
              <div className="band__figure">
                <b>6</b>
                <span>Dispatch points</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--dark">
        <div className="wrap">
          <SectionHead
            code="HOW ORDERING WORKS"
            title="Three steps,"
            accent="no catalogue number required"
            sub="The sequence has not changed since 1978. Only the speed has."
          />
          <div className="steps">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.1}>
                <p className="step__num">{p.step}</p>
                <h3 className="step__title">{p.title}</h3>
                <p className="u-dim">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="wrap media-split">
          <div className="media-split__media">
            <Figure
              src={img(photos.mechanicEngine, 1000)}
              alt={alts.mechanicEngine}
              ratio="4 / 5"
              scrim="soft"
            />
          </div>
          <Reveal>
            <h2 className="shead__title">A wrong part costs a day of work.</h2>
            <p className="u-lead" style={{ marginTop: 18 }}>
              That is the whole reason this business exists. A workshop with a
              vehicle on the ramp is not buying a bearing — it is buying the
              hour it gets back. So we check fitment before we quote, label every
              box with the number on the invoice, and take the return without
              argument when we get it wrong.
            </p>

            <div className="spec" style={{ marginTop: 32 }}>
              {[
                ['Founded', `${company.founded}, ${company.city}`],
                ['Stock', '42,000 active part numbers'],
                ['Dispatch', 'Same evening on orders confirmed before 16:00'],
                ['Returns', '30 days on wrong-fit parts, unopened'],
              ].map(([k, v]) => (
                <div className="spec__row" key={k}>
                  <span className="spec__key">{k}</span>
                  <span className="spec__val">{v}</span>
                </div>
              ))}
            </div>

            <div className="btn-row" style={{ marginTop: 28 }}>
              <Link className="btn btn--ghost" to="/about">
                About us
                <span className="btn__arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
