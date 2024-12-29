import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import ProjectList from './ui/components/ProjectListComponent';
import TaskList from './ui/components/TaskListComponent';

const Home = React.lazy(() => import('./ui/components/Home'));

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/daftar_project',
      element: <ProjectList />,
    },
    {
      path: '/project/:id',
      element: <TaskList />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
