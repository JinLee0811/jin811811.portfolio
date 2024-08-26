import React from 'react';
import { Project } from '../data/projects';

interface CardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
  className?: string;
}

const Card: React.FC<CardProps> = ({ project, onOpenModal }) => {
  return (
    <div
      className='bg-lightGray rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer h-full flex flex-col relative' // relative 추가
      onClick={() => onOpenModal(project)}>
      <img
        src={project.imageUrl}
        alt={project.name}
        className='w-full h-48 object-cover'
        style={{ objectPosition: 'top left' }}
      />

      <div className='p-4 bg-lightGray flex flex-col justify-between flex-grow'>
        <div>
          <h2 className='text-white text-2xl font-bold mb-2'>{project.name}</h2>
          <p className='text-gray-400 mb-4'>{project.subject}</p>
        </div>
        <div className='flex flex-wrap gap-2 mt-auto '>
          {project.tag?.map((tag, index) => (
            <span
              key={index}
              className='bg-mainBlack text-white py-1 px-2 text-sm'>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className='absolute inset-0 bg-lightGray bg-opacity-100 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center transform transition-transform hover:scale-105 px-8'>
        <div className='text-white text-center'>
          <h2 className='text-2xl font-bold mb-4'>{project.name}</h2>
        </div>
        <button
          className='bg-lightGray text-white py-2 px-4 rounded hover:text-lightGray hover:bg-white'
          style={{ border: '1px solid white' }}>
          View Details
        </button>
      </div>
    </div>
  );
};

export default Card;
