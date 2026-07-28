import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Brandmark from './Brandmark.jsx'
import { company, navItems } from '../data/site.js'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const reduce = useReducedMotion()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header className="nav">
        <div className="nav__inner">
          <Link to="/" className="brand" aria-label={`${company.name} — home`}>
            <Brandmark />
            <span>
              <span className="brand__name">HUBCO</span>
              <span className="brand__tag">SPARE PARTS</span>
            </span>
          </Link>

          <nav className="nav__links" aria-label="Main">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `nav__link${isActive ? ' is-active' : ''}`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="nav__pill"
                        transition={
                          reduce
                            ? { duration: 0 }
                            : { type: 'spring', stiffness: 420, damping: 36 }
                        }
                      />
                    )}
                    <span className="nav__label">{item.label}</span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <a className="btn nav__cta" href={`tel:${company.phone.replace(/\s/g, '')}`}>
            Call the counter
          </a>

          <button
            type="button"
            className={`nav__burger${open ? ' is-open' : ''}`}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav__drawer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.38, ease: [0.22, 0.68, 0, 1] }}
          >
            <div className="nav__drawer-list">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 + i * 0.045, duration: 0.35 }}
                >
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      `nav__drawer-link${isActive ? ' is-active' : ''}`
                    }
                  >
                    <span className="nav__drawer-num">{item.code}</span>
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
