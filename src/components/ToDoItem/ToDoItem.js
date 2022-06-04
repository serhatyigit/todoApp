import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './ToDoItem.styles';

const ToDoItem = ({item, onComplete}) => {
  return (
    <TouchableOpacity onPress={() => onComplete(item.id)}>
      <View
        style={[
          styles.container,
          item.done ? styles.completed_view : styles.incomplete_view,
        ]}>
        <Text
          style={[
            styles.text,
            item.done ? styles.completed_text : styles.incompleted_text,
          ]}>
          {item.text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ToDoItem;
