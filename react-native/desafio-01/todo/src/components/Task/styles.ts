import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 327,
    height: 64,
    backgroundColor: '#262626',
    borderRadius: 8,
    boxSizing: 'border-box',
    padding: 15,
    marginBottom: 10
  },
  taskText: {
    width: 235,
    alignItems: 'center',
    justifyContent: 'space-around',
    color: '#F2F2F2',
    textAlign: 'center',
  },

  trashIcon: {
    width: 40
  },
  isChecked: {
    backgroundColor: '#4EA8DE',
    borderRadius: 100,
    width: 22,
    height: 22,
    alignItems: 'center',
    justifyContent: 'center'
  }
});