import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHead from '../components/SectionHead.jsx'
import { branches, company, telHref } from '../data/site.js'
import { img, photos } from '../data/images.js'


const ENQUIRY_TYPES = [
  'Part enquiry or quote',
  'Bulk / fleet pricing',
  'Warranty or return',
  'Become a stockist',
  'Something else',
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [name, setName] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    // No backend on a static build — point this at your mail or CRM endpoint.
    setSent(true)
  }

  return (
    <>
      <PageHeader
        code="06 / CONTACT US"
        title="The counter is open six days a week."
        sub={`${company.hours}. Call for anything urgent — a vehicle on a ramp does not wait for email.`}
        image={img(photos.nightHighway, 1800)}
      />

      <section className="section">
        <div className="wrap split">
          <div>
            <Reveal className="chead">
              <p className="chead__code">ENQUIRY</p>
              <h2 className="chead__title">Send us a part enquiry</h2>
              <p className="u-lead chead__sub">
                Fill in what you know. Missing the part number is fine — the
                vehicle details are enough for us to work from.
              </p>
            </Reveal>

            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="sent"
                  className="form__sent"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.45, ease: [0.22, 0.68, 0, 1] }}
                >
                  <h3 className="form__sent-title">
                    Thanks{name ? `, ${name.split(' ')[0]}` : ''} — enquiry ready to
                    send.
                  </h3>
                  <p className="u-dim">
                    This site is a static build with no form endpoint connected
                    yet, so nothing left your browser. Connect the form to your
                    mail service, or reach the counter on the branch numbers
                    listed below.
                  </p>
                  <div className="btn-row" style={{ marginTop: 20 }}>
                    <button
                      type="button"
                      className="btn btn--ghost"
                      onClick={() => setSent(false)}
                    >
                      Edit the enquiry
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  className="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="form__row">
                    <label className="field">
                      <span className="field__label">Your name</span>
                      <input
                        className="field__input"
                        type="text"
                        name="name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Rakesh Kumar"
                      />
                    </label>
                    <label className="field">
                      <span className="field__label">Workshop or company</span>
                      <input
                        className="field__input"
                        type="text"
                        name="company"
                        placeholder="Sharma Motors"
                      />
                    </label>
                  </div>

                  <div className="form__row">
                    <label className="field">
                      <span className="field__label">Phone</span>
                      <input
                        className="field__input"
                        type="tel"
                        name="phone"
                        required
                        placeholder="+91 98xxx xxxxx"
                      />
                    </label>
                    <label className="field">
                      <span className="field__label">Email</span>
                      <input
                        className="field__input"
                        type="email"
                        name="email"
                        placeholder="you@workshop.in"
                      />
                    </label>
                  </div>

                  <label className="field">
                    <span className="field__label">What is this about</span>
                    <select className="field__select" name="type" defaultValue={ENQUIRY_TYPES[0]}>
                      {ENQUIRY_TYPES.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </label>

                  <label className="field">
                    <span className="field__label">Vehicle and part</span>
                    <textarea
                      className="field__area"
                      name="message"
                      required
                      placeholder="Tata LPT 2518, 2019 model. Front hub bearing, both sides. Old number stamped BRG-6205."
                    />
                    <span className="field__hint">
                      Chassis number, model year, and quantity get you a quote
                      fastest.
                    </span>
                  </label>

                  <div className="btn-row">
                    <button className="btn" type="submit">
                      Send enquiry
                      <span className="btn__arrow" aria-hidden="true">
                        →
                      </span>
                    </button>
                    {telHref(company.phone) && (
                      <a className="btn btn--ghost" href={telHref(company.phone)}>
                        Call instead
                      </a>
                    )}
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          <Reveal delay={0.1}>
            <div className="spec">
              {[
                ['Phone', company.phone],
                ['WhatsApp', company.whatsapp],
                ['Email', company.email],
                ['Hours', company.hours],
                ['Order cut-off', '16:00 for same-evening dispatch'],
                ['GSTIN', company.gstin],
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
            code="BEFORE YOU CALL"
            title="Have these ready"
            sub="Two minutes of preparation turns a callback into a quote on the first call."
          />
          <div className="split">
            <Reveal>
              <ul className="checklist">
                <li>The chassis or engine number, or a photo of the plate</li>
                <li>Vehicle make, model and year</li>
                <li>The old part, or the number stamped on it</li>
                <li>Quantity, and whether you want genuine or aftermarket</li>
                <li>Where it is going, and by when</li>
              </ul>
            </Reveal>
            <Reveal delay={0.1} className="prose">
              <p>
                If you only have the vehicle in front of you, that is still
                enough. Send a photo on WhatsApp and the counter will identify
                it from there — it is what we do fifty times a day.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="wrap">
          <SectionHead code="BRANCHES" title="Six places to collect from" />
          <div className="branches">
            {branches.map((b, i) => (
              <Reveal className="branch" key={b.city} delay={(i % 3) * 0.06} amount={0.2}>
                <div>
                  <h3 className="branch__city">{b.city}</h3>
                  <p className="u-mono u-dim" style={{ marginTop: 6 }}>
                    {b.role}
                  </p>
                  <p className="branch__addr">{b.address}</p>
                </div>
                {telHref(b.tel) ? (
                  <a className="branch__tel" href={telHref(b.tel)}>
                    {b.tel}
                  </a>
                ) : (
                  <span className="branch__tel">{b.tel}</span>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
