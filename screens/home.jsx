import React from 'react';
import ToDoList from '../ToDoList';
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
import ToDoForm from '../ToDoForm';
import {useState} from 'react';
import MainLayout from '../layouts/MainLayout';

function HomeScreen({navigation}) {
  const addTask = taskText => {
    setTasks([...tasks, taskText]);
  };

  const taskList = [
    {name: 'Do laundry', key: '1'},
    {name: 'Go to gym', key: '2'},
    {name: 'Walk dog', key: '3'},
  ];

  const [tasks, setTasks] = useState(taskList);

  return (
    <MainLayout>
      <SafeAreaView>
        <ToDoList tasks={tasks} />
        <ToDoForm addTask={addTask} />
        <Button
          title="Go to About"
          onPress={() => navigation.navigate('About')}></Button>
      </SafeAreaView>
    </MainLayout>
  );
}

export default HomeScreen;
