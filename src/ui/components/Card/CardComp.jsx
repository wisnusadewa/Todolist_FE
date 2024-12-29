import React from 'react';
import ButtonComp from '../Button/ButtonComp';

const CardComp = ({ classNameCard, classNameCardProjectName, projectName, classNameCardDescpription, descpription, classNameButton, textButton, classNameButtonComp, onClickButton }) => {
  return (
    <div className={classNameCard}>
      <div>
        <div className={classNameCardProjectName}>{projectName}</div>
        <div className={classNameCardDescpription}>{descpription}</div>
      </div>
      <div className={classNameButton}>
        <ButtonComp onClickButton={onClickButton} classNameButtonComp={classNameButtonComp} textButton={textButton} />
      </div>
    </div>
  );
};

export default CardComp;
