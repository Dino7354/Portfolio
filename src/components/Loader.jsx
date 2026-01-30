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
      {/* Outer Ring */}
      <div className="relative w-16 h-16">
        <motion.div
          className="absolute inset-0 rounded-full border-2 
                     border-neutral-300 dark:border-neutral-700"
        />

        {/* Rotating Stroke */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 
                     border-t-transparent border-black dark:border-white"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Loading Text */}
      <motion.p
        className="mt-6 text-sm tracking-[0.3em] uppercase 
                   text-neutral-700 dark:text-neutral-300"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
      >
        Loading
      </motion.p>
    </div>
  );
};

export default Loader;
