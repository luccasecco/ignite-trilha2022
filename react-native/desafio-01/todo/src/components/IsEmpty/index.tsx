import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './styles'

export function IsEmpty() {
  return (
      <View style={styles.emptyTasks}>
        <Image source={require('../../../assets/clipboard.png')}/>
        <Text style={styles.textOne}>
        Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styles.textTwo}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
  )
}