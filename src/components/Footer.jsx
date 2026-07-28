import { Link } from 'react-router-dom'
import Brandmark from './Brandmark.jsx'
import { company, navItems } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          <div>
            <Link to="/" className="brand">
              <Brandmark />
              <span>
                <span className="brand__name">HUBCO</span>
                <span className="brand__tag">SPARE PARTS</span>
              </span>
            </Link>
            <p className="footer__blurb">
              {company.tagline}. Stocking, cross-referencing and dispatching
              genuine and aftermarket parts from {company.city} since{' '}
              {company.founded}.
            </p>
          </div>

          <div>
            <p className="footer__h">Pages</p>
            <div className="footer__list">
              {navItems.map((item) => (
                <Link key={item.to} to={item.to}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="footer__h">The counter</p>
            <div className="footer__list">
              <a href={`tel:${company.phone.replace(/\s/g, '')}`}>{company.phone}</a>
              <a href={`mailto:${company.email}`}>{company.email}</a>
              <span>{company.hours}</span>
              <span>
                Plot 44, Focal Point Phase IV,
                <br />
                Gill Road, Ludhiana 141010
              </span>
            </div>
          </div>
        </div>

        <div className="footer__bar">
          <span>
            © {new Date().getFullYear()} {company.legal}
          </span>
          <span>GSTIN 03AABCH1234F1Z7 · Est. {company.founded}</span>
        </div>
      </div>
    </footer>
  )
}
