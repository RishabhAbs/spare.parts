import { Link } from 'react-router-dom'
import Brandmark from './Brandmark.jsx'
import { company, mailHref, navItems, telHref } from '../data/site.js'

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
              {telHref(company.phone) ? (
                <a href={telHref(company.phone)}>{company.phone}</a>
              ) : (
                <span>{company.phone}</span>
              )}
              {mailHref(company.email) ? (
                <a href={mailHref(company.email)}>{company.email}</a>
              ) : (
                <span>{company.email}</span>
              )}
              <span>{company.hours}</span>
              <span>{company.address}</span>
            </div>
          </div>
        </div>

        <div className="footer__bar">
          <span>
            © {new Date().getFullYear()} {company.legal}
          </span>
          <span>
            GSTIN {company.gstin} · Est. {company.founded}
          </span>
        </div>
      </div>
    </footer>
  )
}
