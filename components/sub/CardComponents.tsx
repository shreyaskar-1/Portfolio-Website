"use client";

import React from "react";
import { motion } from "framer-motion";

interface CardContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const CardContainer: React.FC<CardContainerProps> = ({ children, className }) => {
  return (
    <motion.div
      className={`relative perspective-1000 ${className}`}
      whileHover={{
        rotateX: 15,
        rotateY: 15,
        scale: 1.1,  
      }}
    >
      {children}
    </motion.div>
  );
};

interface CardItemProps {
  children: React.ReactNode;
  className?: string;
  translateZ?: string;
  rotateX?: number;
  rotateY?: number;
  rotateZ?: number;
  as?: React.ElementType;  // Change to React.ElementType
}

export const CardItem: React.FC<CardItemProps> = ({
  children,
  className,
  translateZ = "0",
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  as: Component = "div",  // Default to "div" if not provided
}) => {
  return (
    <motion.div
      className={className}
      style={{
        transform: `translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`,
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
      }}
    >
      {React.createElement(Component, {}, children)}
    </motion.div>
  );
};
