import { motion, Variants } from "framer-motion";

export default function AnimatedDLogo() {
  const iconVariant: Variants = {
    hidden: {
      pathLength: 0,
      fill: "rgba(0, 0, 0, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "#1f8d93",
    },
  };

  return (
    <motion.svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
    >
      <motion.path
        d="
          M 20 10 
          L 20 90 
          Q 70 90 70 50 
          Q 70 10 20 10 
          Z

          M 35 25 
          Q 55 25 55 50 
          Q 55 75 35 75 
          L 35 25 
          Z
        "
        strokeWidth="5"
        stroke="#1f8d93"
        fillRule="evenodd"
        variants={iconVariant}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 3, ease: "easeInOut" },
          fill: { duration: 3, ease: [1, 0, 0.8, 1] },
        }}
      />
    </motion.svg>
  );
}
