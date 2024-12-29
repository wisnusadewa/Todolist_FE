import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import useProject from '../../../hooks/useProject';
import FormTask from '../Form/FormTask';

const AddTaskForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { isLoading } = useSelector((state) => state.project);

  const { createTaskQuery } = useProject();
  const { id } = useParams();
  // console.log('id project?', id);

  // FORM
  const fields = [{ name: 'name', label: 'name', placeholder: 'your task name', type: 'text', validation: { required: 'task name is required' } }];

  // CREATE TASK PADA PROJECT
  const onSubmit = (data) => {
    const payload = {
      ...data,
      id,
    };
    createTaskQuery.mutate(payload);
    // console.log('isi payload?', payload);
    reset();
  };

  return (
    <div>
      <FormTask register={register} handleSubmit={handleSubmit} errors={errors} onSubmit={onSubmit} fields={fields} isLoading={isLoading} />
    </div>
  );
};

export default AddTaskForm;
