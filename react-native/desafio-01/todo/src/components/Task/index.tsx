import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";

export function Task() {
  const [statusTask, setStatusCheck] = useState(false)

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={statusTask? styles.isChecked : undefined}
        onPress={() => setStatusCheck(!statusTask)}
      >
        <Image source={require('../../../assets/check.png')} />
      </TouchableOpacity>
      <Text style={styles.taskText}> Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
     
      <TouchableOpacity>
      <Image 
        source={require('../../../assets/trash.png')}
        style={styles.trashIcon}  
      />
      </TouchableOpacity>
     
    </View>
  )
}