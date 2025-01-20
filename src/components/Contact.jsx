import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles"; 
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { linkedin,githubC,email } from "../assets";

const ContactCard = () => {
  return (
    <motion.div
      variants={slideIn("up", "tween", 0.2, 1)}
      className="bg-black-100 p-8 rounded-2xl shadow-lg flex flex-col items-center gap-6"
    >
      <h3 className={`${styles.sectionHeadText} text-center`}>Get in Touch</h3>
      <p className={`${styles.sectionSubText} text-center`}>
        Connect with me :
      </p>

      <div className="flex gap-6">
        {/* LinkedIn */}
        <a
          href="http://www.linkedin.com/in/sulakshi-gunarathne-2a806721b"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-tertiary p-4 rounded-full hover:scale-110 transition-transform duration-200 shadow-md shadow-primary"
        >
          <img
            src={linkedin}
            alt="LinkedIn"
            className="w-12 h-12 rounded-full shadow-md shadow-primary"
          />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/sulakshigunarathne"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-tertiary p-4 rounded-full hover:scale-110 transition-transform duration-200 shadow-md shadow-primary"
        >
                    <img
            src={githubC}
            alt="GitHub"
            className="w-12 h-12 rounded-full shadow-md shadow-primary"
          />
        </a>


        {/* Email */}
        <a
          href="mailto:sulakshi.20@cse.mrt.ac.lk"
          className="bg-tertiary p-4 rounded-full hover:scale-110 transition-transform duration-200 shadow-md shadow-primary"
        >
          <img
            src={email}
            alt="Email"
            className="w-12 h-12 rounded-full shadow-md shadow-primary"
          />
        </a>
      </div>
    </motion.div>
  );
};

export default SectionWrapper(ContactCard, "contact");
