'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<string[]>([]);

  // Load tasks from localStorage on mount
  useEffect(() => {
    const storedTasks = localStorage.getItem('growth-tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('growth-tasks', JSON.stringify(tasks));
  }, [tasks]);

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
    <main className="min-h-screen bg-[#0d0d0d] text-white px-6 py-10 font-sans">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 tracking-tight text-white">The Growth Project Tracker</h1>
        <p className="text-gray-400 mb-8">Track your ideas. Build your vision. Start with one task.</p>

        <div className="flex items-center gap-3 mb-8">
          <input
            type="text"
            placeholder="What do you need to do?"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="flex-1 px-4 py-3 rounded-xl bg-[#1a1a1a] border border-gray-700 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <button
            onClick={handleAddTask}
            className="px-5 py-3 bg-red-600 hover:bg-red-700 transition rounded-xl text-white font-medium"
          >
            Add
          </button>
        </div>

        <div className="space-y-4">
          {tasks.map((t, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-[#1a1a1a] border border-gray-700 px-4 py-3 rounded-xl shadow-sm"
            >
              <span className="text-white text-base">{t}</span>
              <button
                onClick={() => handleRemoveTask(index)}
                className="text-sm text-gray-400 hover:text-red-400 transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
