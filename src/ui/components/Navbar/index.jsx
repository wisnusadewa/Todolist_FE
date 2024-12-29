import React from 'react';
const NavbarComp = React.lazy(() => import('./NavbarComp'));

const Navbar = () => {
  return (
    <div>
      <NavbarComp />
    </div>
  );
};

export default Navbar;
