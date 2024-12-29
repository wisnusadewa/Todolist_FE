import React from 'react';
import background from '../../assets/background/background.webp';

const HomeLayout = ({ children }) => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-cover" style={{ backgroundImage: `url(${background})` }}>
      <main>{children}</main>
    </div>
  );
};

export default HomeLayout;
