import { useState } from "react";
import HamburgerMenuLink from "./HamburgerMenuLink";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="absolute left-4">
      <button
        onClick={toggleMenu}
        className="flex h-8 w-8 cursor-pointer flex-col items-center justify-center space-y-1.5"
      >
        <div
          className={`h-1 w-8 transform rounded bg-foreground transition-transform ${isOpen ? "translate-y-2.5 rotate-45" : ""}`}
        ></div>
        <div
          className={`h-1 w-8 rounded bg-foreground transition-opacity ${isOpen ? "opacity-0" : ""}`}
        ></div>
        <div
          className={`h-1 w-8 transform rounded bg-foreground transition-transform ${isOpen ? "-translate-y-2.5 -rotate-45" : ""}`}
        ></div>
      </button>
      <div
        className={`absolute left-0 top-16 w-48 transform space-y-2 overflow-hidden rounded-lg border bg-zinc-50 p-2 transition-all ${isOpen ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"}`}
      >
        <HamburgerMenuLink url="#" toggleMenu={toggleMenu}>
          Home
        </HamburgerMenuLink>
        <HamburgerMenuLink url="#" toggleMenu={toggleMenu}>
          Cars
        </HamburgerMenuLink>
        <HamburgerMenuLink url="#" toggleMenu={toggleMenu}>
          Agencies
        </HamburgerMenuLink>
      </div>
    </div>
  );
}
