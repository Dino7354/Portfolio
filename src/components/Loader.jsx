import { motion } from "framer-motion";
import { useEffect } from "react";

const Loader = ({ setLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center 
                 bg-[#f8f9fa] dark:bg-[#0a0a0a] 
                 text-[#0a0a0a] dark:text-white z-50"
    >
      <motion.div
        className="relative w-16 h-16 rounded-full flex items-center justify-center
                   bg-gradient-to-r from-pink-400 via-red-400 to-yellow-400 shadow-lg"
        animate={{ rotate: 360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      >
        <motion.div
          className="absolute w-20 h-20 rounded-full border-4 border-t-transparent border-red-400"
          animate={{ scale: [1, 1.2, 1], opacity: [1, 0.8, 1] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-12 h-12 rounded-full bg-gradient-to-r from-pink-400 via-red-400 to-yellow-400"
          animate={{ scale: [1, 0.9, 1] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <motion.p
        className="absolute bottom-20 text-[#0a0a0a] dark:text-white text-lg font-semibold drop-shadow-lg"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        Loading...
      </motion.p>
    </motion.div>
  );
};

export default Loader;
