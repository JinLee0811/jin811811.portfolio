import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import CareerItem from '../components/CareerItem';
import CareerDetailsModal from '../components/CareerDetailsModal';

const careerData = [
  {
    company: 'Youniv',
    position: 'Producer',
    date: '2020 - 2022',
    logoUrl:
      'https://github.com/user-attachments/assets/623e0e0e-5faf-45c5-8e5b-810225d7006c', // Add the path to the company logo
    responsibilities: [
      'Produced and edited videos across a wide range of topics and formats for various platforms, contributing to engaging content for the audience and achieving brand objectives',
      'Collaborated in pre-production tasks, including scriptwriting and shot list creation, enhancing project efficiency and content quality',
      'Filmed, edited, and uploaded videos to the company’s YouTube channel, fostering interaction with viewers and attracting subscribers, expanding influence on the YouTube platform and cultivating a successful community',
      'Organized and managed multiple projects simultaneously, ensuring strict adherence to each project’s mission and deadlines, allowing for a diverse range of content delivery while maintaining efficient project execution',
      'Uploaded produced videos to streaming services such as YouTube and TikTok, facilitating content dissemination and engagement with the audience',
      'Enhanced creative content production and project management skills, fostering a deeper connection between the brand and the audience',
    ],
  },
  // {
  //   company: 'TechCorp',
  //   position: 'Software Engineer',
  //   date: '2018 - 2020',
  //   logoUrl: '/path-to-techcorp-logo.png', // Add the path to the company logo
  //   responsibilities: [
  //     'Developed and maintained web applications using React and Node.js, resulting in a 30% increase in user retention',
  //     'Collaborated with cross-functional teams to define, design, and ship new features',
  //     'Implemented unit and integration tests to improve code quality and reduce bugs by 25%',
  //   ],
  // },
  // Additional career items
];

const Career: React.FC = () => {
  const [selectedCareer, setSelectedCareer] = useState<{
    company: string;
    position: string;
    date: string;
    logoUrl: string;
    responsibilities: string[];
  } | null>(null);

  const handleOpenModal = (career: (typeof careerData)[0]) => {
    setSelectedCareer(career);
  };

  const handleCloseModal = () => {
    setSelectedCareer(null);
  };

  return (
    <div id='career' className='max-w-screen-lg mx-auto p-4 mt-20 mb-24 pb-24'>
      <SectionHeader
        title='Career'
        description='A summary of my professional experience'
      />
      <div className='space-y-4'>
        {careerData.map((item, index) => (
          <div key={index} onClick={() => handleOpenModal(item)}>
            <CareerItem
              company={item.company}
              position={item.position}
              date={item.date}
              logoUrl={item.logoUrl} // Pass the logo URL here
              onHover={() => {}}
            />
          </div>
        ))}
      </div>

      {selectedCareer && (
        <CareerDetailsModal
          company={selectedCareer.company}
          position={selectedCareer.position}
          date={selectedCareer.date}
          logoUrl={selectedCareer.logoUrl} // Pass the logo URL here
          responsibilities={selectedCareer.responsibilities}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Career;
