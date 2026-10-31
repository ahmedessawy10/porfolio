"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050810]"
        >
          {/* Ambient glow */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00d4ff] rounded-full blur-[150px]"
            />
          </div>

          <div className="relative flex flex-col items-center gap-8">
            {/* Logo / name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <span className="text-4xl font-bold tracking-tight bg-gradient-to-r from-[#00d4ff] to-[#00ff88] bg-clip-text text-transparent">
                AM
              </span>
              <p className="text-sm text-[#94a3b8] font-mono tracking-widest uppercase mt-2">
                Ahmed Mostafa
              </p>
            </motion.div>

            {/* Spinner ring */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="relative w-12 h-12"
            >
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#00d4ff] border-r-[#00d4ff]/40"
              />
              <span className="absolute inset-[5px] rounded-full border border-[#00d4ff]/10" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
