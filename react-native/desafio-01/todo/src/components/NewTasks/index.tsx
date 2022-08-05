import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { Task } from '../Task'

export function NewTasks() {
  return (
    <View >

      <View style={styles.counter}>
        <Text style={styles.created}>
          Criadas 0
        </Text>
        <Text style={styles.checked}>
          Concluídas 0 de 0
        </Text>
      </View>

      

      <View style={styles.emptyTasks}>
      <Task />
        {/* <Image source={require('../../../assets/clipboard.png')}/>
        <Text style={styles.textOne}>
        Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styles.textTwo}>
          Crie tarefas e organize seus itens a fazer
        </Text> */}
      </View>

    </View>
  )
}