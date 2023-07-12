import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "@phosphor-icons/react";
import { AnimatePresence } from "framer-motion";
import ScrollProgress from "./scroll-progress";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState();

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);

    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.7, y: 10, x: "-50%" }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.2 },
          }}
          exit={{ opacity: 0, scale: 0.5, y: 10 }}
          onClick={scrollToTop}
          className="fixed bottom-4 left-1/2 -translate-x-1/2 shadow-[inset_0_0_0_1px] text-white shadow-black/10 bg-black/40 flex items-center space-x-3 text-sm backdrop-blur-sm text-slate-700 rounded-full pl-2.5 pr-1.5 py-1.5 outline-2 outline outline-offset-2 outline-transparent focus:outline-black/70"
        >
          <ArrowUp size={16} weight="bold" />
          <span>Scroll to top</span>
          <ScrollProgress />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
