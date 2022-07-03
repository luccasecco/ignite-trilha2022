import { PlusCircle } from 'phosphor-react'
import { v4 as uuidv4 } from 'uuid';
import { ChangeEvent, FormEvent, useState } from "react";
import { ITask } from "../../Interfaces";
import { NewTask } from "../NewTask/NewTask";
import { toast } from 'react-toastify' 

import { Container, ContainerForm, Content, NewTaskContent } from "./styles";
import { ToDoList } from '../ToDoList/ToDoList';


export function Task(){
  const [tasks, setTasks] = useState<string>('')
  const [toDoList, setToDoList] = useState<ITask[]>([])
  const [taskCounter, setTaskCounter] = useState(0)
  const [completedTasks, setCompletedTasks] = useState(0)
  
  function handleTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setTasks(event.target.value)
  }

  function handleAddTask(event: FormEvent<HTMLButtonElement>) {
    event.preventDefault();
    if (!tasks) return toast.error('Ops... Digite uma nova tarefa')

    const idRandom = uuidv4()
    const newTask = {
      id: idRandom,
      title: tasks, 
      isComplete: false
    }

    setToDoList([...toDoList, newTask])
    setTasks('')
    getTasksCouter()

    toast.success('Tarefa cadastrada com sucesso!')
  }

  function completedTask(id: string) {
    const completedTask = toDoList.map(task => task.id === id ? {
      ...task,
      isComplete: !task.isComplete
    } : task);
    
    setToDoList(completedTask)
  }
  
  function deleteTask(deleteTaskById: string): void {
    const tasksWithoutDeletedOne = toDoList.filter(taskName => {
      return taskName.id !== deleteTaskById
    })
    
    setToDoList(tasksWithoutDeletedOne)
    toast.success('Tarefa excluída com sucesso!')
  }
  
  function getTasksCouter() {
    setTaskCounter(taskCounter + 1)
  }

  function completedTasksCounter() {
    setCompletedTasks(completedTasks + 1)
  }

  function changedTasksCounter() {
    setTaskCounter(taskCounter - 1)
  }


  return (
   <>
        <ContainerForm>
          <input 
            type="text" 
            autoComplete="off"
            placeholder="Adicione uma nova tarefa"
            name="task"
            value={tasks}
            onChange={handleTaskChange}
          />

          <button
            type="submit"
            onClick={handleAddTask}
          >
            Criar <PlusCircle size={18}/>
          </button>
        </ContainerForm>

        <Container>
          <Content>
            <strong>Tarefas criadas <input value={taskCounter} readOnly/></strong>
            <p>Concluídas <input value={completedTasks} readOnly/></p>
          </Content>
        </Container>


      {toDoList.length === 0 && (
        <ToDoList />       
      )}

      <NewTaskContent>
        {toDoList.map(task => (
           <div key={task.id} className={task.isComplete ? 'completed' : ''} >
             <NewTask task={task} onCheckTask={completedTask} onDeleteTask={deleteTask} onCompletedTasksCounter={completedTasksCounter} onChangedTasksCounter={changedTasksCounter}/>
           </div>
        ))} 
      </NewTaskContent>
   </>
  )
}
