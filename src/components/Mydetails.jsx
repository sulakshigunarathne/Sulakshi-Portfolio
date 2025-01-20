import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const aboutMeData = {
  education: [
    "BSc. Eng Hons, Computer Science & Engineering | University of Moratuwa (2021-2025) | CGPA - 3.5539",
    "GCE Advanced Level | R/Ananda Maithreya Central College (2019) | Island Rank - 171 (4A passes)",
    "GCE Ordinary Level | R/Ananda Maithreya Central College (2015) | 9A passes",
  ],
  certifications: [
    {
      title: "Machine Learning for Natural Language Processing",
      source: "AWS Academy",
      link: "https://www.credly.com/badges/8b100daa-77bb-48ed-bd7c-2325b54422cc/linked_in?t=skdwru",
    },
    {
      title: "Neural Networks and Deep Learning",
      source: "Deeplearning.AI",
      link: "https://www.coursera.org/account/accomplishments/certificate/V965QSFRWCB2",
    },
    {
      title: "Supervised Machine Learning: Regression and Classification",
      source: "Deeplearning.AI",
      link: "https://www.coursera.org/account/accomplishments/certificate/7F8H4QYRKVV6",
    },
    {
      title: "Machine Learning Foundations",
      source: "AWS Academy",
      link: "https://www.credly.com/badges/0b597036-d3a3-48d2-88a7-8a384b816a0f/linked_in?t=rxrzfr",
    },
    {
      title: "Feature Engineering",
      source: "Kaggle",
      link: "https://www.kaggle.com/learn/certification/uom200188j/feature-engineering",
    },
    {
      title: "Pandas",
      source: "Kaggle",
      link: "https://www.kaggle.com/learn/certification/uom200188j/pandas",
    },
  ],
  achievements: [
    "Secretary  IEEE IAS UoM 2024",
    "Assistant Webmaster  IEEE IAS UoM  2023",
    "Department representative Semester 4,5,6",
    "Department facilitator at Exmo 2023",
    "Volunteered as a knowledge person in Nena Aruna project and Soyuru Sathkara project",
  ],
};

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState("education");

  const slideVariants = {
    initial: { x: 300, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -300, opacity: 0 },
  };

  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[150px]`}>
        <motion.div variants={textVariant()}>
          <h2 className={`${styles.sectionHeadText} text-[28px] leading-[36px] text-center`}>
            About Me
          </h2>
        </motion.div>
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-4">
        {["education", "certifications", "achievements"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg text-sm md:text-base ${
              activeTab === tab ? "bg-blue-900 text-white" : "bg-gray-300"
            } transition-colors duration-300`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className={`mt-8 pb-14 ${styles.paddingX} flex flex-col gap-4 items-center`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="w-full sm:w-4/5 lg:w-3/4"
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            {activeTab === "certifications"
              ? aboutMeData[activeTab].map((cert, index) => (
                  <div
                    key={index}
                    className="bg-black-200 p-4 rounded-lg text-white mb-4 flex flex-col md:flex-row justify-between items-start md:items-center"
                  >
                    <p className="flex-1">
                      {cert.title} - {cert.source}{" "}
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 underline"
                      >
                        [Verify]
                      </a>
                    </p>
                  </div>
                ))
              : aboutMeData[activeTab].map((item, index) => (
                  <div
                    key={index}
                    className="bg-black-200 p-4 rounded-lg text-white mb-4"
                  >
                    {item.split("|").map((line, lineIndex) => (
                      <p key={lineIndex} className="mb-1 text-sm md:text-base">
                        {line.trim()}
                      </p>
                    ))}
                  </div>
                ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SectionWrapper(AboutMe, "");
