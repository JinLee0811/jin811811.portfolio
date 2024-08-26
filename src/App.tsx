import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page from './pages/Page';
import ProjectDetail from './pages/ProjectDetail';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Page />} />
        <Route path='/project/:id' element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
