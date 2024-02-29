import React from 'react';
import {ScrollView, View, Text, Pressable, StyleSheet} from 'react-native';

function ToDoList({tasks}) {
  return (
    <ScrollView>
      <View>
        <Pressable>
          {tasks.map(task => {
            return (
              <View style={[styles.task]}>
                <Text style={styles.taskText}>{task.name}</Text>
              </View>
            );
          })}
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  task: {
    marginTop: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },
});

export default ToDoList;
