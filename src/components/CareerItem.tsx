import React from 'react';

interface CareerItemProps {
  company: string;
  position: string;
  date: string;
  logoUrl: string; // Add a prop for the logo URL
  onHover: () => void;
}

const CareerItem: React.FC<CareerItemProps> = ({
  company,
  position,
  date,
  logoUrl,
  onHover,
}) => {
  return (
    <div
      className='relative bg-lightGray p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer flex items-center'
      onMouseEnter={onHover}>
      <img
        src={logoUrl}
        alt={`${company} logo`}
        className='w-20 h-auto mr-4 bg-white'
      />
      <div>
        <h3 className='text-xl font-semibold text-white'>{company}</h3>
        <p className='text-md text-gray-400'>{position}</p>
        <p className='text-sm text-gray-500'>{date}</p>
      </div>
      {/* Cover */}
      <div className='absolute inset-0 bg-lightGray bg-opacity-100 flex items-center justify-center opacity-0 hover:opacity-90 transition-opacity duration-300'>
        <span className='text-white text-lg font-bold'>
          <button
            className='bg-lightGray text-white py-2 px-4 rounded hover:text-lightGray hover:bg-white'
            style={{ border: '1px solid white' }}>
            View Details
          </button>
        </span>
      </div>
    </div>
  );
};

export default CareerItem;
