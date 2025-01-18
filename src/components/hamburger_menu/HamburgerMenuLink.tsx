type HamburgerMenuLinkProps = {
  children?: React.ReactNode;
  toggleMenu?: () => void;
  url?: string;
};

export default function HamburgerMenuLink({
  children,
  toggleMenu,
  url,
}: HamburgerMenuLinkProps) {
  return (
    <a
      href={url}
      className="block rounded-md border px-6 py-4 text-center transition-all hover:bg-zinc-200 hover:font-bold active:bg-zinc-500 active:text-zinc-50"
      onClick={toggleMenu}
    >
      {children}
    </a>
  );
}
