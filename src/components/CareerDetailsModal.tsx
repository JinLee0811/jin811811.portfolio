import React from 'react';

interface CareerDetailsModalProps {
  company: string;
  position: string;
  date: string;
  logoUrl: string; // Add a prop for the logo URL
  responsibilities: string[];
  onClose: () => void;
}

const CareerDetailsModal: React.FC<CareerDetailsModalProps> = ({
  company,
  position,
  date,
  logoUrl,
  responsibilities,
  onClose,
}) => {
  return (
    <div className='fixed inset-0 bg-mainBlack bg-opacity-80 flex items-center justify-center p-4'>
      <div className='bg-lightGray p-8 rounded-lg max-w-4xl w-full'>
        <div className='flex justify-between items-center mb-4'>
          <div className='flex items-center'>
            <img
              src={logoUrl}
              alt={`${company} logo`}
              className='w-12 h-12 rounded-full mr-4'
            />
            <h2 className='text-2xl font-bold text-white'>{company}</h2>
          </div>
          <button onClick={onClose} className='text-2xl text-white font-bold'>
            &times;
          </button>
        </div>
        <p className='text-superLightGray'>{position}</p>
        <p className='text-gray-500 mb-4'>{date}</p>
        <ul className='list-disc list-outside space-y-2 text-white pl-5'>
          {responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CareerDetailsModal;
