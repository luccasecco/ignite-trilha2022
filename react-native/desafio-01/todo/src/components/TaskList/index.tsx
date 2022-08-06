import { TextInput, TouchableOpacity, View, Text, FlatList, Alert } from 'react-native'
import { IsEmpty } from '../IsEmpty'

import { styles } from './styles'
import React, { useState } from 'react'
import { Counter } from '../Counter'
import { Task } from '../Task'

interface NewTaskProps {
  id: string
  content: string
  isComplete: boolean
}


export function TaskList() {
  const [toDoList, setToDoList] = useState<NewTaskProps[]>([])
  const [taskContent, setTaskContent] = useState('')

  function handleTaskAdd() {
    const newTaskContent = {
      id: (Math.random()*100).toString(),
      content: taskContent,
      isComplete: false
    }

    setToDoList(prevState => [...prevState, newTaskContent])
    setTaskContent('')
  }

  function handleDeleteTask(deleteTaskById: string) {
    const tasksWithoutDeletedOne = toDoList.filter(taskName => {
      return taskName.id !== deleteTaskById
    })

    Alert.alert('Remover', `Tem certeza que deseja remover essa tarefa?`, [
      {
        text: 'Sim',
        onPress: () => setToDoList(tasksWithoutDeletedOne)
      },
      {
        text: 'Cancelar',
        style: 'cancel'
      }
    ])
  }
  
  function handleMarkAsCompleted(id: string) {
    const completedTask = toDoList.map(task => task.id === id ? {
      ...task,
      isComplete: !task.isComplete
    } : task);
    setToDoList(completedTask)
  }

  const completedTask = Number((toDoList.filter(item => item.isComplete === true)).length)

  return (
    <View >
      <View style={styles.container}>
      <TextInput 
        style={styles.input}
        placeholder='Adicione uma nova tarefa'
        placeholderTextColor='#808080'
        onChangeText={setTaskContent}
        value={taskContent}
      />
      <TouchableOpacity 
        style={styles.button}
        onPress={handleTaskAdd}
     
      >
      <Text style={styles.buttonText}>
        +
      </Text>
      </TouchableOpacity>
      </View>

      <Counter created={toDoList.length} completed={completedTask} />

      <View style={styles.contentList}>
      <FlatList 
        showsVerticalScrollIndicator={false}
        data={toDoList}
        renderItem={({item}) => (
          <Task
            key={item.id} 
            content={item.content}
            completedTask={item.isComplete}
            onCompletedTask={() => handleMarkAsCompleted(item.id)}
            onDeleteTask={() => handleDeleteTask(item.id)}  
          />
        )}
        ListEmptyComponent={() => (
        <View style={styles.isEmpty}>
        <IsEmpty />
        </View>
        )}
      />
      </View>
    </View>
  )
}