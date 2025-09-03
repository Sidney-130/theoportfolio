"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const texts = [
  "Content Writer",
  "Brand Storyteller",
  "Growth Manager",
  "Social/Community Manager",
  "Technical Writer",
];

export default function AnimatedText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-between h-16 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={texts[index]}
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="text-2xl font-semibold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent"
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

export function AnimatedCard({
  children,
  gradientFrom,
  gradientTo,
}: {
  children: React.ReactNode;
  gradientFrom: string;
  gradientTo: string;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 120, damping: 16 }}
      className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-5 shadow-md hover:shadow-lg"
    >
      {/* 🔥 Animated gradient bar moved here */}
      <motion.div
        className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${gradientFrom} ${gradientTo}`}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          filter: ["brightness(100%)", "brightness(120%)", "brightness(100%)"],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundSize: "400% 400%", // 👈 make the gradient larger
          backgroundRepeat: "no-repeat",
        }}
      />

      {children}
    </motion.div>
  );
}
