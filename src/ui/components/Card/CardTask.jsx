import React from 'react';
import ButtonComp from '../Button/ButtonComp';
import TaskItemComp from '../TaskItem/TaskItemComp';

const CardTask = ({ classNameCard, classNameCardProjectName, projectName, classNameCardStatus, status, itemId }) => {
  console.log('task id ?', itemId);

  return (
    <div className={classNameCard}>
      <div>
        <div className={classNameCardProjectName}>{projectName}</div>
      </div>
      <div>
        <div className={classNameCardStatus}>{status}</div>
      </div>
      <div>
        <TaskItemComp itemId={itemId} />
      </div>
    </div>
  );
};

export default CardTask;
