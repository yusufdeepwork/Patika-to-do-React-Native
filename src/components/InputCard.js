import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';

const InputCard = ({setTodoList, todoList, setActiveCount}) => {
  const [todo, setTodo] = useState();

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Yapılacak..."
        value={todo}
        onChangeText={setTodo}
        placeholderTextColor={'gray'}
      />
      <TouchableOpacity
        style={[
          styles.button,
          {backgroundColor: `${todo ? '#eaa419' : '#7c7c84'}`},
        ]}
        onPress={() => {
          setTodoList(() => [...todoList, todo]);
          setActiveCount(prevState => prevState + 1);
          setTodo('');
        }}
        disabled={!todo}>
        <Text style={{fontSize: 20, color: 'white'}}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
};
export default InputCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#42525a',
    margin: 10,
    padding: 20,
    borderRadius: 20,
    justifyContent: 'space-between',
  },
  button: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 40,
  },
  input: {
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
    marginBottom: 10,
    color: 'white',
    textAlign: 'left',
    padding: 10,
    height: 40,
  },
});
