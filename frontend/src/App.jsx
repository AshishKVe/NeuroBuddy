import { useState } from 'react';

function App() {
  const [input, setInput] = useState("");
  
  // Mock Data to show the UI works
  const [messages, setMessages] = useState([
    { role: "model", text: "Hello! I am Neuro Buddy. How are you feeling today?" }
  ]);

  const handleSend = () => {
    if (!input.trim()) return;
    // Simulate User Message
    const userMsg = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Simulate AI "Typing" response
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "model", text: "I hear you. That sounds challenging. Can you tell me more about what triggered this feeling?" }]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="p-4 bg-gray-800 shadow-md border-b border-gray-700 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-400">🧠 Neuro Buddy</h1>
        <span className="text-xs bg-green-600 px-2 py-1 rounded">System Online</span>
      </header>

      {/* Chat Window */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[80%] p-3 rounded-lg ${msg.role === "user" ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-200"}`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="p-4 bg-gray-800 border-t border-gray-700">
        <div className="flex gap-2">
          <input 
            type="text"
            className="flex-1 p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
            placeholder="Type how you feel..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <button 
            onClick={handleSend}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-bold transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;