import * as React from "react";
import { useRef } from "react";
import { motion, sync, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import menu from '../../../../public/images/menu.svg';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

export default function HeaderMenu () {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.div
    className="z-50"
      initial={false}
      custom={1000}
      animate={isOpen ? "open" : "closed"}
      ref={containerRef}
    >
      <motion.div       className="background"  variants={sidebar}>
      </motion.div>
      <button onClick={() => toggleOpen()} style={{maskImage: `url("${menu.src}")`}} className="block w-6 h-6 z-50 fill-white bg-white svgMask hover:bg-slate-200 cursor-pointer"></button>

    </motion.div>
  );
};
