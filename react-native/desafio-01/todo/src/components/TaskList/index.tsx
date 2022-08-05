import { TextInput, TouchableOpacity, View, Text, FlatList, Alert } from 'react-native'
import { IsEmpty } from '../IsEmpty'

import { styles } from './styles'
import React, { useState } from 'react'
import { Counter } from '../Counter'
import { Task } from '../Task'

export function TaskList() {
  const [newTasks, setNewTasks] = useState<string[]>([])
  const [taskContent, setTaskContent] = useState('')
  const [statusTask, setStatusCheck] = useState(false)

  function handleTaskAdd() {
    if (newTasks.includes(taskContent)) {
      return Alert.alert('Tarefa repetida', 'Tarefa já cadastrada')
    }

    setNewTasks(prevState => [...prevState, taskContent])
    setTaskContent('')
  }

  function handleDeleteTask(content: string) {
    Alert.alert('Remover', `Tem certeza que deseja remover essa tarefa?`, [
      {
        text: 'Sim',
        onPress: () => setNewTasks(prevState => prevState.filter(task => task !== content))
      },
      {
        text: 'Cancelar',
        style: 'cancel'
      }
    ])
  }
  
  function handleMarkAsCompleted(content: string) {
    setStatusCheck(!statusTask)
  }
  
  
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

      <Counter created={newTasks.length} />

      <View style={styles.contentList}>
      <FlatList 
        showsVerticalScrollIndicator={false}
        data={newTasks}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Task
            key={item} 
            content={item}
            completedTask={statusTask}
            onCompletedTask={() => handleMarkAsCompleted(item)}
            onDeleteTask={() => handleDeleteTask(item)}  
          />
        )}
        ListEmptyComponent={() => (<IsEmpty />)}
      />
      </View>
    </View>
  )
}