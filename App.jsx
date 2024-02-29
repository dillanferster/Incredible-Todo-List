import React from 'react';
import ToDoList from './ToDoList';
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  TextInput,
  Button,
} from 'react-native';
import ToDoForm from './ToDoForm';

import { useState } from 'react';

function App() {

  const taskList = [
    {name: 'Do laundry', key: '1'},
    {name: 'Go to gym', key: '2'},
    {name: 'Walk dog', key:'3'}
  ];

  const [tasks,setTasks] = useState(taskList);

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks}/>
      <ToDoForm />
    </SafeAreaView>
  );
}

export default App;
