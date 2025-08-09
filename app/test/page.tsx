"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Projets", path: "/Projets" },
  { label: "Contact", path: "/Contact" },
];

export default function NavSwitchBar() {
  const pathname = usePathname();

  return (
    <nav className="w-full max-w-md mx-auto flex rounded-xl overflow-hidden shadow-lg">
      {navItems.map((item, i) => {
        const active = pathname === item.path;
        return (
          <Link key={item.path} href={item.path} className="flex-1">
            <div
              className={clsx(
                "h-[58px] flex items-center justify-center select-none font-semibold transition-all duration-200 text-lg",
                "border-r border-[#23252c] last:border-r-0",
                active
                  ? "bg-[#363940] shadow-[0_0_20px_#93f5ff80,0_2px_18px_#23252c] text-white relative"
                  : "bg-[#2c2f35] shadow-[4px_4px_13px_#23252c,-4px_-4px_10px_#484c56] text-[#c0c9d4] hover:text-white"
              )}
              style={{
                boxShadow: active
                  ? "0 0 22px #7be8ff88, 0 2px 18px #23252c"
                  : "4px 4px 13px #23252c, -4px -4px 10px #484c56",
                zIndex: active ? 2 : 1,
              }}
            >
              <span
                className={clsx(
                  "transition-all duration-200 tracking-widest",
                  active
                    ? "text-[1.22rem] font-bold drop-shadow-[0_0_8px_#d2faffcc] animate-pulse"
                    : "opacity-80"
                )}
                style={{
                  textShadow: active
                    ? "0 0 9px #e7faff, 0 0 12px #94eaff"
                    : "none",
                }}
              >
                {item.label.toUpperCase()}
              </span>
              {/* GLOW sous le bouton actif */}
              {active && (
                <span className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-16 h-2 rounded-full bg-[#b8eaff] blur-[4px] opacity-75 pointer-events-none" />
              )}
            </div>
          </Link>
        );
      })}
    </nav>
  );
}
