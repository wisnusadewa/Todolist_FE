import React from 'react';
import AddFormProject from './AddFormProject';

const AddForm = () => {
  return (
    <div className="md:h-48 md:w-96 bg-white/20 backdrop-blur-lg px-4 rounded-md text-[14px] md:text-[18px]">
      <AddFormProject value1={'name'} value2={'description'} />
    </div>
  );
};

export default AddForm;
