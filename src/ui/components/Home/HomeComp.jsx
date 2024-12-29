import React from 'react';
import AddForm from '../AddFormProject';
import { useSelector, useDispatch } from 'react-redux';
import ButtonComp from '../Button/ButtonComp';
import { setisModal } from '../../../redux/useProjectSlice';

const HomeComp = () => {
  const { isModal } = useSelector((state) => state.project);
  const dispatch = useDispatch();

  const handleModal = () => {
    dispatch(setisModal(!isModal));
  };

  return (
    <div>
      {/* Dashboard */}
      <div className=""></div>

      {/* ADD PROJECT */}
      <div className="w-full min-h-screen">
        <ButtonComp onClickButton={handleModal} textButton={isModal ? 'Close' : 'Add Project'} classNameButtonComp={'w-fit px-4 py-1 border-white/20 bg-white/20 backdrop-blur-md text-[14px] hover:bg-white/30 mb-2'} />
        <div>{isModal ? <AddForm /> : ''}</div>
      </div>
    </div>
  );
};

export default HomeComp;
