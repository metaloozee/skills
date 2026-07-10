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
        </main>
        <div className="toc-col">
          <TOC />
        </div>
      </div>
    </div>
  )
}
