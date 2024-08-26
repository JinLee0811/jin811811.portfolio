import React from 'react';

interface Skill {
  title: string;
  description?: string;
  icon?: string;
  type: string;
}

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <div className='flex-shrink' data-wow-duration='1s'>
      <div className='py-4 px-6 mt-3 mb-3 mx-2 bg-mainGray border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2 rounded-lg'>
        <div className='inline-block text-gray-900 mb-4'>
          <img
            src={skill.icon || '/images/default-icon.png'} // Use a fallback if icon is missing
            alt={skill.title}
            className='w-10 h-auto'
          />
        </div>
        <h3 className='text-sm leading-normal mb-2 font-semibold text-black flex justify-center'>
          {skill.title}
        </h3>
      </div>
    </div>
  );
};

export default SkillCard;
