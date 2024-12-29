import React from 'react';
import AddTaskForm from '../AddTaskForm/AddTaskForm';
import ButtonComp from '../Button/ButtonComp';
import CardTask from '../Card/CardTask';
import { Plus, X } from '@phosphor-icons/react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementVisibleCount } from '../../../redux/useProjectSlice';

const TaskListComponent = ({ data, handleModal, isModal }) => {
  const { visibleCount } = useSelector((state) => state.project);
  const dispatch = useDispatch();

  const showMore = () => {
    dispatch(incrementVisibleCount(visibleCount)); // Tambahkan data yang ditampilkan
  };

  return (
    <div className="grid md:grid-cols-1 px-10 w-full gap-4 ">
      {/* ADD TASK FORM */}
      <div className=" flex flex-col gap-3">
        <div className="">
          <ButtonComp
            onClickButton={handleModal}
            textButton={
              isModal ? (
                <span className="flex gap-2">
                  <X size={24} />
                  Close
                </span>
              ) : (
                <span className="flex gap-2">
                  <Plus size={24} />
                  Add Task
                </span>
              )
            }
          />
        </div>
        <div className="bg-white/20 backdrop-blur-lg rounded-md w-full md:w-[600px]">{isModal && <AddTaskForm />}</div>
      </div>

      {/* TASK LIST */}
      <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {data?.slice(0, visibleCount).map((item, i) => {
          return (
            <CardTask
              classNameCard={'flex flex-col justify-around text-white w-full md:w-[250px] md:h-[200px] lg:w-[300px] rounded-[10px] text-center bg-white/30 border border-white/20 gap-2 backdrop-blur-lg mx-auto'}
              key={i}
              itemId={item.id}
              projectName={item.name}
              status={item.status}
              classNameCardProjectName={'text-[18px] font-bold'}
            />
          );
        })}
      </div>
      <div className=" flex justify-center">{visibleCount < data?.length && <ButtonComp classNameButtonComp={'bg-white/20 w-fit backdrop-blur-lg px-4 py-1 rounded-md'} onClickButton={showMore} textButton={'Lihat Selengkapnya'} />}</div>
    </div>
  );
};

export default TaskListComponent;
