"use client";
import React from "react";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

// Define the props interface for the Animate component
interface AnimateProps {
  children: React.ReactNode;
  className?: string;
}

const Animate: React.FC<AnimateProps> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {}, [isInView]);

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 80 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Animate;
