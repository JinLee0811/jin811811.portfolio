import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactPage: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000, // 애니메이션 지속 시간
      once: true, // 애니메이션이 한 번만 발생하도록 설정
    });
  }, []);

  return (
    <div className="bg-superLightGray h-screen flex flex-col pb-20">
      <div className="text-center pb-10 pt-20 px-20 flex-grow">
        <h1 className="text-6xl font-bold text-gray-800" data-aos="fade-up">
          Thank You
        </h1>
        <p className="text-2xl text-gray-800 mt-4" data-aos="fade-up" data-aos-delay="200">
          Thank you for visiting! :)
        </p>
        <p
          className="text-lg text-gray-800 mt-2 mb-8 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="400">
          I actively challenge myself with unfamiliar technologies to grow as a developer. I always
          think from the user's perspective and aim to create services that are easy and enjoyable
          to use.
        </p>

        {/* 프로필 이미지 추가 */}
        <div className="flex justify-center mb-4" data-aos="fade-up" data-aos-delay="600">
          {!imageLoaded && <div className="w-80 h-80 bg-gray-300 animate-pulse rounded-full"></div>}
          <img
            src="https://github.com/user-attachments/assets/722d9780-730d-4c11-a56e-71adb28a4d06"
            alt="Profile"
            className={`w-80 h-80 rounded-full object-cover ${imageLoaded ? "block" : "hidden"}`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
      </div>

      <div className="flex justify-center space-x-8 mb-12">
        <a
          href="https://github.com/JinLee0811"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-medium text-gray-800 hover:text-gray-600">
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/jin-lee-72b653272/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-medium text-gray-800 hover:text-gray-600">
          LinkedIn
        </a>
      </div>
      <footer className="text-black text-center mt-auto pb-5 bg-superLightGray">
        © 2024 Jin.Dev Made By Jin
      </footer>
    </div>
  );
};

export default ContactPage;
