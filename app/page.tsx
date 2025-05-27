'use client';

import { useState } from 'react';

export default function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, input]);
    setInput('');
  };

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-4">The Growth Project Tracker</h1>
      <p className="mb-6 text-gray-400">Enter a task and start tracking your moves.</p>

      <div className="flex items-center gap-2 mb-6">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add your task..."
          className="p-2 rounded bg-gray-800 text-white w-full max-w-md"
        />
        <button
          onClick={addTask}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      <div className="space-y-2">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="bg-gray-800 p-3 rounded-md shadow text-white max-w-md"
          >
            {task}
          </div>
        ))}
      </div>
    </main>
  );
}
