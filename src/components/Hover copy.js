"use client";
import Image from "next/image";
import Link from "next/link";
import { HeartFilled } from "@ant-design/icons";
import { useState } from "react";

export default function LogoWithHearts() {
  const [hover, setHover] = useState(false);

  const hearts = Array.from({ length: 12 });
  const sparkles = Array.from({ length: 10 });

  return (
    <Link
      href="/"
      className="relative flex items-center justify-center"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Ảnh trung tâm */}
      <Image
        src="/baoanh.jpg"
        alt="Bảo Anh Film"
        width={70}
        height={70}
        className="rounded-full object-cover transition-transform duration-300 hover:scale-110"
        priority
      />

      {/* Tim trung tâm */}
      <HeartFilled
        className={`absolute transition-all duration-300 ${
          hover ? "scale-125 opacity-100" : "scale-0 opacity-0"
        }`}
        style={{
          fontSize: 30,
          color: "transparent",
          backgroundImage: "linear-gradient(135deg, #ff3366, #ff66cc, #ff1493)",
          WebkitBackgroundClip: "text",
          filter: "drop-shadow(0 0 8px #ff66b2)",
        }}
      />

      {/* Tim bay tỏa tròn, có màu gradient */}
      {hover &&
        hearts.map((_, i) => {
          const angle = (i / hearts.length) * 2 * Math.PI;
          const x = Math.cos(angle) * 70;
          const y = Math.sin(angle) * 70;
          const delay = i * 0.05;

          const colors = [
            "#ff3366",
            "#ff6699",
            "#ff99cc",
            "#ff33cc",
            "#ff66ff",
            "#ff1493",
          ];
          const color = colors[i % colors.length];

          return (
            <HeartFilled
              key={i}
              className="absolute animate-heartOrbit"
              style={{
                top: "50%",
                left: "50%",
                transform: `translate(-50%, -50%)`,
                animationDelay: `${delay}s`,
                color,
                fontSize: 18 + Math.random() * 8,
                "--x": `${x}px`,
                "--y": `${y}px`,
                filter: "drop-shadow(0 0 5px rgba(255,105,180,0.8))",
              }}
            />
          );
        })}

      {/* ✨ Lấp lánh chia đều và phân tán rộng hơn */}
      {hover &&
        sparkles.map((_, i) => {
          const angle = (i / sparkles.length) * 2 * Math.PI;
          const radius = 40 + Math.random() * 30;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          const delay = i * 0.15;

          return (
            <span
              key={i}
              className="absolute animate-sparkle text-yellow-300"
              style={{
                top: "50%",
                left: "50%",
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                animationDelay: `${delay}s`,
                fontSize: 12 + Math.random() * 8,
                filter: "drop-shadow(0 0 6px gold)",
              }}
            >
              ✨
            </span>
          );
        })}
    </Link>
  );
}
