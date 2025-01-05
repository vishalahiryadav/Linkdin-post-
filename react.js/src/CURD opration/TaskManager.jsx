//CURD operation
import { useState } from 'react';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]); // Local state for tasks
  const [taskInput, setTaskInput] = useState(''); // Input state for new tasks
  const [editingTask, setEditingTask] = useState(null); // State for editing task

  const handleAddTask = () => {
    if (taskInput.trim() === '') return;

    const newTask = {
      id: Date.now(), // Unique ID based on timestamp
      name: taskInput,
    };

    setTasks([...tasks, newTask]);
    setTaskInput('');
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    setTaskInput(task.name);
  };

  const handleUpdateTask = () => {
    if (editingTask) {
      setTasks(
        tasks.map((task) =>
          task.id === editingTask.id ? { ...task, name: taskInput } : task
        )
      );
      setEditingTask(null);
      setTaskInput('');
    }
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Enter a new task"
      />
      {editingTask ? (
        <button onClick={handleUpdateTask}>Update Task</button>
      ) : (
        <button onClick={handleAddTask}>Add Task</button>
      )}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.name}
            <button onClick={() => handleEditTask(task)}>Edit</button>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;

