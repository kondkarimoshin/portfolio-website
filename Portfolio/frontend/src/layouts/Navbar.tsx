import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Container from "../components/ui/Container";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">

        <Container>

          <div className="flex h-20 items-center justify-between">

            {/* Logo */}

            <a
              href="#"
              className="text-2xl font-bold tracking-wide text-blue-500 transition-colors hover:text-blue-400"
            >
              MK
            </a>

            {/* Desktop Navigation */}

            <nav className="hidden lg:block">

              <ul className="flex items-center gap-10 text-sm font-medium text-slate-300">

                <li>
                  <a href="#" className="transition hover:text-blue-400">
                    Home
                  </a>
                </li>

                <li>
                  <a href="#about" className="transition hover:text-blue-400">
                    About
                  </a>
                </li>

                <li>
                  <a href="#experience" className="transition hover:text-blue-400">
                    Experience
                  </a>
                </li>

                <li>
                  <a href="#projects" className="transition hover:text-blue-400">
                    Projects
                  </a>
                </li>

                <li>
                  <a href="#skills" className="transition hover:text-blue-400">
                    Skills
                  </a>
                </li>

                <li>
                  <a href="#contact" className="transition hover:text-blue-400">
                    Contact
                  </a>
                </li>

              </ul>

            </nav>

            {/* Mobile Button */}

            <button
              onClick={() => setIsMenuOpen(true)}
              className="rounded-lg p-2 text-slate-300 transition hover:bg-slate-800 hover:text-white lg:hidden"
              aria-label="Open Menu"
            >
              <HiOutlineMenu size={28} />
            </button>

          </div>

        </Container>

      </header>

      {/* ============================== */}
      {/* Full Screen Mobile Navigation */}
      {/* ============================== */}

      {isMenuOpen && (

        <div className="fixed inset-0 z-[100] bg-slate-950 lg:hidden">

          <Container>

            {/* Header */}

            <div className="flex h-20 items-center justify-between">

              <span className="text-2xl font-bold text-blue-500">
                MK
              </span>

              <button
                onClick={closeMenu}
                className="rounded-lg p-2 transition-colors hover:bg-slate-800"
                aria-label="Close Menu"
              >
                <HiOutlineX size={30} />
              </button>

            </div>

            {/* Navigation */}

            <nav className="mt-10">

              <ul className="space-y-6 text-center">

                <li>
                  <a
                    href="#"
                    onClick={closeMenu}
                    className="block rounded-lg py-2 text-2xl font-medium tracking-wide text-slate-100 transition-all duration-300 hover:text-blue-400 hover:scale-105"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    href="#about"
                    onClick={closeMenu}
                    className="block rounded-lg py-2 text-2xl font-medium tracking-wide text-slate-100 transition-all duration-300 hover:text-blue-400 hover:scale-105"
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    href="#experience"
                    onClick={closeMenu}
                    className="block rounded-lg py-2 text-2xl font-medium tracking-wide text-slate-100 transition-all duration-300 hover:text-blue-400 hover:scale-105"
                  >
                    Experience
                  </a>
                </li>

                <li>
                  <a
                    href="#projects"
                    onClick={closeMenu}
                    className="block rounded-lg py-2 text-2xl font-medium tracking-wide text-slate-100 transition-all duration-300 hover:text-blue-400 hover:scale-105"
                  >
                    Projects
                  </a>
                </li>

                <li>
                  <a
                    href="#skills"
                    onClick={closeMenu}
                    className="block rounded-lg py-2 text-2xl font-medium tracking-wide text-slate-100 transition-all duration-300 hover:text-blue-400 hover:scale-105"
                  >
                    Skills
                  </a>
                </li>

                <li>
                  <a
                    href="#contact"
                    onClick={closeMenu}
                    className="block rounded-lg py-2 text-2xl font-medium tracking-wide text-slate-100 transition-all duration-300 hover:text-blue-400 hover:scale-105"
                  >
                    Contact
                  </a>
                </li>

              </ul>

            </nav>

          </Container>

        </div>

      )}

    </>
  );
};

export default Navbar;