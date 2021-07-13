/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [activeCount, setActiveCount] = useState(todoList.length);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Yapılacaklar</Text>
        <Text style={styles.title}>{activeCount}</Text>
      </View>
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
    flex: 1,
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
});

export default App;
