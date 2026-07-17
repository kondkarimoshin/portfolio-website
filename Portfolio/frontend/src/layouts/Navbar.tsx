import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

import Container from "../components/ui/Container";
import { navigationItems } from "../constants/navigation";

import clsx from "clsx";
import useActiveSection from "../hooks/useActiveSection";

import logo from "../assets/branding/logo2.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection();
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">

        <Container>

          <div className="flex h-20 items-center justify-between">

            {/* Logo */}

            <a
              href="#hero"
              aria-label="Go to Home"
              className="text-2xl font-bold tracking-wide text-cyan-400 transition-colors hover:text-cyan-300"
            >
              <img
                src={logo}
                alt="Moshin Kondkari Logo"
                className="h-12 w-auto pl-2"
              />
            </a>

            {/* Desktop Navigation */}

            <nav
              className="hidden lg:block"
              aria-label="Primary Navigation"
            >

              <ul className="flex items-center gap-10 text-sm font-medium text-slate-300">

                {navigationItems.map((item) => (

                  <li key={item.href}>

                    <a
                      href={item.href}
                      className={clsx(
                        "transition-colors duration-300 hover:text-cyan-400",
                        activeSection === item.href.replace("#", "")
                          ? "font-semibold text-cyan-400"
                          : "text-slate-300"
                      )}
                    >
                      {item.label}
                    </a>

                  </li>

                ))}

              </ul>

            </nav>

            {/* Mobile Menu Button */}

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

      {/* Mobile Navigation */}

      {isMenuOpen && (

        <div className="fixed inset-0 z-[100] bg-slate-950 lg:hidden">

          <Container>

            {/* Header */}

            <div className="flex h-20 items-center justify-between">

              <img
                src={logo}
                alt="Moshin Kondkari Logo"
                className="h-12 w-auto pl-2"
              />

              <button
                onClick={closeMenu}
                className="rounded-lg p-2 transition-colors hover:bg-slate-800"
                aria-label="Close Menu"
              >
                <HiOutlineX size={30} />
              </button>

            </div>

            {/* Navigation */}

            <nav
              className="mt-10"
              aria-label="Mobile Navigation"
            >

              <ul className="space-y-6 text-center">

                {navigationItems.map((item) => (

                  <li key={item.href}>

                    <a
                      href={item.href}
                      onClick={closeMenu}
                      className={clsx(
                        "block rounded-lg py-2 text-2xl font-medium tracking-wide transition-all duration-300 hover:scale-105 hover:text-cyan-400",
                        activeSection === item.href.replace("#", "")
                          ? "font-semibold text-cyan-400"
                          : "text-slate-100"
                      )}
                    >
                      {item.label}
                    </a>

                  </li>

                ))}

              </ul>

            </nav>

          </Container>

        </div>

      )}

    </>
  );
};

export default Navbar;