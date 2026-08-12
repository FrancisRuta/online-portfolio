import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { companies } from '../data/portfolioData'
import ProjectCard from './ProjectCard'

// Seconds between automatic slide transitions
const AUTOPLAY_INTERVAL = 5000

function Companies() {
  const filters = ['All', ...new Set(companies.map((p) => p.category))]
  const [filter, setFilter] = useState('All')
  const [index, setIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const timerRef = useRef(null)

  const filteredCompanies =
    filter === 'All'
      ? companies
      : companies.filter((p) => p.category === filter)

  // Reset the autoplay timer whenever the slide, filter, or play state changes
  useEffect(() => {
    if (!isPlaying) return

    timerRef.current = setInterval(() => {
      setIndex((i) =>
        i === filteredCompanies.length - 1 ? 0 : i + 1
      )
    }, AUTOPLAY_INTERVAL)

    return () => clearInterval(timerRef.current)
  }, [index, filter, isPlaying, filteredCompanies.length])

  // Reset to the first slide whenever the filter changes
  const handleFilter = (cat) => {
    setFilter(cat)
    setIndex(0)
    setIsPlaying(true)
  }

  // Pause autoplay briefly on manual navigation so the timer doesn't fight the user
  const pauseAnd = (action) => {
    setIsPlaying(false)
    action()
    // Resume after a short grace period
    setTimeout(() => setIsPlaying(true), AUTOPLAY_INTERVAL)
  }

  const handlePrev = () => {
    pauseAnd(() =>
      setIndex((i) =>
        i === 0 ? filteredCompanies.length - 1 : i - 1
      )
    )
  }

  const handleNext = () => {
    pauseAnd(() =>
      setIndex((i) =>
        i === filteredCompanies.length - 1 ? 0 : i + 1
      )
    )
  }

  const handleDotClick = (i) => {
    pauseAnd(() => setIndex(i))
  }

  const handleDragEnd = (event, info) => {
    // Swipe left -> next, swipe right -> previous
    if (info.offset.x < -50) handleNext()
    else if (info.offset.x > 50) handlePrev()
  }

  // Start or stop autoplay on hover so users can read without interruptions
  const handleMouseEnter = () => setIsPlaying(false)
  const handleMouseLeave = () => setIsPlaying(true)

  const currentCompany = filteredCompanies[index]

  return (
    <section id="companies" className="section">
      <div className="container">
        <h2 className="section-title">Companies</h2>
        <p className="section-subtitle">
          A selection of companies I've worked with. Click through to see the code or live demo.
        </p>

        <div className="project-filters">
          {filters.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => handleFilter(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {filteredCompanies.length > 0 ? (
          <>
            <div
              className="carousel"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="carousel-arrow carousel-arrow--left"
                onClick={handlePrev}
                aria-label="Previous company"
              >
                ←
              </button>

              <div className="carousel-viewport">
                <motion.div
                  className="carousel-track"
                  key={`${filter}-${index}`}
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -60 }}
                  transition={{ duration: 0.4 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={handleDragEnd}
                  whileTap={{ cursor: 'grabbing' }}
                >
                  <ProjectCard project={currentCompany} />
                </motion.div>
              </div>

              <button
                className="carousel-arrow carousel-arrow--right"
                onClick={handleNext}
                aria-label="Next company"
              >
                →
              </button>
            </div>

            <div className="carousel-dots">
              {filteredCompanies.map((company, i) => (
                <button
                  key={company.title}
                  className={`carousel-dot ${i === index ? 'active' : ''}`}
                  onClick={() => handleDotClick(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <p className="carousel-counter">
              {index + 1} / {filteredCompanies.length}
            </p>
          </>
        ) : (
          <p className="section-subtitle">No companies found.</p>
        )}
      </div>
    </section>
  )
}

export default Companies
