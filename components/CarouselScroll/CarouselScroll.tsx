"use client";

import React, { ReactNode, useRef, useState, MouseEvent } from "react";
import styles from "@/components/CarouselScroll/styles.module.scss";

type CarouselScrollProps = {
  children: ReactNode;
};

const CarouselScroll = ({ children }: CarouselScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current!.offsetLeft);
    setScrollLeft(containerRef.current!.scrollLeft);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    const x = e.pageX - containerRef.current!.offsetLeft;
    const walk = (x - startX) * 2; // You can adjust the multiplier for a smoother scroll
    containerRef.current!.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={containerRef}
      className={styles.carouselContainer}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className={styles.carousel}>{children}</div>
    </div>
  );
};

export default CarouselScroll;
