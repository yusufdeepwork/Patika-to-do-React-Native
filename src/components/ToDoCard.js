import React, {useState} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const ToDoCard = ({todoText, setActiveCount}) => {
  const [isDone, setIsDone] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => {
        setIsDone(() => true);
        setActiveCount(prevState => prevState - 1);
      }}
      style={
        isDone ? [styles.todoContainer, styles.doneStyle] : styles.todoContainer
      }>
      <Text
        style={
          isDone ? [styles.todoStyle, styles.doneTodoText] : styles.todoStyle
        }>
        {todoText}
      </Text>
    </TouchableOpacity>
  );
};

export default ToDoCard;

const styles = StyleSheet.create({
  todoContainer: {
    flex: 1,
    minHeight: 45,
    margin: 6,
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#7bbb3d',
  },
  todoStyle: {
    color: 'white',
    padding: 10,
    fontSize: 15,
  },
  doneStyle: {
    backgroundColor: '#425353',
    color: 'gray',
  },
  doneTodoText: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
});
