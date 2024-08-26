import React, { useState, useEffect } from 'react';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('main');

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle scroll and set the active section based on scroll position
  const handleScroll = () => {
    const sections = ['main', 'techSkills', 'project', 'education', 'career'];
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const { top } = element.getBoundingClientRect();
        const offsetTop = top + window.scrollY;
        const offsetHeight = element.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    }
  };

  // Smooth scroll to a section with offset for the navbar height
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    const navbarHeight = document.querySelector('header')?.offsetHeight || 0;
    const yOffset = navbarHeight + 50; // Adjust 50 to add or subtract more offset
    const y = element
      ? element.getBoundingClientRect().top + window.pageYOffset - yOffset
      : 0;

    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  // Attach the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className='fixed top-0 left-0 right-0 z-40 bg-mainBlack'>
      <nav className='main-nav'>
        <div className='container xl:max-w-6xl mx-auto px-4'>
          <div className='lg:flex lg:justify-between'>
            <div className='flex justify-between'>
              <div className='mx-w-10 text-3xl font-bold capitalize text-whiteGray flex items-center'>
                Jin.dev
              </div>

              {/* Mobile Nav */}
              <div className='flex flex-row items-center py-4 lg:py-0'>
                <div className='relative text-superLightGray hover:text-black block lg:hidden'>
                  <button
                    type='button'
                    className='menu-mobile block py-3 px-6 border-b-2 border-transparent'
                    onClick={toggleMenu}>
                    <span className='sr-only'>Mobile menu</span>
                    {isOpen ? (
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='currentColor'
                        className='close bi bi-x-lg h-8 w-8'
                        viewBox='0 0 16 16'>
                        <path
                          fillRule='evenodd'
                          d='M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z'
                        />
                        <path
                          fillRule='evenodd'
                          d='M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z'
                        />
                      </svg>
                    ) : (
                      <svg
                        className='open h-8 w-8'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        aria-hidden='true'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M4 6h16M4 12h16M4 18h16'
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Desktop Nav */}
            <div
              className={`${
                isOpen ? 'block' : 'hidden'
              } lg:flex lg:flex-row items-center`}>
              <ul className='navbar bg-lightGray lg:bg-transparent w-full text-center lg:text-left lg:flex lg:flex-row text-Graygray text-sm font-bold'>
                <li
                  className={`relative hover:text-mainBlue ${
                    activeSection === 'main' ? 'text-mainBlue' : ''
                  }`}>
                  <a
                    className={`block py-3 lg:py-7 px-6 border-b-2 border-transparent hover:border-mainBlue cursor-pointer`}
                    onClick={() => scrollToSection('main')}>
                    Home
                  </a>
                </li>
                <li
                  className={`relative hover:text-mainBlue ${
                    activeSection === 'techSkills' ? 'text-mainBlue' : ''
                  }`}>
                  <a
                    className={`block py-3 lg:py-7 px-6 border-b-2 border-transparent hover:border-mainBlue cursor-pointer`}
                    onClick={() => scrollToSection('techSkills')}>
                    Tech Skills
                  </a>
                </li>
                <li
                  className={`relative hover:text-mainBlue ${
                    activeSection === 'project' ? 'text-mainBlue' : ''
                  }`}>
                  <a
                    className={`block py-3 lg:py-7 px-6 border-b-2 border-transparent hover:border-mainBlue cursor-pointer`}
                    onClick={() => scrollToSection('project')}>
                    Project
                  </a>
                </li>
                <li
                  className={`relative hover:text-mainBlue ${
                    activeSection === 'education' ? 'text-mainBlue' : ''
                  }`}>
                  <a
                    className={`block py-3 lg:py-7 px-6 border-b-2 border-transparent hover:border-mainBlue cursor-pointer`}
                    onClick={() => scrollToSection('education')}>
                    Education
                  </a>
                </li>
                <li
                  className={`relative hover:text-mainBlue ${
                    activeSection === 'career' ? 'text-mainBlue' : ''
                  }`}>
                  <a
                    className={`block py-3 lg:py-7 px-6 border-b-2 border-transparent hover:border-mainBlue cursor-pointer`}
                    onClick={() => scrollToSection('career')}>
                    Career
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
