import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Layout from '../components/Layout';
import Main from './Main';
import TechSkills from './TechSkills';
import NavBar from '../components/Navbar';
import Project from './ProjectList';
import Education from './Education';
import Career from './Career';
import ContactPage from './ContactPage';

const Page: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 2500,
      once: false,
      mirror: true,
      offset: 200, // 이 값을 높여서 섹션이 더 늦게 나타나도록 설정
    });
  }, []);

  return (
    <>
      <Layout>
        <NavBar />
        <div data-aos='fade' data-aos-anchor-placement='top-bottom'>
          <Main />
        </div>
        <div
          data-aos='fade'
          data-aos-delay='100'
          data-aos-anchor-placement='top-bottom'>
          <TechSkills />
        </div>
        <div
          data-aos='fade'
          data-aos-delay='200'
          data-aos-anchor-placement='top-bottom'>
          <Project />
        </div>
        <div
          data-aos='fade'
          data-aos-delay='300'
          data-aos-anchor-placement='top-bottom'>
          <Education />
        </div>
        <div
          data-aos='fade'
          data-aos-delay='400'
          data-aos-anchor-placement='top-bottom'>
          <Career />
        </div>
      </Layout>
      <ContactPage />
    </>
  );
};

export default Page;
