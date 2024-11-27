"use client"
import Image from "next/image";
import React, { useState, useRef, useEffect } from 'react';
import micIcon from "../../public/micIcon.png";
import ResponsiveLayout from './components/responsiveLayout/reponsiveLayout';

// Camera component for both AI and Human
const Camera = ({ type }) => {
  return (
    <div className="border-2 border-foreground rounded-lg p-5 w-full h-64 flex items-center justify-center bg-background">
      <span className="text-foreground">{type} cam</span>
    </div>
  );
};

// Chat Message component with labels
const ChatMessage = ({ message, isAI }) => {
  return (
    <div className={`flex flex-col mb-4 ${isAI ? 'items-start' : 'items-end'}`}>
      <span className="text-sm font-semibold mb-1 text-gray-600">
        {isAI ? 'AI' : 'HUMAN'}
      </span>
      <div 
        className={`p-3 rounded-lg max-w-[80%] ${
          isAI ? 'bg-gray-200' : 'bg-blue-100'
        }`}
      >
        {message}
      </div>
    </div>
  );
};

// Chat Window component with auto-scroll
const ChatWindow = ({ messages }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex flex-col h-[450px] overflow-y-scroll p-4 border-2 border-foreground rounded-lg bg-background">
      <div className="flex-1 flex flex-col">
        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg.text} isAI={msg.isAI} />
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

// Input Bar component with voice-to-text
const InputBar = ({ onSend }) => {
  const [input, setInput] = useState('');
  const [isListening, setIsListening] = useState(false);

  const startListening = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      
      recognition.continuous = false;
      recognition.interimResults = true;
      
      recognition.onstart = () => {
        setIsListening(true);
      };
      
      recognition.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map(result => result[0])
          .map(result => result.transcript)
          .join('');
        
        setInput(transcript);
      };
      
      recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };
      
      recognition.onend = () => {
        setIsListening(false);
      };
      
      recognition.start();
    } else {
      alert('Speech recognition is not supported in your browser.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSend(input);
      setInput('');
    }
  };
  return (
    <div className="flex items-center gap-2 mt-4">
      <div className='rounded-lg w-full h-12 flex flex-row justify-between border-2 border-foreground '>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Write your answer..."
        className="flex-1 p-3 outline:none rounded-lg bg-background focus:outline-none focus:border-blue-500"
      />
      <button
        type="button"
        onClick={startListening}
        className={`mr-2 mt-1 mb-1 p-2 rounded-full hover:bg-gray-300 ${isListening ? 'bg-red-100' : ''}`}
      >
        <Image src={micIcon} alt="searchIcon" width={20} height={20}></Image>
      </button>
      </div>
      <button
        type="submit"
        className={`p-2 rounded-xl h-12 w-28 hover:scale-105 transition-transform bg-green-500`}
        aria-label="Send Message"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

// Main IRIS Component
const IRIS = () => {
  const fileInputRef = useRef();
  const [filename,setFilename] = useState('');
  const [file,setFile] = useState('');
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", isAI: true },
    { text: "Hi! I have a question.", isAI: false },
    { text: "Sure, I'm here to help!", isAI: true },
    { text: "Sure, I'm here to help!", isAI: true },
    { text: "Sure, I'm here to help!", isAI: true },
    { text: "Sure, I'm here to help!", isAI: true },
  ]);

  const handleSendMessage = (text) => {
    setMessages([...messages, { text, isAI: false }]);
    setTimeout(() => {
      setMessages(prev => [...prev, { text: "I received your message!", isAI: true }]);
    }, 1000);
  };

  const [popup,setPopup] = useState(true);


  const handlePopUpStartClick = () =>{
    setPopup(false)
  }

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setFilename(file.name)
      setFile(file)
    }
  };

  const handleUploadFileClick =()=>{
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }


  const handleRemoveFile = () => {
    setFilename('');
    setFile(null);
  };


  return (
   <ResponsiveLayout>
    {popup && (
      <div className="fixed h-screen w-screen flex justify-center items-center pt-20 pb-20 backdrop-blur-lg">
      <div className="w-[500px] bg-background text-foreground rounded-lg p-2">
      <div 
        className="w-full h-[300px] border-2 rounded-lg flex justify-center items-center border-foreground cursor-pointer relative" 
        onClick={handleUploadFileClick}
      >
        {filename ? (
          <div className="border-2 border-foreground rounded-lg pl-4 pr-4 pt-4 pb-2 relative">
            <span 
              className="absolute top-0 right-1 pl-1 pr-1 mt-1 flex justify-center text-[9px] text-white bg-selectable rounded-full cursor-pointer" 
              onClick={(e) => {
                e.stopPropagation();  // Prevent triggering the file input click
                handleRemoveFile();
              }}
            >
              X
            </span>
            <div className="">
            {filename}
            </div>
          </div>
        ) : (
          <div>
            Drop or upload the document for interview
          </div>
        )}
      </div>
        <button
        type="submit"
        className={`p-2 rounded-xl w-full mt-2  outline-none text-white ${filename ?'bg-selectable':'bg-non-selectable'}`}
        onClick={filename?handlePopUpStartClick:()=>{return}}
      >
        Start
      </button>
      <input
            ref={fileInputRef}
            type="file"
            style={{ display: "none" }}
            accept=".doc,.docx,.pdf,.txt"
            onChange={handleFileChange}
          />
      </div>
      </div>
    )}
     <div className="h-full w-full flex justify-center pt-2 pb-2">
      <div className="w-1/2">
        <h1 className="text-2xl font-bold text-center mb-6 pb-2 border-b-2 border-foreground">IRIS</h1>
        <div className="grid grid-cols-2 gap-6 mb-4">
          <Camera type="AI" />
          <Camera type="Human" />
        </div>

        <ChatWindow messages={messages} />
        <InputBar onSend={handleSendMessage}/>
        </div>
      </div>
   </ResponsiveLayout>
  );
};

export default IRIS;
