import { motion, useReducedMotion } from 'framer-motion'

import PageHeader from '../components/PageHeader.jsx'
import Figure from '../components/Figure.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHead from '../components/SectionHead.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { routing, team } from '../data/site.js'
import { alts, img, photos } from '../data/images.js'

export default function Team() {
  const reduce = useReducedMotion()

  return (
    <>
      <PageHeader
        code="05 / OUR TEAM"
        title="Fifty-eight people. Six of them decide what you get."
        sub="Most parts businesses hide behind a phone number. These are the people who actually answer it, and what each of them owns."
        image={img(photos.mechanicEngine, 1800)}
      />

      <section className="section">
        <div className="wrap">
          <SectionHead
            code="THE COUNTER"
            title="Who you will be dealing with"
          />
          <div className="team">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={(i % 3) * 0.08} amount={0.2}>
                <motion.article
                  className="member"
                  initial="rest"
                  whileHover={reduce ? 'rest' : 'hover'}
                  variants={{ rest: { y: 0 }, hover: { y: -6 } }}
                  transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                >
                  <div className="member__plate">
                    <motion.span
                      className="member__ring"
                      aria-hidden="true"
                      variants={{
                        rest: { scale: 1, rotate: 0 },
                        hover: { scale: 1.14, rotate: 22 },
                      }}
                      transition={{ duration: 0.8, ease: [0.22, 0.68, 0, 1] }}
                    />
                    <span className="member__initials">{m.initials}</span>
                  </div>
                  <div className="member__body">
                    <h3 className="member__name">{m.name}</h3>
                    <p className="member__role">{m.role}</p>
                    <p className="member__note">{m.note}</p>
                    <div className="member__foot">
                      <span>{m.desk}</span>
                      <span>{m.years}</span>
                    </div>
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="wrap split">
          <Reveal>
            <SectionHead
              code="WHO TO ASK"
              title="Skip the switchboard"
              sub="Ask for the right desk by name and you will save a transfer or two."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="routing">
              {routing.map((r) => (
                <div className="routing__row" key={r.q}>
                  <span className="routing__q">{r.q}</span>
                  <span className="routing__a">{r.a}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--dark">
        <div className="wrap media-split">
          <div className="media-split__media">
            <Figure
              src={img(photos.serviceFloor, 1000)}
              alt={alts.serviceFloor}
              ratio="4 / 3"
              scrim="none"
            />
          </div>
          <Reveal className="prose">
            <h2 className="shead__title" style={{ marginBottom: 20 }}>
              Working here
            </h2>
            <p>
              Counter staff train on the catalogue for six months before they
              quote unsupervised, and everyone — including management — spends
              their first two weeks picking orders in the warehouse. It is the
              fastest way to learn why a bin location matters.
            </p>
            <p>
              We hire for patience more than product knowledge. The product can
              be taught; the willingness to ask a customer three more questions
              before quoting cannot.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Looking for a job at the counter?"
        sub="We take applications year-round for counter sales, warehouse and branch roles."
      />
    </>
  )
}
