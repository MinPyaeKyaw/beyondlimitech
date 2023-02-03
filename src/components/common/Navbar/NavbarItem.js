import React, { useState } from "react";
import { motion } from "framer-motion";

export default function NavbarItem({ title, dropList }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="navbar_item"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {title}
      {dropList && isHover && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="navbar_dropListContainer"
        >
          {dropList.map((list, i) => (
            <div key={i} className="navbar_dropItem">
              {list}
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
