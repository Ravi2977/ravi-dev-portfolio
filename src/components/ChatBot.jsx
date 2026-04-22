import React, { useEffect, useRef, useState } from "react";
import { streamApi } from "../services/chat.service";
import { v4 as v444 } from 'uuid'

function ChatBot() {
    const [open, setOpen] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const inputRef = useRef()
    const [conversationId,setConversationId]=useState("")

    const [messages, setMessages] = useState([
        {
            id: 1,
            role: "assistant",
            text: "Hi, I’m Ravi 👋 Full Stack Developer. Batao kya banana hai ya kis cheez me help chahiye?",
        },
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    const endRef = useRef(null);

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth" });

        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [messages]);

    useEffect(() => {
        if (open && inputRef.current) {
            inputRef.current.focus();
        }
    }, [open, isExpanded]);

    useEffect(()=>{
        if(localStorage.getItem("conversationId")){
            setConversationId(localStorage.getItem("conversationId"))
        }else{
            const newId = v444();
            setConversationId(newId);
            localStorage.setItem("conversationId",newId)
        }
    },[])

    console.log(conversationId)
    const sendMessage = async () => {
        const text = input.trim();
        if (!text) return;

        const userMsg = {
            id: Date.now(),
            role: "user",
            text,
        };

        const botId = Date.now() + 1;
        const botMsg = {
            id: botId,
            role: "assistant",
            text: "",
        };

        setMessages((prev) => [...prev, userMsg, botMsg]);
        setInput("");
        setLoading(true);

        try {
            await streamApi(text, conversationId, (chunk) => {
                setMessages((prev) =>
                    prev.map((msg) =>
                        msg.id === botId
                            ? { ...msg, text: msg.text + chunk }
                            : msg
                    )
                );
            });
        } catch (err) {
            setMessages((prev) =>
                prev.map((msg) =>
                    msg.id === botId
                        ? {
                            ...msg,
                            text: "Network issue lag raha hai, thoda baad try karo 🙃",
                        }
                        : msg
                )
            );
        } finally {
            setLoading(false);

            setTimeout(() => {
                inputRef.current?.focus();
            }, 0);

        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") sendMessage();
    };

    const formatMessage = (text) => {
        if (!text) return null;

        const lines = text.split("\n");

        return lines.map((line, index) => {
            line = line.trim();

            // Heading (bold sections)
            if (line.startsWith("**") && line.endsWith("**")) {
                return (
                    <div key={index} className="font-semibold mt-2">
                        {line.replace(/\*\*/g, "")}
                    </div>
                );
            }

            // Bullet points
            if (line.startsWith("•")) {
                return (
                    <li key={index} className="ml-4 list-disc">
                        {line.replace("•", "").trim()}
                    </li>
                );
            }

            // Normal text
            return (
                <div key={index} className="mt-1">
                    {line}
                </div>
            );
        });
    };

    return (
        <>
            {/* Floating Button */}
            <button
                onClick={() => setOpen(!open)}
                className="fixed bottom-6 right-6 bg-white text-black px-4 py-2 rounded-full shadow-lg hover:scale-105 transition"
            >
                💬 Chat
            </button>

            {/* Chat Window */}
            {open && (
                <div
                    className={`boxshadow fixed ${isExpanded
                        ? "top-[12%] right-[5%] w-[40%] h-[75%] rounded-2xl"
                        : "bottom-20 right-6 w-[350px] h-[500px]"
                        } 
    ${isExpanded ? "grid-bg backdrop-blur-md bg-opacity-80" : "grid-bg backdrop-blur-md bg-opacity-80"}
    border border-gray-800 shadow-2xl flex flex-col overflow-hidden transition-all duration-300`}
                >
                    {/* Header */}
                    <div className="p-3 border-b border-gray-800 text-white font-semibold flex justify-between items-center">
                        <span>Ravi AI</span>

                        <div className="flex gap-2 items-center">
                            {/* Expand / Collapse */}
                            <button
                                onClick={() => setIsExpanded((prev) => !prev)}
                                className="text-sm hover:text-gray-300"
                            >
                                {isExpanded ? "🗗" : "⛶"}
                            </button>

                            {/* Close */}
                            <button onClick={() => setOpen(false)}>✖</button>
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-3 space-y-3">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`flex ${msg.role === "user"
                                    ? "justify-end"
                                    : "justify-start"
                                    }`}
                            >
                                <div
                                    className={`px-3 py-2 rounded-xl text-sm max-w-[80%] ${msg.role === "user"
                                        ? "bg-white text-black"
                                        : "bg-gray-800 text-white"
                                        }`}
                                >
                                    <div className="whitespace-pre-wrap">
                                        {formatMessage(msg.text)}
                                    </div>
                                </div>

                                {/* Cursor effect */}
                                {msg.role === "assistant" &&
                                    loading &&
                                    msg.text === "" && (
                                        <span className="animate-pulse text-white ml-1">
                                            |
                                        </span>
                                    )}
                            </div>
                        ))}

                        {/* Typing indicator */}
                        {loading &&
                            messages[messages.length - 1]?.text === "" && (
                                <div className="text-gray-400 text-sm">
                                    Typing...
                                </div>
                            )}

                        <div ref={endRef} />
                    </div>

                    {/* Input */}
                    <div className="p-2 border-t border-gray-800 flex gap-2">
                        <input
                            type="text"
                            placeholder="Type message..."
                            className="flex-1 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm outline-none"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            disabled={loading}
                            ref={inputRef}
                        />
                        <button
                            onClick={sendMessage}
                            className="bg-white text-black px-3 py-2 rounded-lg text-sm"
                            disabled={loading}
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default ChatBot;