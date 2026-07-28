import Reveal from './Reveal.jsx'

export default function SectionHead({ code, title, sub }) {
  return (
    <Reveal className="shead">
      <p className="shead__code">{code}</p>
      <div>
        <h2 className="shead__title">{title}</h2>
        {sub && <p className="u-lead shead__sub">{sub}</p>}
      </div>
    </Reveal>
  )
}
