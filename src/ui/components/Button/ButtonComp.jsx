import React from 'react';

const ButtonComp = ({ onClickButton, textButton, classNameButtonComp }) => {
  return (
    <button className={classNameButtonComp} onClick={onClickButton}>
      {textButton}
    </button>
  );
};

export default ButtonComp;
