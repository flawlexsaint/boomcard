import { motion, Variants } from "framer-motion";

interface HamburgerButtonProps {
  isOpen: boolean;
  toggleHamburger?: () => void;
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  isOpen,
  toggleHamburger,
}) => {
  const topVariants: Variants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 9.8 },
  };

  const bottomVariants: Variants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -9.8 },
  };

  const middleVariants: Variants = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  };

  const handleClick = () => {
    if (toggleHamburger) {
      toggleHamburger();
    }
  };

  return (
    <button
      onClick={handleClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      className={`flex flex-col justify-center items-center w-[40px] h-[40px] space-y-1.5 z-50 relative`}
    >
      <motion.div
        variants={topVariants}
        animate={isOpen ? "open" : "closed"}
        className={`w-8 h-1 bg-black rounded-full transform rotate-45`}
      />
      <motion.div
        variants={middleVariants}
        animate={isOpen ? "open" : "closed"}
        className={`w-8 h-1 bg-black rounded-full`}
      />
      <motion.div
        variants={bottomVariants}
        animate={isOpen ? "open" : "closed"}
        className={`w-8 h-1 bg-black rounded-full transform -rotate-45`}
      />
    </button>
  );
};

export default HamburgerButton;
