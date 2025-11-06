"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LogoWithEmojiOrbit() {
  const [hover, setHover] = useState(false);

  return (
    <Link
      href="/"
      className="relative flex items-center justify-center"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Quầng sáng nền */}
      <div
        className={`absolute transition-all duration-500 ${
          hover ? "opacity-80 scale-110" : "opacity-0 scale-90"
        }`}
        style={{
          width: 100,
          height: 100,
          borderRadius: "50%",
          background:
            "radial-gradient(circle at center, rgba(255,105,180,0.5) 0%, rgba(255,20,147,0.1) 70%, transparent 100%)",
          filter: "blur(8px)",
        }}
      ></div>

      {/* Logo */}
      <Image
        src="/baoanh.jpg"
        alt="Bảo Anh Film"
        width={70}
        height={70}
        className="rounded-full object-cover relative z-10 transition-transform duration-300 hover:scale-110"
        priority
      />

      {/* 💖 emoji xoay quanh logo */}
      {hover && (
        <span
          className="absolute animate-heartOrbit text-3xl"
          style={{
            top: "50%",
            left: "50%",
            filter: "drop-shadow(0 0 6px #ff66cc)",
          }}
        >
          💖
        </span>
      )}

      {/* ✨ emoji xoay ngược chiều */}
      {hover && (
        <span
          className="absolute animate-sparkleOrbit text-2xl"
          style={{
            top: "50%",
            left: "50%",
            filter: "drop-shadow(0 0 8px gold)",
          }}
        >
          ✨
        </span>
      )}
    </Link>
  );
}
