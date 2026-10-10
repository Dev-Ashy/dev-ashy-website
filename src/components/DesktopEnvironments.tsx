"use client";

import { useState } from "react";
import Image from "next/image";

type DesktopEnvironment = {
  id: string;
  name: string;
  family: string;
  desc: string;
  image: string;
  packages: string[];
};

const environments: DesktopEnvironment[] = [
  {
    id: "hyprland",
    name: "Hyprland",
    family: "wayland · tiling",
    desc: "Modern dynamic tiling compositor — keyboard-first, heavily riceable.",
    image: "/images/slideshow/desktop-4k.jpg",
    packages: ["hyprland", "waybar", "hyprpaper", "rofi-wayland", "kitty"],
  },
  {
    id: "gnome",
    name: "GNOME",
    family: "wayland · mac-like",
    desc: "Clean, curated and predictable. The most polished default shell.",
    image: "/images/slideshow/linux-4k.jpg",
    packages: ["gnome-shell", "gnome-tweaks", "gdm", "nautilus", "gnome-terminal"],
  },
  {
    id: "kde",
    name: "KDE Plasma",
    family: "x11 + wayland · configurable",
    desc: "Feature-rich and endlessly configurable. A full desktop suite.",
    image: "/images/slideshow/ide-4k.jpg",
    packages: ["plasma-desktop", "sddm", "konsole", "dolphin", "kde-gtk-config"],
  },
  {
    id: "xfce",
    name: "XFCE",
    family: "x11 · lightweight",
    desc: "Fast and dependable — great on modest hardware and VMs.",
    image: "/images/slideshow/coding-4k.jpg",
    packages: ["xfce4", "xfce4-terminal", "thunar", "lightdm", "xfce4-goodies"],
  },
  {
    id: "cinnamon",
    name: "Cinnamon",
    family: "x11 · windows-like",
    desc: "Traditional desktop with a familiar taskbar layout.",
    image: "/images/slideshow/linux-4k.jpg",
    packages: ["cinnamon", "nemo", "lightdm", "mint-x-icons"],
  },
  {
    id: "mate",
    name: "MATE",
    family: "x11 · classic",
    desc: "Continuation of the GNOME 2 approach — light and honest.",
    image: "/images/slideshow/coding-4k.jpg",
    packages: ["mate-desktop", "mate-terminal", "caja", "lightdm"],
  },
  {
    id: "lxqt",
    name: "LXQt",
    family: "x11 + wayland · minimal",
    desc: "Very light Qt desktop for older machines.",
    image: "/images/slideshow/desktop-4k.jpg",
    packages: ["lxqt", "qterminal", "pcmanfm-qt", "sddm"],
  },
  {
    id: "budgie",
    name: "Budgie",
    family: "x11 + wayland · modern",
    desc: "Built by Solus — elegant panel and a modern feel.",
    image: "/images/slideshow/ide-4k.jpg",
    packages: ["budgie-desktop", "budgie-control-center", "lightdm"],
  },
];

const featured = environments.slice(0, 4);
const more = environments.slice(4);

export default function DesktopEnvironments() {
  const [selected, setSelected] = useState<DesktopEnvironment>(environments[0]);

  return (
    <div>
      {/* Featured gallery */}
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        {featured.map((env) => {
          const active = selected.id === env.id;
          return (
            <button
              key={env.id}
              type="button"
              onClick={() => setSelected(env)}
              aria-pressed={active}
              className={`panel text-left group relative overflow-hidden transition-all ${
                active
                  ? "!border-[#b8f36b] ring-1 ring-[#b8f36b]/40"
                  : "hover:border-[#3a453c]"
              }`}
            >
              <div className="relative h-36 overflow-hidden">
                <Image
                  src={env.image}
                  alt={`${env.name} desktop environment preview`}
                  fill
                  sizes="(max-width: 640px) 100vw, 300px"
                  className={`object-cover transition-opacity ${
                    active ? "opacity-90" : "opacity-60 group-hover:opacity-80"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121613] via-[#121613]/30 to-transparent" />
                {active && (
                  <span className="absolute top-3 right-3 badge badge-shipping">selected</span>
                )}
              </div>
              <div className="win-bar !border-t !border-b-0 !rounded-none bg-transparent">
                <span className={active ? "win-dot" : "win-dot win-dot-idle"} />
                {env.id}
              </div>
              <div className="px-5 py-4">
                <h3 className="font-display font-semibold text-[18px] text-[#f4f6f2] tracking-tight mb-1">
                  {env.name}
                </h3>
                <p className="font-mono text-[10.5px] text-[#7a847d] mb-2">{env.family}</p>
                <p className="font-mono text-[12.5px] text-[#a0aaa1] leading-relaxed">
                  {env.desc}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selection panel: internet download prompt */}
      <div className="panel overflow-hidden mb-8" id="os-select">
        <div className="win-bar">
          <span className="win-dot" />
          install · {selected.id}
        </div>
        <div className="p-7 md:p-9">
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
            <div className="flex-1">
              <h3 className="font-display font-semibold text-[21px] text-[#f4f6f2] tracking-tight mb-3">
                {selected.name} selected
              </h3>
              <p className="font-mono text-[14px] text-[#a0aaa1] leading-relaxed max-w-[58ch]">
                Make sure your machine is connected to the internet during
                installation — we&apos;ll download the packages for{" "}
                <span className="text-[#b8f36b] font-semibold">{selected.name}</span>{" "}
                and install everything automatically.
              </p>
            </div>
            <div className="terminal shrink-0 md:w-[300px]">
              <div className="terminal-body !py-4 !px-5 text-[12px] leading-[1.9]">
                <p className="text-[#7a847d] mb-1">
                  <span className="text-[#4ade80]">#</span> apt install
                </p>
                <p className="text-[#a0aaa1] break-words">
                  {selected.packages.join(" \\\n  ")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* All installable environments */}
      <div>
        <p className="eyebrow-mono mb-4">also installable</p>
        <div className="flex flex-wrap gap-2.5">
          {more.map((env) => {
            const active = selected.id === env.id;
            return (
              <button
                key={env.id}
                type="button"
                onClick={() => setSelected(env)}
                className={`chip !text-[12px] !px-4 !py-2 cursor-pointer transition-colors ${
                  active
                    ? "!text-[#b8f36b] !border-[#b8f36b]/50 bg-[#b8f36b]/5"
                    : "hover:!border-[#3a453c] hover:!text-[#f4f6f2]"
                }`}
              >
                {env.name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}