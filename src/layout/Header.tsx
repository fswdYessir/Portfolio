import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { t, i18n } = useTranslation()
  const locale = i18n.language

  const navItems = [
    { href: '/#hero', label: t('nav.home') },
    { href: '/#projects', label: t('nav.projects') },
    { href: '/#contact', label: t('nav.contact') },
  ]

  const langBtn = (code: 'en' | 'ko') => (
    <button
      type="button"
      onClick={() => i18n.changeLanguage(code)}
      className={`px-2 py-1 rounded transition-colors hover:cursor-pointer ${
        locale === code ? 'header-accent' : 'header-muted'
      }`}
    >
      {code.toUpperCase()}
    </button>
  )

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="hidden lg:flex w-full py-4 px-5 lg:px-10 items-center justify-end gap-6">
        <ul className="flex gap-6">
          {navItems.map(item => (
            <li key={item.href}>
              <a href={item.href} className="header-link">
                <h2 className="font-display text-xl uppercase transition-colors">{item.label}</h2>
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-1 text-sm font-semibold">
          {langBtn('en')}
          <span className="header-muted">|</span>
          {langBtn('ko')}
        </div>
      </nav>

      <nav className="lg:hidden p-4">
        <div className="max-w-screen-xl flex justify-between items-center">
          <div className="flex items-center gap-1 text-sm font-semibold">
            {langBtn('en')}
            <span className="header-muted">|</span>
            {langBtn('ko')}
          </div>
          <button
            type="button"
            className="text-2xl focus:outline-none header-link"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {isOpen && (
          <ul className="max-w-screen-xl flex flex-col items-end gap-3 mt-3 py-2">
            {navItems.map(item => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block px-3 header-link text-xl font-display uppercase transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  )
}
