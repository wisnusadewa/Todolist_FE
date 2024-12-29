import React from 'react';
import { NavLink } from 'react-router-dom';
import ButtonComp from '../Button/ButtonComp';
import { useNavigate } from 'react-router-dom';

const NavbarComp = () => {
  const navigate = useNavigate();

  const onClickButton = () => {
    navigate('/');
  };
  return (
    <nav>
      <div className=" flex justify-between md:h-20 md:text-[24px]">
        <div className="md:text-[35px] flex justify-center items-center font-bold">
          <ButtonComp onClickButton={onClickButton} textButton={'TodosApp'} />
        </div>
        <div className="flex">
          <ul className="flex md:gap-10 justify-center items-center ">
            <li>
              <NavLink to={'/daftar_project'}>Daftar Project</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComp;
