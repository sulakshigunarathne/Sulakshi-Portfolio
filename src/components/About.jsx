// import React from "react";
// import Tilt from "react-tilt";
// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { SectionWrapper } from "../hoc";
// import { fadeIn, textVariant } from "../utils/motion";

// const ServiceCard = ({ index, title, icon }) => (
//   <Tilt className='xs:w-[250px] w-full'>
//     <motion.div
//       variants={fadeIn("right", "spring", index * 0.5, 0.75)}
//       className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
//     >
//       <div
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//         className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
//       >
//         <img
//           src={icon}
//           alt='web-development'
//           className='w-16 h-16 object-contain'
//         />

//         <h3 className='text-white text-[20px] font-bold text-center'>
//           {title}
//         </h3>
//       </div>
//     </motion.div>
//   </Tilt>
// );

// const About = () => {
//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         <p className={`${styles.sectionSubText}`}>Introduction</p>
//         <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
//       </motion.div>

//       <motion.p
//         variants={fadeIn("", "", 0.1, 1)}
//         className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
//       >
//         Undergraduate specializing in Data Science and
//  Engineering, with a strong interest in machine
//  learning and data science. Committed to
//  leveraging AI solutions for real-world challenges
//  and dedicated to continuous learning. Eager to
//  contribute to innovative projects and gain hands
// on experience in this dynamic field.
//       </motion.p>

//       {/* <div className='mt-20 flex flex-wrap gap-10'>
//         {services.map((service, index) => (
//           <ServiceCard key={service.title} index={index} {...service} />
//         ))}
//       </div> */}
//     </>
//   );
// };

// export default SectionWrapper(About, "about");
import React from "react";
import Tilt from "react-parallax-tilt"; // Updated import
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    tiltMaxAngleX={45} // Updated props
    tiltMaxAngleY={45} // Updated props
    scale={1} // Updated props
    transitionSpeed={450} // Updated props
    className="xs:w-[250px] w-full"
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Undergraduate specializing in Data Science and Engineering, with a
        strong interest in machine learning and data science. Committed to
        leveraging AI solutions for real-world challenges and dedicated to
        continuous learning. Eager to contribute to innovative projects and
        gain hands-on experience in this dynamic field.
      </motion.p>

      {/* <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </>
  );
};

export default SectionWrapper(About, "about");
