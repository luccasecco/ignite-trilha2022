import { View, StatusBar } from 'react-native';
import { Header } from './src/components/Header';
import { TaskList } from './src/components/TaskList';
import { styles } from './src/styles/global';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header />
      <TaskList />
    </View>
  );
}

