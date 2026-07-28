import Reveal from './Reveal.jsx'

/**
 * `accent` is the tail of the heading, set in the brand yellow — the
 * two-tone title device used across the site.
 */
export default function SectionHead({ code, title, accent, sub, align = 'left' }) {
  return (
    <Reveal className={`shead${align === 'center' ? ' shead--center' : ''}`}>
      <p className="shead__code">{code}</p>
      <div>
        <h2 className="shead__title">
          {title}
          {accent && (
            <>
              {' '}
              <span className="shead__accent">{accent}</span>
            </>
          )}
        </h2>
        {sub && <p className="u-lead shead__sub">{sub}</p>}
      </div>
    </Reveal>
  )
}
