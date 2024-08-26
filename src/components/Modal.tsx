import React, { useState } from 'react';
import { Project } from '../data/projects';
import { FaGithub } from 'react-icons/fa';
import { IoLogoVercel } from 'react-icons/io5';

interface ModalProps {
  project: Project;
  onClose: () => void;
}

interface ImageModalProps {
  imageUrl: string;
  caption: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  imageUrl,
  caption,
  onClose,
}) => {
  return (
    <div
      className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50'
      onClick={onClose}>
      <div className='relative'>
        <button
          className='absolute top-[15px] right-[15px] text-black bg-gray-200 hover:bg-gray-300 rounded-full p-4'
          onClick={onClose}
          style={{
            borderRadius: '50%',
            width: '35px',
            height: '35px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <span
            style={{
              fontSize: '20px',
              lineHeight: '20px',
              fontWeight: 'bold',
            }}>
            &times;
          </span>
        </button>
        <img
          src={imageUrl}
          alt={caption}
          className='max-w-[80vw] max-h-[80vh] rounded'
        />
        <p className='text-white text-center mt-4 font-bold'>{caption}</p>
      </div>
    </div>
  );
};

const Modal: React.FC<ModalProps> = ({ project, onClose }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCaption, setSelectedCaption] = useState<string | null>(null);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const openImageModal = (imageUrl: string, caption: string) => {
    setSelectedImage(imageUrl);
    setSelectedCaption(caption);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    setSelectedCaption(null);
  };

  const screenshots = project.screenshots || [];

  return (
    <div
      className='fixed inset-0 bg-mainBlack bg-opacity-45 flex items-center justify-center xl:px-24 lg:px-24 md:px-24'
      onClick={handleOverlayClick}
      style={{ overflowY: 'hidden' }}>
      <div className='relative bg-white text-black rounded-lg w-full max-w-full mx-auto mt-4 mb-0 shadow-lg overflow-y-auto max-h-[98vh] scrollbar-hide'>
        {/* Navigation Bar */}
        <div className='fixed flex-col top-4 right-0 z-50 p-4'>
          <button
            className='text-black bg-white hover:bg-lightGray rounded-full p-4 mb-1 sm:mr-4'
            onClick={onClose}
            style={{
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <span
              style={{
                fontSize: '20px',
                lineHeight: '20px',
                fontWeight: 'bold',
              }}>
              &times;
            </span>
          </button>
          <a
            href={project.githubUrl}
            className='text-black bg-white hover:bg-lightGray rounded-full mt-2'
            target='_blank'
            rel='noopener noreferrer'
            style={{
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <FaGithub />
          </a>
          {project.deployUrl && project.deployUrl.trim() !== '' && (
            <a
              href={project.deployUrl}
              className='text-black bg-white hover:bg-lightGray rounded-full p-2 mt-2'
              target='_blank'
              rel='noopener noreferrer'
              style={{
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <IoLogoVercel />
            </a>
          )}
        </div>

        {/* Top Section with Title */}
        <div className='bg-lightGray text-white p-10 sm:px-0 rounded-t-lg text-center'>
          {project.category && Array.isArray(project.category) && (
            <div className='flex items-center justify-center mb-4 space-x-2'>
              {project.category.map((categoryItem, index) => (
                <span
                  key={index}
                  className='bg-gray-200 text-xs px-2 py-1 rounded text-black'>
                  {categoryItem}
                </span>
              ))}
            </div>
          )}

          <h2 className='text-4xl font-bold mb-2'>{project.name}</h2>
          <p className='text-gray-300'>{project.subject}</p>
          <p className='text-gray-300 mb-6'>{project.term}</p>
        </div>

        {/* Main Content Section */}
        <div className='bg-white p-10 xl:px-24 lg:px-24 w-full max-w-full'>
          <div className='mb-6'>
            {/* Pages Section */}
            <h3 className='text-3xl font-bold mb-4'>💻 Pages</h3>
            <p className='text-gray-500 mb-4'>
              Click on the images to enlarge them.
            </p>
            <div
              className={`grid  ${
                screenshots.length === 1 ? 'grid-cols-1' : 'grid-cols-3'
              } gap-4`}>
              {screenshots.map((screenshot, index) => (
                <div
                  key={index}
                  className='text-center cursor-pointer'
                  onClick={() =>
                    openImageModal(screenshot.imageUrl, screenshot.caption)
                  }>
                  <img
                    src={screenshot.imageUrl}
                    alt={screenshot.caption}
                    className={`w-full h-auto rounded ${
                      screenshots.length === 1 ? 'lg:max-w-[100%] mx-auto' : ''
                    }`}
                  />
                  <p className='text-gray-500 mt-2 text-sm'>
                    {screenshot.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className='space-y-6 pr-0 pl-0 pt-5 pb-10'>
            <h3 className='font-semibold text-xl'>👨‍💻 Summary</h3>
            <div className='relative bg-superLightGray bg-center p-8 rounded-lg '>
              <p className='text-lg text-mainBlack'>👉 {project.description}</p>
            </div>
            {project.features && project.features.length > 0 && (
              <div>
                <h3 className='font-semibold mb-2 text-xl'>📌 Key Features</h3>
                <ul className='list-disc list-inside space-y-2 ml-3'>
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
            {project.skills && project.skills.length > 0 && (
              <div>
                <h3 className='font-semibold mb-2 text-xl'>
                  🛠️ Technologies and Tools
                </h3>
                <ul className='list-none flex flex-wrap gap-2 ml-3'>
                  {project.skills.map((tag, index) => (
                    <li
                      key={index}
                      className='bg-gray-200 text-black px-3 py-1 rounded'>
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {project.contributions && project.contributions.length > 0 && (
              <div>
                <h3 className='font-semibold mb-2 text-xl'>✨ Contributions</h3>
                <ul className='list-disc list-inside space-y-2 ml-3'>
                  {project.contributions.map((contribution, index) => (
                    <li key={index}>{contribution}</li>
                  ))}
                </ul>
              </div>
            )}
            {project.issues && project.issues.length > 0 && (
              <div>
                <h3 className='font-semibold mb-2 text-xl'>
                  💻 Issue Management and Reflections
                </h3>
                <ul className='list-disc list-inside space-y-2 ml-3'>
                  {project.issues.map((issue, index) => (
                    <li key={index}>{issue}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          imageUrl={selectedImage}
          caption={selectedCaption || ''}
          onClose={closeImageModal}
        />
      )}
    </div>
  );
};

export default Modal;
