import { useEffect, useState } from 'react'
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

  const handleCopy = () => {
    navigator.clipboard.writeText('npx skills add metaloozee/skills')
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
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
        <button
          type="button"
          className="install-copy"
          onClick={handleCopy}
          aria-label={copied ? 'Copied' : 'Copy install command'}
        >
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
        </button>
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

function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: easeCustom }}
    >
      <p>created by metaloozee</p>
      <div className="footer-links" aria-label="Social links">
        <a
          className="footer-link"
          href="https://x.com/metaloozee"
          target="_blank"
          rel="noreferrer"
          aria-label="metaloozee on X"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64Z" />
          </svg>
        </a>
        <a
          className="footer-link"
          href="https://github.com/metaloozee"
          target="_blank"
          rel="noreferrer"
          aria-label="metaloozee on GitHub"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M12 2C6.48 2 2 6.58 2 12.22c0 4.51 2.87 8.34 6.84 9.69.5.09.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.33 9.33 0 0 1 12 6.93c.85 0 1.7.12 2.5.34 1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.59.69.49A10.04 10.04 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z" />
          </svg>
        </a>
      </div>
    </motion.footer>
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
