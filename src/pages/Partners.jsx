import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHead from '../components/SectionHead.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { partners } from '../data/site.js'

export default function Partners() {
  return (
    <>
      <PageHeader
        code="04 / OUR PARTNERS"
        title="Eight manufacturers we answer for."
        sub="We hold authorised stock for each of these brands. That means audited inventory, genuine packaging, and a warranty we process ourselves rather than sending you upstream."
      />

      <section className="section">
        <div className="wrap">
          <SectionHead
            code="AUTHORISED LINES"
            title="Who we stock"
            sub="Hover a mark to bring it forward. Every brand below is carried in depth, not sampled."
          />
          <div className="marks">
            {partners.map((p, i) => (
              <Reveal className="mark" key={p.brand} delay={(i % 4) * 0.06} amount={0.2}>
                <span className="mark__glyph">{p.glyph}</span>
                <span className="mark__name">{p.brand}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="wrap">
          <SectionHead
            code="CROSS-REFERENCE"
            title="Territories and number series"
            sub="The prefix tells you which series to quote when you order — it is the fastest way to reach the right aisle."
          />
          <Reveal className="xref__scroll">
            <table className="xref">
              <thead>
                <tr>
                  <th>Brand</th>
                  <th>Category</th>
                  <th>Series</th>
                  <th>Stockist since</th>
                  <th>Territory</th>
                </tr>
              </thead>
              <tbody>
                {partners.map((p) => (
                  <tr key={p.brand}>
                    <td className="xref__brand">{p.brand}</td>
                    <td>{p.category}</td>
                    <td className="xref__code">{p.prefix}</td>
                    <td className="xref__code">{p.since}</td>
                    <td>{p.coverage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className="wrap split">
          <Reveal>
            <h2 className="shead__title">What an authorisation obliges us to do</h2>
            <p className="u-lead" style={{ marginTop: 18 }}>
              A stockist agreement is not a logo on a wall. It commits us to
              minimum stock depth, batch traceability, and handling warranty
              claims on the manufacturer's behalf — including the paperwork most
              buyers would rather never see.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="spec">
              {[
                ['Stock depth', 'Agreed minimum quantity held per fast-moving line'],
                ['Traceability', 'Batch and invoice recorded against every box that leaves'],
                ['Warranty', 'Claims raised, tested and settled by our quality desk'],
                ['Pricing', 'Manufacturer schedule, with fleet slabs applied openly'],
                ['Counterfeits', 'Sealed manufacturer packaging only, no loose repacking'],
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
        title="Manufacturing a line we should be carrying?"
        sub="We review distribution proposals every quarter. Send your catalogue and territory requirement."
      />
    </>
  )
}
