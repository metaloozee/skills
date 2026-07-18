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
          transition={{ type: 'spring', stiffness: 500, damping: 22 }}
        >
          {ripples.map((r) => (
            <span
              key={r.id}
              className="install-copy-ripple"
              style={{ left: r.x, top: r.y }}
              aria-hidden="true"
            />
          ))}
          <motion.span
            className="install-copy-vis"
            key={copied ? 'check' : 'copy'}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 520, damping: 18 }}
          >
            {copied ? (
              <Check size={16} aria-hidden />
            ) : (
              <Copy size={16} aria-hidden />
            )}
          </motion.span>
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
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  )
}

function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: easeCustom }}
    >
      <p className="footer-text">created by metaloozee</p>
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
    </motion.footer>
  )
}

export default function App() {
  return (
    <div className="page">
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
          <Footer />
        </main>
        <div className="toc-col">
          <TOC />
        </div>
      </div>
    </div>
  )
}
