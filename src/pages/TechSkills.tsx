import React from 'react';
import SkillCard from '../components/SkillCard';
import SectionHeader from '../components/SectionHeader';
import { skills } from '../data/skillsData'; // Assuming skills data is an array of objects with a `type` property

const TechSkills: React.FC = () => {
  // Filter skills based on type
  const frontendSkills = skills.filter((skill) => skill.type === 'Frontend');
  const backendSkills = skills.filter((skill) => skill.type === 'Backend');
  const otherSkills = skills.filter(
    (skill) => skill.type !== 'Frontend' && skill.type !== 'Backend'
  );

  return (
    <section
      id='techSkills'
      className='section relative pt-20 pb-8 md:pt-16 md:pb-0 bg-mainBlack mb-40'>
      <div className='container xl:max-w-6xl mx-auto px-4'>
        <SectionHeader
          title='Tech Skills'
          description='This is What I can do & I used to'
        />
        <div className='flex flex-wrap justify-between -mx-4 text-center'>
          <div className='w-full md:w-1/2 px-4 mb-8'>
            <h3 className='text-xl font-semibold text-white mb-4'>
              Frontend Skills
            </h3>
            <div className='rounded-lg'>
              <div className='flex flex-wrap justify-center rounded-lg'>
                {frontendSkills.map((skill, index) => (
                  <SkillCard key={index} skill={skill} />
                ))}
              </div>
            </div>
          </div>
          <div className='w-full md:w-1/2 px-4 mb-8'>
            <h3 className='text-xl font-semibold text-white'>Backend Skills</h3>
            <div className='rounded-lg'>
              <div className='flex flex-wrap justify-center rounded-lg'>
                {backendSkills.map((skill, index) => (
                  <SkillCard key={index} skill={skill} />
                ))}
              </div>
            </div>
          </div>
          <div className='w-full px-2'>
            <h3 className='text-xl font-semibold text-white mb-4'>Others</h3>
            <div className='flex flex-wrap justify-center'>
              {otherSkills.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSkills;
