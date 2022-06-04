import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './ToDoAdder.styles';

const ToDoAdder = ({addToDo}) => {
  const [todoText, setTodoText] = useState('');

  const handleText = text => setTodoText(text);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textinput}
        autoCorrect={false}
        onChangeText={handleText}
      />
      <TouchableOpacity onPress={() => addToDo(todoText)}>
        <View style={styles.button}>
          <Text style={styles.button_text}>Kaydet</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ToDoAdder;
