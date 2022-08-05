import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  counter: {
    flexDirection: 'row',
    height: 50,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    marginLeft: 38,
    marginBottom: 50,
    borderBottomColor: 'grey',
    borderBottomWidth: 1
  },
  created: {
    color: '#4EA8DE',
    fontWeight: 'bold',
    fontSize: 16
  },
  checked: {
    color: '#8284FA',
    fontWeight: 'bold',
    fontSize: 16
  },
  emptyTasks: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  textOne: {
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 16,
    color: '#808080',
  },
  textTwo: {
    color: '#808080',
    fontSize: 16,
    marginTop: 5
  }
})