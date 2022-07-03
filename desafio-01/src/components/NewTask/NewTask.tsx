import { Trash } from "phosphor-react";
import { ITask } from "../../Interfaces";
import { ContainerNewTask } from "./styles";

interface TaskProps {
  task: ITask;
  onCheckTask: (checkTaskById: string) => void;
  onDeleteTask: (deleteTaskById: string) => void;
  onCompletedTasksCounter: () => void;
  onChangedTasksCounter: () => void;
}

export function NewTask({ task, onCheckTask, onDeleteTask, onCompletedTasksCounter, onChangedTasksCounter }: TaskProps) {

  function handleCheckCompletedTask() {
    console.log('Check completed task')

    onCheckTask(task.id)
    onCompletedTasksCounter()
  }

  function handleDeleteTask() {
    console.log("Task deleted");

    onDeleteTask(task.id);
    onChangedTasksCounter();
  }


  return (
    <ContainerNewTask>
   
      <ul>
        <label className="container">
            <input
              type="checkbox"
              readOnly
              checked={task.isComplete}
              onClick={handleCheckCompletedTask}
            />
            <span className="checkmark"></span>
        </label>

            <li> 

            <p>{task.title}</p>

            </li>
            
            <button type="button" data-testid="remove-task-button" onClick={handleDeleteTask}>
              <Trash size={20}/>
            </button>
  
      </ul>
   
    </ContainerNewTask>

  )
}