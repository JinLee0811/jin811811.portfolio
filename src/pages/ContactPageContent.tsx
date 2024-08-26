import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactPage: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // 애니메이션 지속 시간
      once: true, // 애니메이션이 한 번만 발생하도록 설정
    });
  }, []);

  return (
    <div className='bg-superLightGray h-screen flex flex-col pb-20'>
      <div className='text-center pb-10 pt-20 px-20 flex-grow'>
        <h1 className='text-6xl font-bold text-gray-800' data-aos='fade-up'>
          Thank You
        </h1>
        <p
          className='text-2xl text-gray-800 mt-4'
          data-aos='fade-up'
          data-aos-delay='200'>
          봐주셔서 감사합니다 :)
        </p>
        <p
          className='text-lg text-gray-800 mt-2 mb-8 max-w-2xl mx-auto'
          data-aos='fade-up'
          data-aos-delay='400'>
          프론트엔드 개발자로 성장하기 위해 낮선 기술에도 적극적으로 도전하고,
          항상 사용자의 관점에서 생각하며 사용하기 좋은 서비스를 만들고
          싶습니다.
        </p>

        {/* 프로필 이미지 추가 */}
        <div
          className='flex justify-center mb-4'
          data-aos='fade-up'
          data-aos-delay='600'>
          <img
            src='/images/Endimage2.jpeg' // 여기에 실제 이미지 경로를 넣으세요
            alt='Profile'
            className='w-80 h-80 rounded-full object-cover'
          />
        </div>
      </div>

      <div className='flex justify-center space-x-8 mb-12'>
        <a
          href='https://github.com/your-github'
          target='_blank'
          rel='noopener noreferrer'
          className='text-lg font-medium text-gray-800 hover:text-gray-600'>
          GitHub
        </a>
        <a
          href='https://your-blog.com'
          target='_blank'
          rel='noopener noreferrer'
          className='text-lg font-medium text-gray-800 hover:text-gray-600'>
          Linked In
        </a>
      </div>
      <footer className='text-black text-center mt-auto pb-5 bg-superLightGray'>
        © 2024 Jin.Dev Made By Jin
      </footer>
    </div>
  );
};

export default ContactPage;
