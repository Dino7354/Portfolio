import { motion } from "framer-motion";
import { useEffect } from "react";

const Loader = ({ setLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center
                 bg-[#f8f9fa] dark:bg-[#0a0a0a]"
    >
      {/* Brand Name */}
      <motion.h1
        className="text-2xl md:text-3xl font-semibold tracking-wide
                   text-neutral-900 dark:text-neutral-100"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        DinoProjectHub
      </motion.h1>

      {/* Animated Line */}
      <motion.div
        className="mt-3 h-[2px] w-24 bg-neutral-900 dark:bg-neutral-100 rounded-full"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: [0, 1, 0] }}
        transition={{
          duration: 1.6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ transformOrigin: "center" }}
      />

      {/* Subtle Caption */}
      <motion.p
        className="mt-6 text-xs tracking-[0.3em] uppercase
                   text-neutral-500 dark:text-neutral-400"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.6, repeat: Infinity }}
      >
        Loading Experience
      </motion.p>
    </div>
  );
};

export default Loader;
