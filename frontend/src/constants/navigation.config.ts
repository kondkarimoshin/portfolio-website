export type NavigationType = "section" | "page";

export interface NavigationItem {
  label: string;
  href: string;
  type: NavigationType;
}

export const navigationItems: NavigationItem[] = [
  {
    label: "Home",
    href: "/#hero",
    type: "section",
  },
  {
    label: "Beyond Resume",
    href: "/#about",
    type: "section",
  },
  {
    label: "Experience",
    href: "/#experience",
    type: "section",
  },
  {
    label: "Skills",
    href: "/#skills",
    type: "section",
  },
  {
    label: "Contact",
    href: "/#contact",
    type: "section",
  },
  {
    label: "Programs & Services",
    href: "/services",
    type: "page",
  },
];