import { useForm } from 'react-hook-form';
import React from 'react';
import useProject from '../../../hooks/useProject';
import { useSelector } from 'react-redux';
import FormComp from '../Form/FormComp';

const AddFormProject = ({ value1, value2 }) => {
  const { register, handleSubmit, reset } = useForm();
  const { isLoading } = useSelector((state) => state.project);

  const { createProjectQuery } = useProject();

  const onSubmit = (data) => {
    createProjectQuery.mutate(data);
    console.log(data);
    reset();
  };

  return <FormComp register={register} handleSubmit={handleSubmit} onSubmit={onSubmit} value1={value1} value2={value2} isLoading={isLoading} />;
};

export default AddFormProject;
