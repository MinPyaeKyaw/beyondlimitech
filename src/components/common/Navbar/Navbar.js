import React from "react";
import MobileNavbar from "./MobileNavbar";
import { motion } from "framer-motion";
import DesktopNavbar from "./DesktopNavbar";

export default function Navbar({ isFix }) {
  return (
    <div>
      {!isFix && <DesktopNavbar />}

      {isFix && (
        <motion.div
          initial={{ y: -80 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3 }}
          className={isFix && "fixedNavbar"}
        >
          <DesktopNavbar />
        </motion.div>
      )}

      {!isFix && (
        <div className={`md:hidden flex`}>
          <MobileNavbar />
        </div>
      )}

      {isFix && (
        <motion.div
          initial={{ y: -80 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3 }}
          className={`md:hidden flex ${isFix && "fixedNavbar"}`}
        >
          <MobileNavbar />
        </motion.div>
      )}
    </div>
  );
}
