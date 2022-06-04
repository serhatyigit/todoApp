import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  text: {
    fontSize: 15,
  },
  completed_view: {
    backgroundColor: 'gray',
  },
  incomplete_view: {
    backgroundColor: 'darkseagreen',
  },
  completed_text: {
    textDecorationLine: 'line-through',
  },
  incompleted_text: {
    color: 'white',
  },
});
