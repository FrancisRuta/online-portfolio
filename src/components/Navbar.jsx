import { useState, useEffect } from 'react'
import { profile } from '../data/portfolioData'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Companies', href: '#companies' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) =>
        document.querySelector(item.href)
      )
      const scrollPos = window.scrollY + 100

      let current = '#home'
      sections.forEach((section, index) => {
        if (section && section.offsetTop <= scrollPos) {
          current = navItems[index].href
        }
      })
      setActive(current)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (href) => {
    setOpen(false)
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToTop = () => {
    setOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); scrollToTop() }}>
          FR
          <span style={{ color: 'var(--accent-cyan)', WebkitTextFillColor: 'var(--accent-cyan)' }}></span>
        </a>

        <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={active === item.href ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); handleClick(item.href) }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
