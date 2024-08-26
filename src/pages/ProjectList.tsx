import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import Card from '../components/ProjectCard';
import SectionHeader from '../components/SectionHeader';

const ProjectList: React.FC = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<
    'All' | 'Team' | 'Single'
  >('All');

  const handleOpenModal = (projectId: number) => {
    navigate(`/project/${projectId}`);
  };

  const handleCategoryChange = (category: 'All' | 'Team' | 'Single') => {
    setActiveCategory(category);
  };

  const sortedProjects = projects.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA; // 최신순으로 정렬
  });

  const filteredProjects = sortedProjects.filter((project) => {
    if (activeCategory === 'All') {
      return true;
    }
    return project.type === activeCategory;
  });

  return (
    <section id='project' className='px-8'>
      <SectionHeader
        title='My Projects'
        description='This is What I can do & I used to'
      />

      <div className='relative mb-40'>
        <div className='flex justify-center mb-4 px-7 font-bold'>
          {['All', 'Team', 'Single'].map((category) => (
            <button
              key={category}
              className={`px-4 py-2 mb-4 rounded-full mx-2 ${
                activeCategory === category
                  ? 'bg-white text-lightGray'
                  : 'bg-lightGray text-white hover:bg-gray-700'
              }`}
              onClick={() =>
                handleCategoryChange(category as 'All' | 'Team' | 'Single')
              }>
              {category}
            </button>
          ))}
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2'>
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              project={project}
              onOpenModal={() => handleOpenModal(project.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectList;
