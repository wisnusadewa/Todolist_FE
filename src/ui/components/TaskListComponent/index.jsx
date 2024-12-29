import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import useProject from '../../../hooks/useProject';
import { setisModal } from '../../../redux/useProjectSlice';
import HomeLayout from '../../layout/HomeLayout';
import ButtonComp from '../Button/ButtonComp';
import TaskListComponent from './TaskListComponent';

const TaskList = () => {
  const { isModal } = useSelector((state) => state.project);
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id); // cek id
  const navigate = useNavigate();

  const { getProjectIDQuery } = useProject();
  const { data } = getProjectIDQuery(id);
  console.log(data);

  const handleBack = () => {
    navigate('/daftar_project');
  };

  const handleModal = () => {
    dispatch(setisModal(!isModal));
  };

  // console.log(isModal);
  return (
    <HomeLayout>
      <div className="flex flex-col text-white gap-10 my-10">
        <div className="flex items-center px-10 md:h-20 ">
          <ButtonComp onClickButton={handleBack} textButton={'Back'} classNameButtonComp={'bg-white/20 backdrop-blur-lg px-4 py-1 rounded-md md:text-[24px]'} />
        </div>
        <div>
          <TaskListComponent data={data} handleModal={handleModal} isModal={isModal} />
        </div>
      </div>
    </HomeLayout>
  );
};

export default TaskList;
