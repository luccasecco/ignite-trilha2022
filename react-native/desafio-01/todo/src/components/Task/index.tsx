import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";

interface TaskProps {
  content: string
  completedTask: boolean
  onDeleteTask: () => void
  onCompletedTask: () => void
}

export function Task({content, onDeleteTask, onCompletedTask, completedTask}: TaskProps) {
  

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={completedTask? styles.isChecked : undefined}
        onPress={onCompletedTask}
      >
        <Image source={require('../../../assets/check.png')} />
      </TouchableOpacity>
      <Text style={completedTask? styles.taskTextChecked : styles.taskText}> {content} </Text>
     
      <TouchableOpacity
        onPress={onDeleteTask}
      >
      <Image 
        source={require('../../../assets/trash.png')}
        style={styles.trashIcon}  
      />
      </TouchableOpacity>
     
    </View>
  )
}