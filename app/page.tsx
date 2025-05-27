'use client';

import { useState, useEffect } from 'react';

type Priority = 'low' | 'medium' | 'high';

interface Task {
  text: string;
  dueDate?: string;
  priority?: Priority;
}

export default function Home() {
  const [task, setTask] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState<Priority>('medium');
  const [tasks, setTasks] = useState<Task[]>([]);

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
      const newTask: Task = {
        text: task.trim(),
        dueDate: dueDate || undefined,
        priority,
      };
      setTasks([...tasks, newTask]);
      setTask('');
      setDueDate('');
      setPriority('medium');
    }
  };

  const handleRemoveTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handlePriorityChange = (value: string) => {
    if (value === 'low' || value === 'medium' || value === 'high') {
      setPriority(value);
    }
  };

  return (
    <main className="min-h-screen bg-[#0d0d0d] text-white px-6 py-10 font-sans">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 tracking-tight">The Growth Project Tracker</h1>
        <p className="text-gray-400 mb-8">Track your ideas. Build your vision. Start with one task.</p>

        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <input
            type="text"
            placeholder="What do you need to do?"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="flex-1 px-4 py-3 rounded-xl bg-[#1a1a1a] border border-gray-700 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="px-4 py-3 rounded-xl bg-[#1a1a1a] border border-gray-700 text-white"
          />
          <select
            value={priority}
            onChange={(e) => handlePriorityChange(e.target.value)}
            className="px-4 py-3 rounded-xl bg-[#1a1a1a] border border-gray-700 text-white"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
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
              className="flex flex-col sm:flex-row justify-between sm:items-center bg-[#1a1a1a] border border-gray-700 px-4 py-3 rounded-xl shadow-sm"
            >
              <div>
                <p className="text-white text-base font-medium">{t.text}</p>
                <p className="text-sm text-gray-400">
                  {t.dueDate && `Due: ${t.dueDate}`} {t.priority && `• Priority: ${t.priority}`}
                </p>
              </div>
              <button
                onClick={() => handleRemoveTask(index)}
                className="text-sm text-gray-400 hover:text-red-400 transition mt-2 sm:mt-0"
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
