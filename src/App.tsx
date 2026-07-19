import { useEffect, useState, type MouseEvent } from 'react'
import { motion } from 'motion/react'
import { Copy, Check } from 'lucide-react'
import { categories } from './data/skills'
import './App.css'

const easeCustom = [0.23, 1, 0.32, 1] as const

function Hero() {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: easeCustom }}
    >
      <h1 className="hero-title">Skills</h1>
      <p className="hero-subtitle">
        A curated toolkit of <strong>38 agent skills</strong> for planning,
        engineering, design, and quality.
      </p>
    </motion.section>
  )
}

function InstallBlock() {
  const [copied, setCopied] = useState(false)
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([])

  const handleCopy = (e: MouseEvent<HTMLButtonElement>) => {
    navigator.clipboard.writeText('npx skills add metaloozee/skills')
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)

    const rect = e.currentTarget.getBoundingClientRect()
    const id = Date.now()
    setRipples((prev) => [
      ...prev,
      { id, x: e.clientX - rect.left, y: e.clientY - rect.top },
    ])
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id))
    }, 500)
  }

  return (
    <motion.section
      className="install"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: easeCustom, delay: 0.15 }}
    >
      <h2 className="section-label">Install</h2>
      <div className="install-block">
        <code className="install-code">npx skills add metaloozee/skills</code>
        <motion.button
          type="button"
          className="install-copy"
          onClick={handleCopy}
          aria-label={copied ? 'Copied' : 'Copy install command'}
          whileTap={{ scale: 0.88 }}
          transition={{ type: 'spring', stiffness: 500, damping: 28 }}
        >
          {ripples.map((r) => (
            <span
              key={r.id}
              className="install-copy-ripple"
              style={{ left: r.x, top: r.y }}
              aria-hidden="true"
            />
          ))}
          <span className="install-copy-vis">
            <Copy
              size={16}
              className={copied ? 'install-copy-svg--hidden' : ''}
              aria-hidden={copied}
            />
            <Check
              size={16}
              className={copied ? '' : 'install-copy-svg--hidden'}
              aria-hidden={!copied}
            />
          </span>
        </motion.button>
      </div>
    </motion.section>
  )
}

const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const headVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: easeCustom },
  },
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
}

const skillVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: easeCustom },
  },
}

function SkillCard({ name, description, source }: { name: string; description: string; source: string }) {
  const url = `https://github.com/${source}`
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="skill"
      variants={skillVariants}
    >
      <span className="skill-name">{name}</span>
      <span className="skill-source">{source}</span>
      <span className="skill-desc">{description}</span>
    </motion.a>
  )
}

function slugify(text: string): string {
  return text.toLowerCase().replace(/['&/]+/g, '').replace(/\s+/g, '-').replace(/-+/g, '-')
}

function CategorySection({ category }: { category: (typeof categories)[number] }) {
  return (
    <motion.section
      className="category"
      id={slugify(category.name)}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      <motion.div className="category-head" variants={headVariants}>
        <h2 className="category-name">{category.name}</h2>
        <p className="category-desc">{category.description}</p>
      </motion.div>
      <motion.div className="category-skills" variants={containerVariants}>
        {category.skills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </motion.div>
    </motion.section>
  )
}

function TOC() {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const ids = categories.map((c) => slugify(c.name))
    const topOffset = 48

    const handleScroll = () => {
      let current = ids[0]
      let minDist = Infinity
      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        const dist = Math.abs(el.getBoundingClientRect().top - topOffset)
        if (dist < minDist) {
          minDist = dist
          current = id
        }
      }
      setActiveId(current)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="toc" aria-label="Section navigation">
      <div className="toc-inner">
        <ul className="toc-list">
          {categories.map((cat) => {
            const id = slugify(cat.name)
            return (
              <li key={cat.name} className="toc-item">
                <a
                  href={`#${id}`}
                  className={`toc-link${activeId === id ? ' toc-link--active' : ''}`}
                >
                  {cat.name}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.23 0 1.61-.01 2.91-.01 3.31 0 .32.22.69.83.57C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M18.9 1.15h3.67l-8.02 9.17L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.47l8.58-9.81L0 1.15h7.59l5.24 6.93 6.07-6.93Zm-1.29 19.49h2.03L6.48 3.24H4.3l13.31 17.4Z" />
    </svg>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-credit">created by metaloozee</p>
      <div className="footer-links">
        <a
          href="https://github.com/metaloozee"
          target="_blank"
          rel="noreferrer"
          className="footer-icon"
          aria-label="GitHub"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://x.com/metaloozee"
          target="_blank"
          rel="noreferrer"
          className="footer-icon"
          aria-label="X"
        >
          <XIcon />
        </a>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <motion.div
      className="page"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: easeCustom }}
    >
      <div className="fade-edge fade-edge--top" aria-hidden="true" />
      <div className="fade-edge fade-edge--bottom" aria-hidden="true" />
      <div className="layout">
        <main className="main">
          <Hero />
          <InstallBlock />
          <div className="categories">
            {categories.map((category) => (
              <CategorySection key={category.name} category={category} />
            ))}
          </div>
        </main>
        <div className="toc-col">
          <TOC />
        </div>
      </div>
      <Footer />
    </motion.div>
  )
}
