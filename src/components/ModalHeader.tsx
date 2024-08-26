import React from 'react';
import tw from 'tailwind-styled-components';

interface ModalHeaderProps {
  name: string;
  title: string;
  subject: string;
  onClose: () => void;
}

const HeaderContainer = tw.div`
  bg-gradient-to-r from-gray-800 to-gray-600 p-6 rounded-t-lg text-white
`;

const ModalHeader: React.FC<ModalHeaderProps> = ({ name, title, subject }) => {
  return (
    <HeaderContainer>
      <h2 className='text-3xl font-bold mb-2'>{name}</h2>
      <h3 className='text-xl font-semibold mb-2'>{title}</h3>
      <p className='text-base mb-4'>{subject}</p>
    </HeaderContainer>
  );
};

export default ModalHeader;
