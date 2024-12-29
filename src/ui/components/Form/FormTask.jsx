import React from 'react';

const FormTask = ({ register, handleSubmit, errors, onSubmit, isLoading, fields }) => {
  return (
    <form className="flex flex-col gap-4 py-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2 justify-center items-center w-full  h-full">
        <div className="">
          {fields?.map((field, i) => (
            <div className="flex flex-col gap-2" key={i}>
              <label htmlFor={field.name}>{field.label}</label>
              {field.type === 'text' ? <input className="text-black px-2" type={'text'} {...register(field.name, field.validation)} /> : ''}
              {errors[field.name] && <p className="text-red-400">{errors[field.name].message}</p>}
            </div>
          ))}
        </div>
        <div>
          <label htmlFor="status">Status</label>
        </div>
        <div>
          <select defaultValue="" className="flex text-center outline-none md:w-24 lg:w-32 text-black" {...register('status', { required: 'Please select a status' })}>
            <option value="" disabled>
              -- Select --
            </option>
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
          {errors.status && <p className="text-red-400">{errors.status.message}</p>}
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <input disabled={isLoading} className="px-4 py-1 rounded-md bg-white/20 hover:bg-white/30" type="submit" />
      </div>
    </form>
  );
};

export default FormTask;
