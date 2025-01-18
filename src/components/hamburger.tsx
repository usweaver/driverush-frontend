import { Menu } from "lucide-react";

export default function Hamburger() {
  return (
    <div className="absolute left-4 top-[1.4rem]">
      <div className="rounded-md border px-2 py-1">
        <Menu />
      </div>
      <div>Menu</div>
    </div>
  );
}
