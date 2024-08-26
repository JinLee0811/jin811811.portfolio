import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import Modal from '../components/Modal';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === Number(id));

  const handleCloseModal = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  if (!project) {
    return <div>Project not found</div>;
  }

  return <Modal project={project} onClose={handleCloseModal} />;
};

export default ProjectDetail;
