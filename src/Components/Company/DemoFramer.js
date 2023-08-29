import { motion } from "framer-motion";
import { useState } from "react";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: -100 },
};

const Toggle = ({ onClick }) => (
  <button onClick={onClick}>Toggle</button>
);

const Items = () => (
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
);

export const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      animate={isOpen ? "open" : "closed"}
      variants={variants}
    >
      <Toggle onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)} />
      <Items />
    </motion.nav>
  );
};
