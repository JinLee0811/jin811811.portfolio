import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { FaLinkedin, FaGithub, FaFileAlt } from 'react-icons/fa';

const Hero: React.FC = () => {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const options = {
      strings: [
        'Frontend-Developer.',
        'Jeongjin Lee.',
        'Full-Stack Developer.',
        'Software Engineer.',
      ],
      typeSpeed: 60,
      backSpeed: 60,
      loop: true,
    };

    if (typedRef.current) {
      const typed = new Typed(typedRef.current, options);
      return () => {
        typed.destroy(); // cleanup the animation on component unmount
      };
    }
  }, []);

  return (
    <main id='main' className='mt-30 mb-15'>
      {/* Hero Section */}
      <div
        id='main'
        className='section relative z-0 py-16 md:pt-32 bg-mainBlack'>
        <div className='container xl:max-w-6xl mx-auto px-4'>
          <div className='flex flex-wrap flex-row -mx-4 justify-center'>
            {/* Image Section */}
            <div className='flex-shrink max-w-full px-4 sm:px-12 lg:px-30 w-full sm:w-9/12 lg:w-1/2 self-center order-2 sm:order-1 lg:order-1'>
              <div className='w-29.1 h-29.1 overflow-hidden rounded-3xl transition-transform duration-300 ease-in-out transform hover:scale-110'>
                <img
                  src='/images/mainProfile.jpeg'
                  className='w-full h-full object-cover'
                  alt='profile picture'
                />
              </div>
            </div>
            {/* Content Section */}
            <div className='flex-shrink max-w-full px-4 w-full md:w-9/12 lg:w-1/2 self-center order-2 sm:order-2 lg:order-1'>
              <div className='text-center lg:text-left mt-6 lg:mt-0'>
                <div className='mb-5'>
                  <h1 className='text-4xl leading-normal text-whiteGray font-bold mb-4 mt-10'>
                    Hi there! 👋
                    <br />I am a{' '}
                    <span className='text-4xl' ref={typedRef}></span>
                  </h1>
                  <p className='text-superLightGray leading-relaxed font-light text-xl mx-auto pb-2'>
                    I am a Full-stack Developer with two years of project
                    experience, currently pursuing a Master’s in IT at UTS. I’m
                    driven by a passion for coding, continuous learning, and
                    collaboration. If you’re looking for a cheerful developer
                    who thrives on challenges, let’s connect!
                  </p>
                  <h2 className='text-xl text-white mt-10 mb-8'>
                    Main Stack & Skills
                  </h2>
                  <div className='mt-4 grid grid-cols-6 md:grid-cols-6 gap-3'>
                    <div className='col-span-1 flex justify-center'>
                      <img
                        src='/images/tsjs.jpg'
                        alt='JavaScript'
                        className='w-10 h-10 object-cover transform transition-transform duration-300 ease-in-out hover:scale-110'
                      />
                    </div>
                    <div className='col-span-1 flex justify-center'>
                      <img
                        src='/images/Python.jpg'
                        alt='Python'
                        className='w-10 h-10 object-cover transform transition-transform duration-300 ease-in-out hover:scale-110'
                      />
                    </div>
                    <div className='col-span-1 flex justify-center'>
                      <img
                        src='/images/React.png'
                        alt='React'
                        className='w-10 h-10 object-cover transform transition-transform duration-300 ease-in-out hover:scale-110'
                      />
                    </div>
                    <div className='col-span-1 flex justify-center'>
                      <img
                        src='/images/Node.js.png'
                        alt='Node.js'
                        className='w-10 h-10 object-cover transform transition-transform duration-300 ease-in-out hover:scale-110'
                      />
                    </div>
                    <div className='col-span-1 flex justify-center'>
                      <img
                        src='/images/Next.js.png'
                        alt='Next.js'
                        className='w-10 h-10 object-cover transform transition-transform duration-300 ease-in-out hover:scale-110'
                      />
                    </div>
                    <div className='col-span-1 flex justify-center'>
                      <img
                        src='/images/Tailwind CSS.png'
                        alt='Tailwind.css'
                        className='w-10 h-10 object-cover transform transition-transform duration-300 ease-in-out hover:scale-110'
                      />
                    </div>
                  </div>
                </div>
                {/* Social Icons with Hover Labels */}
                <div className='flex justify-center lg:justify-start space-x-2 mb-12'>
                  <div className='relative group'>
                    <a
                      href='https://www.linkedin.com/in/jin-lee-72b653272/'
                      className='text-white hover:text-gray-400 transition duration-300 mx-2'
                      target='_blank'
                      rel='noopener noreferrer'>
                      <FaLinkedin size={40} />
                    </a>
                    <span className='absolute bottom-1/8 left-1/2 transform -translate-x-1/2 p-2 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                      LinkedIn
                    </span>
                  </div>
                  <div className='relative group'>
                    <a
                      href='https://github.com/JinLee0811'
                      className='text-white hover:text-gray-400 transition duration-300 mx-2'
                      target='_blank'
                      rel='noopener noreferrer'>
                      <FaGithub size={40} />
                    </a>
                    <span className='absolute bottom-1/8 left-1/2 transform -translate-x-1/2 p-2 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                      GitHub
                    </span>
                  </div>
                  <div className='relative group'>
                    <a
                      href='https://docs.google.com/document/d/1uR5NTRrb53JhtNDzZt_qA5ZV7OpG9SHXUUF4hAMkO1I/edit#heading=h.b2iqg8ovct2r'
                      className='text-white hover:text-gray-400 transition duration-300 mx-2'
                      target='_blank'
                      rel='noopener noreferrer'>
                      <FaFileAlt size={40} />
                    </a>
                    <span className='absolute bottom-1/8 left-1/2 transform -translate-x-1/2 p-2 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                      CV
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
