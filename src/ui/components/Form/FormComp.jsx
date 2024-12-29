import React from 'react';

const FormComp = ({ register, handleSubmit, onSubmit, value1, value2, isLoading }) => {
  return (
    <form className="flex flex-col gap-4 text-black " onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col ">
        <label htmlFor="name">{value1}</label>
        <input className=" px-2" {...register(`${value1}`)} />
      </div>

      <div className="flex flex-col">
        <label htmlFor="name">{value2}</label>
        <input className=" px-2" {...register(`${value2}`)} />
      </div>

      <div className="flex w-full justify-center">
        <input disabled={isLoading} className="px-4 py-1 bg-white/20 hover:bg-white/30 rounded-md backdrop-blur-lg  w-fit" type="submit" />
      </div>
    </form>
  );
};

export default FormComp;
