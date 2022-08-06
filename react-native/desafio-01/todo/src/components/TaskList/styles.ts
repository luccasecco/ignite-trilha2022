import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: -20
  },
  input: {
    width: 271,
    height: 52,
    backgroundColor: '#262626',
    borderRadius: 8,
    padding: 10,
    marginRight: 4,
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    width: 52,
    height: 52,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  contentList: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  isEmpty: {
    marginTop: 80
  }
});