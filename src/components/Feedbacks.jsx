// import React from "react";
// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { SectionWrapper } from "../hoc";
// import { fadeIn, textVariant } from "../utils/motion";
// import { testimonials } from "../constants";

// const FeedbackCard = ({
//   index,
//   testimonial,
//   name,
//   designation,
//   company,
//   image,
// }) => (
//   <motion.div
//     variants={fadeIn("", "spring", index * 0.5, 0.75)}
//     className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
//   >
//     <p className='text-white font-black text-[48px]'>"</p>

//     <div className='mt-1'>
//       <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

//       <div className='mt-7 flex justify-between items-center gap-1'>
//         <div className='flex-1 flex flex-col'>
//           <p className='text-white font-medium text-[16px]'>
//             <span className='blue-text-gradient'>@</span> {name}
//           </p>
//           <p className='mt-1 text-secondary text-[12px]'>
//             {designation} of {company}
//           </p>
//         </div>

//         <img
//           src={image}
//           alt={`feedback_by-${name}`}
//           className='w-10 h-10 rounded-full object-cover'
//         />
//       </div>
//     </div>
//   </motion.div>
// );

// const Feedbacks = () => {
//   return (
//     <div className={`mt-12 bg-black-100 rounded-[20px]`}>
//       <div
//         className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
//       >
//         <motion.div variants={textVariant()}>
//           {/* <p className={styles.sectionSubText}>What others say</p> */}
//           <h2 className={styles.sectionHeadText}>About me</h2>
//         </motion.div>
//       </div>
//       <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
//         {testimonials.map((testimonial, index) => (
//           <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SectionWrapper(Feedbacks, "");


import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";


// const aboutMeData = {
//   education: [
//     "BSc. Eng Hons, Computer Science & Engineering | University of Moratuwa (2021-2025) | CGPA - 3.5539",
//     "GCE Advanced Level | R/Ananda Maithreya Central College (2019) | Island Rank - 171 (4A passes)",
//     "GCE Ordinary Level | R/Ananda Maithreya Central College (2015) | 9A passes",
//   ],
//   certifications: [
//     " Machine Learning for Natural Language Processing - AWS Academy(cert)",
//     " Neural Networks and Deep Learning - Deeplearning.AI(cert)",
//     " Supervised Machine Learning: Regression and Classification Deeplearning.AI(cert)",
//     " Machine Learning Foundations - AWS Academy(cert)",
//     " Feature Engineering - Kaggle(cert)",
//     "Panda - Kaggle(cert)"
    
//   ],
//   achievements: [
//     "Won Hackathon XYZ 2023",
//     "Published Research Paper in AI Journal",
//     "Volunteered as a coding mentor for underprivileged students",
//   ],
// };

// const AboutMe = () => {
//   const [activeTab, setActiveTab] = useState("education");

//   // Animation variants for sliding effect
//   const slideVariants = {
//     initial: { x: 300, opacity: 0 },
//     animate: { x: 0, opacity: 1 },
//     exit: { x: -300, opacity: 0 },
//   };

//   return (
//     <div className="mt-12 bg-black-100 rounded-[20px]">
//       <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[150px]`}>
//         <motion.div variants={textVariant()}>
//           <h2 className={`${styles.sectionHeadText} text-[28px] leading-[36px]`}>
//             About Me
//           </h2>
//         </motion.div>
//       </div>

//       <div className="mt-6 flex justify-center gap-6">
//         {/* Tabs */}
//         {["education", "certifications", "achievements"].map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`px-4 py-2 rounded-lg ${
//               activeTab === tab ? "bg-blue-900 text-white" : "bg-gray-300"
//             } transition-colors duration-300`}
//           >
//             {tab.charAt(0).toUpperCase() + tab.slice(1)}
//           </button>
//         ))}
//       </div>

//       <div
//         className={`mt-8 pb-14 ${styles.paddingX} flex flex-col gap-4 items-center`}
//       >
//         <AnimatePresence mode="wait">
//           {/* Active Tab Content */}
//           <motion.div
//             key={activeTab}
//             className="w-full md:w-3/4"
//             variants={slideVariants}
//             initial="initial"
//             animate="animate"
//             exit="exit"
//             transition={{ duration: 0.5 }}
//           >
//             {aboutMeData[activeTab].map((item, index) => (
//               <div
//                 key={index}
//                 className="bg-black-200 p-4 rounded-lg text-white mb-4"
//               >
//                 {item.split("|").map((line, lineIndex) => (
//                   <p key={lineIndex} className="mb-1">
//                     {line.trim()}
//                   </p>
//                 ))}
//               </div>
//             ))}
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default SectionWrapper(AboutMe, "");

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
      link: "https://example.com/ml-nlp",
    },
    {
      title: "Neural Networks and Deep Learning",
      source: "Deeplearning.AI",
      link: "https://example.com/nn-dl",
    },
    {
      title: "Supervised Machine Learning: Regression and Classification",
      source: "Deeplearning.AI",
      link: "https://example.com/sml-rc",
    },
    {
      title: "Machine Learning Foundations",
      source: "AWS Academy",
      link: "https://example.com/ml-foundations",
    },
    {
      title: "Feature Engineering",
      source: "Kaggle",
      link: "https://example.com/feature-engineering",
    },
    {
      title: "Pandas",
      source: "Kaggle",
      link: "https://example.com/pandas",
    },
  ],
  achievements: [
    "Secretary  IEEE IAS UoM 2024",
    "Assistant Webmaster  IEEE IAS UoM  2023",
    " Department representative Semester 4,5,6",
    " Department facilitator at Exmo 2023",
    "Volunteered as a knowledge person in Nena Aruna project and Soyuru Sathkara project"
  ],
};

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState("education");

  // Animation variants for sliding effect
  const slideVariants = {
    initial: { x: 300, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -300, opacity: 0 },
  };

  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[150px]`}>
        <motion.div variants={textVariant()}>
          <h2 className={`${styles.sectionHeadText} text-[28px] leading-[36px]`}>
            About Me
          </h2>
        </motion.div>
      </div>

      <div className="mt-6 flex justify-center gap-6">
        {/* Tabs */}
        {["education", "certifications", "achievements"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg ${
              activeTab === tab ? "bg-blue-900 text-white" : "bg-gray-300"
            } transition-colors duration-300`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div
        className={`mt-8 pb-14 ${styles.paddingX} flex flex-col gap-4 items-center`}
      >
        <AnimatePresence mode="wait">
          {/* Active Tab Content */}
          <motion.div
            key={activeTab}
            className="w-full md:w-3/4"
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
                    className="bg-black-200 p-4 rounded-lg text-white mb-4 flex justify-between items-center"
                  >
                    <p>
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
                      <p key={lineIndex} className="mb-1">
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
