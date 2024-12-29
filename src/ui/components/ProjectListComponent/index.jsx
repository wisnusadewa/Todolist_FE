import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useProjectService from '../../../hooks/useProjectService';
import { incrementVisibleCount } from '../../../redux/useProjectSlice';
import HomeLayout from '../../layout/HomeLayout';
import ButtonComp from '../Button/ButtonComp';
import Navbar from '../Navbar';
import ProjectListComponent from './ProjectListComponent';

const ProjectList = () => {
  const { getAllProject } = useProjectService();
  const { visibleCount } = useSelector((state) => state.project);
  const dispatch = useDispatch();

  const { data } = useQuery({
    queryKey: ['projects'],
    queryFn: getAllProject,
  });

  // console.log('data length?', data.length);

  const showMore = () => {
    dispatch(incrementVisibleCount(visibleCount)); // Tambahkan data yang ditampilkan
  };

  return (
    <HomeLayout>
      <div className="flex flex-col text-white gap-10 my-10">
        <div className="px-10 ">
          <Navbar />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-10 w-full gap-2">
          {data?.slice(0, visibleCount).map((item, i) => {
            return <ProjectListComponent item={item} key={i} />;
          })}
        </div>
        <div className="w-full flex justify-center">{visibleCount < data?.length && <ButtonComp classNameButtonComp={'bg-white/20 backdrop-blur-lg px-4 py-1 rounded-md'} onClickButton={showMore} textButton={'Lihat Selengkapnya'} />}</div>
      </div>
    </HomeLayout>
  );
};

export default ProjectList;
