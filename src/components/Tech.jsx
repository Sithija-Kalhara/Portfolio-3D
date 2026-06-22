import React from "react";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      {/* Section Heading */}
      <motion.div variants={textVariant()} className="text-center mb-16">
        <p className={styles.sectionSubText}>Technologies I Work With</p>
        <h2 className={styles.sectionHeadText}>Tech Stack.</h2>
      </motion.div>

      {/* Tech Icons */}
      <div className="flex flex-row flex-wrap justify-center gap-12">
        {technologies.map((technology, index) => (
          <motion.div
            key={technology.name}
            whileHover={{ scale: 1.1 }}
            className="w-28 h-28"
          >
            <BallCanvas icon={technology.icon} />
            <p className="text-center mt-4 text-secondary text-[14px]">
              {technology.name}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
