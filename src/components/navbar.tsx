import Container from "./Container";
import HamburgerMenu from "./hamburger_menu/HamburgerMenu";

export default function Navbar() {
  return (
    <>
      <div className="flex min-h-10 w-full items-center justify-center bg-blue-500 py-2">
        <Container>
          <p className="text-center text-sm text-zinc-100">
            Démonstration technique. Les données et fonctionnalités de ce site
            web sont présentées à titre d'exemple.
          </p>
        </Container>
      </div>
      <div className="relative flex h-20 w-full items-center border-b bg-zinc-50">
        <Container className="flex items-center justify-center">
          <HamburgerMenu />
          <span className="font-oxanium text-3xl font-bold uppercase italic tracking-tighter text-logo">
            DriveRush
          </span>
        </Container>
      </div>
    </>
  );
}
