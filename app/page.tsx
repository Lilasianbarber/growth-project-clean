'use client';

import { useState } from 'react';

export default function Home() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<string[]>([]);

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task.trim()]);
      setTask('');
    }
  };

  const handleRemoveTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-4">The Growth Project Tracker</h1>
      <p className="mb-4">Enter a task and start tracking your moves.</p>
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Add your task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="px-3 py-2 rounded bg-white text-black"
        />
        <button
          onClick={handleAddTask}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
        >
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {tasks.map((t, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-800 px-4 py-2 rounded"
          >
            <span>{t}</span>
            <button
              onClick={() => handleRemoveTask(index)}
              className="text-sm text-gray-400 hover:text-red-400"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
