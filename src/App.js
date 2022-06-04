import {View, Text, SafeAreaView, StyleSheet, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import ToDoItem from './components/ToDoItem';
import ToDoAdder from './components/ToDoAdder';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 0,
      text: 'Çöpler atılacak',
      done: false,
    },
    {
      id: 1,
      text: 'Ev temizlenecek',
      done: false,
    },
  ]);

  const [toDoCount, setToDoCount] = useState(0);

  const onToDoComplete = id => {
    const updatedToDos = [...todos];

    updatedToDos.map(item => {
      if (item.id === id) {
        item.done = true;
      }
    });

    setTodos(updatedToDos);
  };

  const renderTodos = ({item}) => (
    <ToDoItem item={item} onComplete={onToDoComplete} />
  );

  const addToDo = text => {
    const item = {
      id: Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, '')
        .substr(2, 10),
      text,
      done: false,
    };
    const updatedToDos = [...todos];

    updatedToDos.push(item);

    setTodos(updatedToDos);
  };

  useEffect(() => {
    let count = 0;

    for (let i = 0; i < todos.length; i++) {
      if (todos[i].done === false) {
        count++;
      }
    }
    setToDoCount(count);
  }, [todos]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
        <Text style={styles.text}>Yapılacaklar</Text>
        <Text style={styles.text}>{toDoCount}</Text>
      </View>
      <View style={styles.flatlistcontainer}>
        <FlatList data={todos} renderItem={renderTodos} />
      </View>
      <View style={styles.addTodo}>
        <ToDoAdder addToDo={addToDo} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkslategrey',
  },
  topView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  text: {
    color: 'orange',
    fontSize: 40,
    fontWeight: 'bold',
  },
  addTodo: {
    marginBottom: 20,
  },
  flatlistcontainer: {
    flex: 1,
  },
});

export default App;
