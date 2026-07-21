import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { Link } from "react-router-dom";
import clsx from "clsx";

import Container from "../components/ui/Container";
import { navigationItems } from "../constants/navigation.config";
import useActiveNavigation from "../hooks/useActiveNavigation";

import logo from "../assets/branding/logo-dark.webp";

import AvatarButton from "./components/AvatarButton";
import AvatarModal from "./components/AvatarModal";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAvatarOpen, setIsAvatarOpen] = useState(false);

  const { isActive } = useActiveNavigation();

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
        <Container>
          <div className="flex h-20 items-center justify-between">

            {/* Logo */}

            <Link
              to="/#hero"
              aria-label="Go to Home"
              className="transition-opacity hover:opacity-90"
            >
              <img
                src={logo}
                alt="Moshin Kondkari Logo"
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}

            <div className="hidden items-center gap-6 lg:flex">

              <nav aria-label="Primary Navigation">

                <ul className="flex items-center gap-10 text-sm font-medium">

                  {navigationItems.map((item) => (

                    <li key={item.href}>

                      <Link
                        to={item.href}
                        className={clsx(
                          "transition-colors duration-300 hover:text-cyan-400",
                          isActive(item)
                            ? "font-semibold text-cyan-400"
                            : "text-slate-300"
                        )}
                      >
                        {item.label}
                      </Link>

                    </li>

                  ))}

                </ul>

              </nav>

              <AvatarButton onClick={() => setIsAvatarOpen(true)} />

            </div>

            {/* Mobile Header */}

            <div className="flex items-center gap-3 lg:hidden">

              <AvatarButton onClick={() => setIsAvatarOpen(true)} />

              <button
                onClick={() => setIsMenuOpen(true)}
                className="rounded-lg p-2 text-slate-300 transition hover:bg-slate-800 hover:text-white"
                aria-label="Open Menu"
              >
                <HiOutlineMenu size={28} />
              </button>

            </div>

          </div>
        </Container>
      </header>

      {/* Mobile Navigation */}

      {isMenuOpen && (

        <div className="fixed inset-0 z-[100] bg-slate-950 lg:hidden">

          <Container>

            {/* Mobile Header */}

            <div className="flex h-20 items-center justify-between">

              <Link
                to="/#hero"
                onClick={closeMenu}
              >
                <img
                  src={logo}
                  alt="Moshin Kondkari Logo"
                  className="h-12 w-auto"
                />
              </Link>

              <button
                onClick={closeMenu}
                className="rounded-lg p-2 text-slate-300 transition hover:bg-slate-800 hover:text-white"
                aria-label="Close Menu"
              >
                <HiOutlineX size={30} />
              </button>

            </div>

            {/* Mobile Navigation */}

            <nav
              className="mt-10"
              aria-label="Mobile Navigation"
            >

              <ul className="space-y-6 text-center">

                {navigationItems.map((item) => (

                  <li key={item.href}>

                    <Link
                      to={item.href}
                      onClick={closeMenu}
                      className={clsx(
                        "block rounded-lg py-2 text-2xl font-medium tracking-wide transition-all duration-300 hover:scale-105 hover:text-cyan-400",
                        isActive(item)
                          ? "font-semibold text-cyan-400"
                          : "text-slate-100"
                      )}
                    >
                      {item.label}
                    </Link>

                  </li>

                ))}

              </ul>

            </nav>

          </Container>

        </div>

      )}

      {/* Avatar Modal */}

      <AvatarModal
        isOpen={isAvatarOpen}
        onClose={() => setIsAvatarOpen(false)}
      />

    </>
  );
};

export default Navbar;