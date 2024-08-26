import React from 'react';

interface EducationItemProps {
  school: string;
  course: string;
  date: string;
  logo: string; // URL for the school logo
}

const EducationItem: React.FC<EducationItemProps> = ({
  school,
  course,
  date,
  logo,
}) => {
  return (
    <div className='p-4 bg-lightGray rounded-lg shadow-md flex items-center'>
      <img
        src={logo}
        alt={`${school} logo`}
        className='w-20 h-auto mr-4 bg-white'
      />
      <div>
        <h3 className='text-xl font-semibold text-white'>{school}</h3>
        <p className='text-gray-400'>{course}</p>
        <p className='text-gray-500'>{date}</p>
      </div>
    </div>
  );
};

export default EducationItem;
