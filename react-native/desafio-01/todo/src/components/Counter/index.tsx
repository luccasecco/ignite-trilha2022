import { styles } from "./styles";
import { View, Text } from 'react-native'

interface CounterProps {
  created: number
}

export function Counter({created}: CounterProps) {
  return (
      <View style={styles.counter}>
        <Text style={styles.created}>
          Criadas {created}
        </Text>
        <Text style={styles.checked}>
          Concluídas 0 de {created}
        </Text>
      </View>
  )
}