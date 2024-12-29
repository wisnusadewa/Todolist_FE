import React from 'react';
import { useNavigate } from 'react-router';

const CardComp = React.lazy(() => import('../Card/CardComp'));

const ProjectListComponent = ({ item }) => {
  const navigate = useNavigate();

  const handleId = () => {
    navigate(`/project/${item.id}`); // navigate to projectID
  };

  return (
    <CardComp
      classNameCard={'flex flex-col justify-around w-full text-white md:w-[250px] md:h-[200px] lg:w-[300px] rounded-[10px] text-center bg-white/30 border border-white/20 gap-2 backdrop-blur-lg mx-auto'}
      classNameCardProjectName={'text-[18px] mb-2 font-medium'}
      projectName={item.name}
      classNameCardDescpription={'text-14px italic'}
      descpription={item.description}
      textButton={'cek tugas'}
      onClickButton={handleId}
      classNameButton={'flex justify-center items-center'}
      classNameButtonComp={'border border-white/30 bg-white/30 px-2 rounded-[10px] py-1'}
    />
  );
};

export default ProjectListComponent;
