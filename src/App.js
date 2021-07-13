/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import InputCard from './components/InputCard';
import ToDoCard from './components/ToDoCard';

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [activeCount, setActiveCount] = useState(todoList.length);
  const renderToDo = props => (
    <ToDoCard setActiveCount={setActiveCount} todoText={props.item} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Yapılacaklar</Text>
        <Text style={styles.title}>{activeCount}</Text>
      </View>
      <FlatList
        keyExtractor={(item, index) => index}
        style={styles.list}
        data={todoList}
        renderItem={renderToDo}
      />
      <InputCard
        setActiveCount={setActiveCount}
        setTodoList={setTodoList}
        todoList={todoList}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102027',
  },
  headerContainer: {
    justifyContent: 'space-between',
    height: 50,
    margin: 15,
    marginTop: 5,
    flexDirection: 'row',
  },
  title: {
    fontSize: 40,
    color: '#ffa900',
    fontWeight: 'bold',
  },
  countStyle: {},
  list: {
    flex: 1,
  },
});

export default App;
