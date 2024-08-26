import React from 'react';

interface SectionHeaderProps {
  title: string;
  description?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
}) => {
  return (
    <header className='text-center mx-auto mb-12 lg:px-20'>
      <h2 className='text-2xl leading-normal mb-2 font-bold text-whiteGray'>
        {title}
      </h2>
      <div className='flex justify-center items-center mb-4'>
        <svg
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
          x='0px'
          y='0px'
          viewBox='0 0 100 60'
          style={{ margin: '0 auto', height: '35px', display: 'inline-block' }}>
          <circle
            cx='50.1'
            cy='30.4'
            r='5'
            className='stroke-primary'
            style={{
              fill: 'transparent',
              strokeWidth: '2',
              strokeMiterlimit: 10,
              stroke: '#00BFFF', // 포인트 색상 (파랑)
            }}></circle>
          <line
            x1='55.1'
            y1='30.4'
            x2='100'
            y2='30.4'
            className='stroke-primary'
            style={{
              strokeWidth: '2',
              strokeMiterlimit: 10,
              stroke: '#00BFFF',
            }}></line>
          <line
            x1='45.1'
            y1='30.4'
            x2='0'
            y2='30.4'
            className='stroke-primary'
            style={{
              strokeWidth: '2',
              strokeMiterlimit: 10,
              stroke: '#00BFFF',
            }}></line>
        </svg>
      </div>
      {description && (
        <p className='text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2'>
          {description}
        </p>
      )}
    </header>
  );
};

export default SectionHeader;
