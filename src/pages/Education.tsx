import React from 'react';
import SectionHeader from '../components/SectionHeader';
import EducationItem from '../components/EducationItem';

const educationData = [
  {
    school: 'University of Technology, Sydney',
    course: 'Master of Information Technology',
    date: '2024 - 2026',
    logo: '/images/EducationLogo/UTS.png', // Update this path
  },
  {
    school: 'Elice Diploma',
    course: 'AI Developer Diploma',
    date: '2023 - 2024',
    logo: '/images/EducationLogo/Elice.png', // Update this path
  },
  {
    school: 'Dankook University',
    course: 'Bachelor of Animal Resource Science',
    date: '2013 - 2022',
    logo: '/images/EducationLogo/DanKook.png', // Update this path
  },
];

const Education: React.FC = () => {
  return (
    <div id='education' className='max-w-screen-lg mx-auto p-4'>
      <SectionHeader
        title='Education'
        description='A brief overview of my educational background'
      />
      <div className='space-y-4 mb-20'>
        {educationData.map((item, index) => (
          <EducationItem
            key={index}
            school={item.school}
            course={item.course}
            date={item.date}
            logo={item.logo} // Pass the logo prop here
          />
        ))}
      </div>
    </div>
  );
};

export default Education;
