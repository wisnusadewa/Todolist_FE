import React from 'react';
import HomeLayout from '../../layout/HomeLayout';
import Navbar from '../Navbar';

const HomeComp = React.lazy(() => import('./HomeComp'));

const Home = () => {
  return (
    <HomeLayout>
      <div className="flex flex-col text-white gap-4 my-10">
        <div className="px-10">
          <Navbar />
        </div>
        <div className="px-10">
          <HomeComp />
        </div>
      </div>
    </HomeLayout>
  );
};

export default Home;
