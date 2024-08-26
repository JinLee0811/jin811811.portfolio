import React from 'react';
import SectionHeader from '../components/SectionHeader';
import EducationItem from '../components/EducationItem';

const educationData = [
  {
    school: 'University of Technology, Sydney',
    course: 'Master of Information Technology',
    date: '2024 - 2026',
    logo: 'https://github.com/user-attachments/assets/526470ef-f0b9-46c2-9705-237ba60f7941', // Updated path for UTS
  },
  {
    school: 'Elice Diploma',
    course: 'AI Developer Diploma',
    date: '2023 - 2024',
    logo: 'https://github.com/user-attachments/assets/1173d02f-1284-4a5a-b152-2e0b4b334e28', // Updated path for Elice
  },
  {
    school: 'Dankook University',
    course: 'Bachelor of Animal Resource Science',
    date: '2013 - 2022',
    logo: 'https://github.com/user-attachments/assets/97d5da02-4b3c-459c-89e7-1cae13a819db', // Updated path for Dankook
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
