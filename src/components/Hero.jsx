import { motion } from "framer-motion";

import { styles } from "../styles";
import myPhoto from "../assets/me.jpg";
import ReactTypingEffect from 'react-typing-effect';

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#6b3ccf]'>Sulakshi</span>
          </h1>
          {/* <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a Data Science undergraduate<br className='sm:block hidden' />
             with a strong passion for AI, machine learning, and developing, data-driven solutions
          </p> */}
          <div className={`${styles.heroSubText} mt-2 text-white-100`}>
      <ReactTypingEffect
        text={[
          "I am a Data Science undergraduate with a strong passion for AI, machine learning, and developing data-driven solutions.",
        ]}
        speed={50} // Typing speed in milliseconds
        eraseSpeed={250} // Erase speed in milliseconds
        typingDelay={200} 
        eraseDelay={5000} 
        cursor="|" 
      />
    </div>
        </div>
      </div>

      {/* <ComputersCanvas /> */}
      <div className="absolute inset-0 top-[400px] flex justify-center items-center">
        <div className="relative w-[300px] h-[300px] rounded-full shadow-lg overflow-hidden">
          {/* Image */}
          <img
            src={myPhoto}
            alt="My Portrait"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#b7b5bc] via-transparent to-black opacity-60" />
        </div>
      </div>


      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
