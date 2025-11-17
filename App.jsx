/**
 * My To Do List App
 *
 * @format
 */

import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog"]);

  const addTask = (taskText) => {
    
    if (taskText.trim() === "") return;
    setTasks([...tasks, taskText]); 
  };

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks}/>
      <ToDoForm addTask={addTask} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
