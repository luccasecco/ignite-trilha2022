import { styles } from "./styles";
import { View, Text } from 'react-native'

interface CounterProps {
  created: number
  completed: number
}

export function Counter({created, completed}: CounterProps) {

  return (
      <View style={styles.counter}>
        <Text style={styles.created}>
          Criadas {created}
        </Text>
        <Text style={styles.checked}>
          Concluídas {completed} de {created}
        </Text>
      </View>
  )
}