import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHead from '../components/SectionHead.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { company } from '../data/site.js'

const principles = [
  {
    k: 'PR-01',
    t: 'Fitment before price',
    body: 'We confirm the part fits your vehicle before we quote a rate. A cheap part that goes back on Monday costs everyone more than the right one on Friday.',
  },
  {
    k: 'PR-02',
    t: 'Stock you can see',
    body: 'One live inventory across six warehouses. If the counter says it is on the shelf, it is on the shelf — not on a lorry from somewhere else.',
  },
  {
    k: 'PR-03',
    t: 'Both options, openly',
    body: 'Genuine and aftermarket, quoted side by side with the difference explained. The choice belongs to the workshop paying for it.',
  },
]

export default function About() {
  return (
    <>
      <PageHeader
        code="02 / ABOUT US"
        title="A parts counter that grew a warehouse behind it."
        sub={`${company.legal} supplies commercial vehicle and industrial spare parts to workshops, fleets and factories across northern and central India.`}
      />

      <section className="section">
        <div className="wrap split">
          <Reveal className="prose">
            <p className="prose__drop">
              Hubco started as a single window on Gill Road in {company.founded},
              selling clutch plates and leaf springs to the truck operators
              parked outside. The stock fitted on four shelves and the ledger was
              handwritten. What the shop actually sold, even then, was certainty:
              the driver described the vehicle, and the man behind the counter
              knew which box to reach for.
            </p>
            <p>
              Forty-odd years later the shelves have become six racked
              warehouses and the ledger has become a cross-reference of 42,000
              part numbers. The job has not changed. A fleet supervisor calls
              with a chassis number and a vehicle stuck on a ramp; we work out
              what fits, what we hold, and when it can be on their bench.
            </p>
            <p>
              We are a distributor, not a manufacturer. That means our value is
              in judgement and logistics — knowing which aftermarket bearing
              survives a loaded tipper on a Punjab highway, holding depth in the
              lines that move, and getting boxes onto the evening courier instead
              of tomorrow's.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="spec">
              {[
                ['Business', 'Distribution & wholesale of spare parts'],
                ['Serves', 'Fleet workshops, garages, factories, dealers'],
                ['Vehicles', 'Trucks, tippers, buses, tractors, LCVs'],
                ['Industrial', 'Bearings, seals, hydraulic and filtration lines'],
                ['Team', '58 people, six locations'],
                ['Head office', 'Ludhiana, Punjab'],
              ].map(([k, v]) => (
                <div className="spec__row" key={k}>
                  <span className="spec__key">{k}</span>
                  <span className="spec__val">{v}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--dark">
        <div className="wrap">
          <SectionHead
            code="HOW WE WORK"
            title="Three rules the counter runs on"
            sub="Every branch is trained on the same three, and they settle most arguments."
          />
        </div>
        <div className="wrap">
          <div className="principles">
            {principles.map((p, i) => (
              <Reveal className="principle" key={p.k} delay={i * 0.1}>
                <p className="principle__k">{p.k}</p>
                <h3 className="principle__t">{p.t}</h3>
                <p>{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="wrap split">
          <Reveal>
            <SectionHead
              code="WHO BUYS FROM US"
              title="Four kinds of customer, one counter"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="spec">
              {[
                ['Fleets', 'Transport operators running 20 to 400 vehicles, on monthly credit terms.'],
                ['Garages', 'Independent workshops ordering across the counter or on WhatsApp.'],
                ['Factories', 'Plant maintenance teams buying bearings, seals and filtration.'],
                ['Retailers', 'Smaller parts shops we supply as a sub-stockist.'],
              ].map(([k, v]) => (
                <div className="spec__row" key={k}>
                  <span className="spec__key">{k}</span>
                  <span className="spec__val">{v}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Want to see whether we carry your lines?"
        sub="Send a list of part numbers and we will come back with stock and rates."
      />
    </>
  )
}
