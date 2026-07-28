import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'

import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHead from '../components/SectionHead.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { journey } from '../data/site.js'

export default function Journey() {
  const railRef = useRef(null)
  const reduce = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ['start 78%', 'end 65%'],
  })
  const fill = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  })

  return (
    <>
      <PageHeader
        code="03 / OUR JOURNEY"
        title="Four shelves to six warehouses."
        sub="Nothing here happened quickly. Each step was paid for by the one before it — which is why the dates matter more than the story."
      />

      <section className="section">
        <div className="wrap">
          <SectionHead
            code="1978 — TODAY"
            title="The record, in order"
            sub="Seven moments that changed how the counter works."
          />

          <div className="timeline" ref={railRef}>
            <div className="timeline__rail">
              <motion.div
                className="timeline__fill"
                style={reduce ? { scaleY: 1 } : { scaleY: fill }}
              />
            </div>

            {journey.map((item, i) => (
              <Reveal className="tl-item" key={item.year} delay={0.04} amount={0.35}>
                <span className="tl-item__dot" aria-hidden="true" />
                <p className="tl-item__year">{item.year}</p>
                <h3 className="tl-item__title">{item.title}</h3>
                <p className="tl-item__body">{item.body}</p>
                <span className="tl-item__tag">{item.tag}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="wrap split">
          <Reveal>
            <h2 className="shead__title">What forty-six years actually taught us</h2>
          </Reveal>
          <Reveal delay={0.1} className="prose">
            <p>
              Every jump in this list came from the same realisation in a
              different form: the part is easy, finding it is the hard part. The
              warehouse in 2003 was a search problem. The digital catalogue in
              2011 was a search problem. The single stock view in 2018 was a
              search problem across cities.
            </p>
            <p>
              None of it replaced the counter. A chassis number that defeats the
              cross-reference still ends up with Rakesh, who has been matching
              parts since 1995. The systems exist so that the people who know
              the vehicles spend their time on the difficult questions.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="The next entry in this list is up to our customers."
        sub="Tell us what you need held closer to your workshop."
      />
    </>
  )
}
