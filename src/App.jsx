import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import FloatingContact from './components/FloatingContact.jsx'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Journey from './pages/Journey.jsx'
import Partners from './pages/Partners.jsx'
import Team from './pages/Team.jsx'
import Contact from './pages/Contact.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])
  return null
}

function Page({ children }) {
  const reduce = useReducedMotion()
  return (
    <motion.main
      id="main"
      className="page"
      initial={reduce ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduce ? {} : { opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: [0.22, 0.68, 0, 1] }}
    >
      {children}
    </motion.main>
  )
}

export default function App() {
  const location = useLocation()

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Nav />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <Page>
                <Home />
              </Page>
            }
          />
          <Route
            path="/about"
            element={
              <Page>
                <About />
              </Page>
            }
          />
          <Route
            path="/journey"
            element={
              <Page>
                <Journey />
              </Page>
            }
          />
          <Route
            path="/partners"
            element={
              <Page>
                <Partners />
              </Page>
            }
          />
          <Route
            path="/team"
            element={
              <Page>
                <Team />
              </Page>
            }
          />
          <Route
            path="/contact"
            element={
              <Page>
                <Contact />
              </Page>
            }
          />
          <Route
            path="*"
            element={
              <Page>
                <Home />
              </Page>
            }
          />
        </Routes>
      </AnimatePresence>
      <FloatingContact />
      <Footer />
    </>
  )
}
