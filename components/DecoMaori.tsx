'use client';

import React from "react";
import styles from "@styles/component/DecoMaori.module.css";

type MaoriDecoProps = {
  image: string;
  alt?: string;
  position?: "top-left" | "top-right" | "top-center" | "middle-left" | "middle-right" | "bottom-left" | "bottom-right" | "bottom-center";
  size?: number;
  rotate?: number;
};

export default function MaoriDeco({
  image,
  alt = "Décoration Maori",
  position = "top-left",
  size = 80,
  rotate = 0,
}: MaoriDecoProps) {
  const className = `${styles.decorativeElement} ${styles[position]}`;

const shouldFlip = rotate === 180;

const style: React.CSSProperties = {
  width: `${size}px`,
  transform: shouldFlip
    ? `rotate(0deg) scaleX(-1)`
    : `rotate(${rotate}deg)`,
};

  return (
    <img
      src={image}
      alt={alt}
      className={className}
      style={style}
      aria-hidden="true"
    />
  );
}
