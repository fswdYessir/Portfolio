import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 ">
      <nav className="hidden lg:flex w-full py-5 px-5 lg:px-10">
        <ul className="flex justify-end w-full gap-6">
          <li>
            <a href="#hero" className="text-white hover:text-gray-200">
              <h2>Home</h2>
            </a>
          </li>
          <li>
            <a href="#projects" className="text-white hover:text-gray-200">
              <h2>Projects</h2>
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-gray-200">
              <h2>Contact</h2>
            </a>
          </li>
        </ul>
      </nav>

      <nav className="lg:hidden p-4">
        <div className="max-w-screen-xl flex justify-end items-end ">
          <p>
            <button
              type="button"
              className=" text-2xl focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </p>
        </div>

        <div className={`w-full ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="max-w-screen-xl flex flex-col items-end gap-4 mt-4 py-4">
            <li>
              <a
                href="#hero"
                className="block px-3 hover:scale-110 active:translate-y-1"
                onClick={() => setIsOpen(false)}
              >
                <p>Home</p>
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block px-3 hover:scale-110 active:translate-y-1"
                onClick={() => setIsOpen(false)}
              >
                <p>Projects</p>
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block px-3 hover:scale-110 active:translate-y-1"
                onClick={() => setIsOpen(false)}
              >
                <p>Contact</p>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
