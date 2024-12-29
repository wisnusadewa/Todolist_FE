import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useProject from '../../../hooks/useProject';
import FormTask from '../Form/FormTask';

const TaskItemComp = ({ itemId }) => {
  const { editTaskQuery } = useProject();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // PERBARUI DATA "PUT"
  const onSubmit = (data) => {
    // console.log(data);
    // console.log('itemid?', itemId);

    const payload = {
      id: itemId,
      status: data.status,
    };

    editTaskQuery.mutate(payload);
    console.log(payload);
  };

  return (
    <div>
      <FormTask register={register} handleSubmit={handleSubmit} errors={errors} onSubmit={onSubmit} />
    </div>
  );
};

export default TaskItemComp;
