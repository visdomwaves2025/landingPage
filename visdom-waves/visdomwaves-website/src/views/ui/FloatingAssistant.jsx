import { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export function FloatingAssistant() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: "1",
            text: "👋 Hello! I'm your AI assistant. I can help you navigate the website or answer your questions. Try saying 'go to about page' or 'show me services'!",
            sender: "assistant",
            timestamp: new Date(),
        },
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isListening, setIsListening] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [voiceSupported, setVoiceSupported] = useState(() => {
        if (typeof window === "undefined") return false;
        return !!(window.SpeechRecognition || window.webkitSpeechRecognition);
    });
    const [micPermission, setMicPermission] = useState("unknown");
    const [interimTranscript, setInterimTranscript] = useState("");
    const messagesEndRef = useRef(null);
    const recognitionRef = useRef(null);
    const isRecognitionActiveRef = useRef(false);
    const navigate = useNavigate();

    // Auto-scroll to bottom when new messages arrive
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    // Check microphone permission status
    useEffect(() => {
        if (typeof navigator !== "undefined" && navigator.permissions) {
            navigator.permissions.query({ name: "microphone" })
                .then((result) => {
                    setMicPermission(result.state);
                    result.onchange = () => {
                        setMicPermission(result.state);
                    };
                })
                .catch(() => {
                    setMicPermission("unknown");
                });
        }
    }, []);



    const addAssistantMessage = useCallback((text) => {
        const message = {
            id: Date.now().toString(),
            text,
            sender: "assistant",
            timestamp: new Date(),
        };
        setMessages((prev) => [...prev, message]);
    }, []);

    const speak = useCallback((text) => {
        if (typeof window !== "undefined" && "speechSynthesis" in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.rate = 0.9;
            utterance.pitch = 1;
            utterance.volume = 1;
            window.speechSynthesis.speak(utterance);
        }
    }, []);

    const navigateToPage = useCallback((path) => {
        navigate(path);
    }, [navigate]);

    const processCommand = useCallback((message) => {
        const lowerMessage = message.toLowerCase().trim();

        const navigationMap = {
            "home": { path: "/", response: "Taking you to the home page." },
            "about": { path: "/about", response: "Navigating to the about page." },
            "services": { path: "/services", response: "Showing you our services." },
            "products": { path: "/products", response: "Here are our products." },
            "blog": { path: "/blog", response: "Opening the blog page." },
            "contact": { path: "/contact", response: "Redirecting to the contact page." },
            "careers": { path: "/careers", response: "Opening the careers page." },
            "case studies": { path: "/case-studies", response: "Viewing our case studies." },
            "case study": { path: "/case-studies", response: "Viewing our case studies." },
        };

        for (const [key, value] of Object.entries(navigationMap)) {
            if (lowerMessage.includes(key) && (
                lowerMessage.includes("go to") ||
                lowerMessage.includes("go ") ||
                lowerMessage.includes("open") ||
                lowerMessage.includes("show") ||
                lowerMessage.includes("take me") ||
                lowerMessage.includes("navigate") ||
                lowerMessage.includes("visit")
            )) {
                return { response: value.response, navigate: value.path };
            }
        }

        for (const [key, value] of Object.entries(navigationMap)) {
            if (lowerMessage === key || lowerMessage === `${key} page`) {
                return { response: value.response, navigate: value.path };
            }
        }

        if (lowerMessage.includes("web development") || lowerMessage.includes("web dev")) {
            return { response: "Opening web development services.", navigate: "/services/web-development" };
        }
        if (lowerMessage.includes("mobile app") || lowerMessage.includes("app development")) {
            return { response: "Showing mobile app development services.", navigate: "/services/mobile-app-development" };
        }
        if (lowerMessage.includes("ai") || lowerMessage.includes("machine learning") || lowerMessage.includes("ml")) {
            return { response: "Navigating to AI & Machine Learning services.", navigate: "/services/ai-machine-learning" };
        }
        if (lowerMessage.includes("cloud")) {
            return { response: "Opening cloud computing services.", navigate: "/services/cloud-computing" };
        }
        if (lowerMessage.includes("digital transformation")) {
            return { response: "Showing digital transformation services.", navigate: "/services/digital-transformation" };
        }

        if (lowerMessage.includes("education") || lowerMessage.includes("edtech")) {
            return { response: "Opening education industry page.", navigate: "/industries/education" };
        }
        if (lowerMessage.includes("healthcare") || lowerMessage.includes("health")) {
            return { response: "Opening healthcare industry page.", navigate: "/industries/healthcare" };
        }
        if (lowerMessage.includes("technology") || lowerMessage.includes("tech")) {
            return { response: "Opening technology industry page.", navigate: "/industries/technology" };
        }
        if (lowerMessage.includes("construction")) {
            return { response: "Opening construction industry page.", navigate: "/industries/construction" };
        }
        if (lowerMessage.includes("temple")) {
            return { response: "Opening temple projects page.", navigate: "/industries/temple-projects" };
        }
        if (lowerMessage.includes("consulting")) {
            return { response: "Opening consulting industry page.", navigate: "/industries/consulting" };
        }

        if (lowerMessage.includes("help") || lowerMessage.includes("what can you do")) {
            return {
                response: "I can help you navigate the website! Try commands like:\n• 'Go to about page'\n• 'Show me services'\n• 'Open contact page'\n• 'Take me to blog'\n• 'Visit products'"
            };
        }

        if (lowerMessage.match(/^(hi|hello|hey|hii|hiii|good morning|good afternoon|good evening)$/)) {
            return { response: "Hello! 👋 How can I help you today? You can ask me to navigate to any page or ask about our services!" };
        }

        if (lowerMessage.includes("who are you") || lowerMessage.includes("what is visdomwaves") || lowerMessage.includes("about visdomwaves")) {
            return { response: "VisdomWaves Innovations is a technology consulting company specializing in AI-driven solutions, digital transformation, and industry-specific technology services." };
        }

        if (lowerMessage.includes("what do you offer") || lowerMessage.includes("your services") || lowerMessage.includes("what services")) {
            return { response: "We offer Web Development, Mobile App Development, AI & Machine Learning, Cloud Computing, and Digital Transformation services. Say 'show services' to see more!" };
        }

        if (lowerMessage.includes("phone") || lowerMessage.includes("call") || lowerMessage.includes("number")) {
            return { response: "You can reach us at +91 7997755133. Say 'go to contact' to visit our contact page." };
        }

        if (lowerMessage.includes("email") || lowerMessage.includes("mail")) {
            return { response: "Our email is info@visdomwavess.com. Say 'go to contact' to visit our contact page." };
        }

        if (lowerMessage.includes("thank") || lowerMessage.includes("thanks")) {
            return { response: "You're welcome! Is there anything else I can help you with?" };
        }

        return { response: "I can help you navigate! Try saying 'go to about page' or 'show me services'. Type 'help' to see all commands." };
    }, []);

    const processAndSendMessage = useCallback((text) => {
        if (!text.trim()) return;

        const userMessage = {
            id: Date.now().toString(),
            text: text.trim(),
            sender: "user",
            timestamp: new Date(),
        };
        setMessages((prev) => [...prev, userMessage]);
        setInputValue("");

        setIsTyping(true);

        setTimeout(() => {
            const { response, navigate } = processCommand(text);

            const assistantMessage = {
                id: (Date.now() + 1).toString(),
                text: response,
                sender: "assistant",
                timestamp: new Date(),
            };

            setMessages((prev) => [...prev, assistantMessage]);
            setIsTyping(false);

            speak(response);

            if (navigate) {
                setTimeout(() => {
                    navigateToPage(navigate);
                }, 1200);
            }
        }, 500);
    }, [processCommand, speak, navigateToPage]);

    const startVoiceRecognition = useCallback(() => {
        // Prevent multiple recognition instances
        if (isRecognitionActiveRef.current) {
            return;
        }

        if (!voiceSupported) {
            addAssistantMessage("Voice input is not supported in your browser. Please use Chrome, Edge, or Safari.");
            return;
        }

        // Create speech recognition instance - this will trigger browser's permission popup
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            addAssistantMessage("Speech recognition is not available in your browser.");
            return;
        }

        // Stop any existing recognition
        if (recognitionRef.current) {
            try {
                recognitionRef.current.abort();
                recognitionRef.current = null;
            } catch (e) {
                // Ignore
            }
        }

        const recognition = new SpeechRecognition();
        recognition.continuous = true; // Keep listening for longer phrases
        recognition.interimResults = true; // Show what user is saying in real-time
        recognition.lang = "en-US";
        recognition.maxAlternatives = 1;

        let finalTranscript = "";
        let silenceTimeout = null;
        let hasReceivedSpeech = false;

        const resetSilenceTimeout = () => {
            if (silenceTimeout) {
                clearTimeout(silenceTimeout);
            }
            // Stop recognition after 3 seconds of silence with final transcript
            // Or after 8 seconds if no speech detected at all
            const timeout = hasReceivedSpeech ? 3000 : 8000;
            silenceTimeout = setTimeout(() => {
                if (recognitionRef.current) {
                    try {
                        recognitionRef.current.stop();
                    } catch (e) {
                        // Ignore
                    }
                }
            }, timeout);
        };

        recognition.onstart = () => {
            isRecognitionActiveRef.current = true;
            setIsListening(true);
            setInterimTranscript("");
            setMicPermission("granted");
            finalTranscript = "";
            hasReceivedSpeech = false;
            resetSilenceTimeout();
        };

        recognition.onaudiostart = () => {
            // Audio capture has started - microphone is active
            console.log("Audio capture started - microphone is active");
        };

        recognition.onresult = (event) => {
            hasReceivedSpeech = true;
            let interimText = "";
            let finalText = "";

            for (let i = event.resultIndex; i < event.results.length; i++) {
                const transcript = event.results[i][0].transcript;
                if (event.results[i].isFinal) {
                    finalText += transcript;
                } else {
                    interimText += transcript;
                }
            }

            if (finalText) {
                finalTranscript += finalText;
                setInterimTranscript(finalTranscript);
                setInputValue(finalTranscript);
                resetSilenceTimeout();
            } else if (interimText) {
                setInterimTranscript(finalTranscript + interimText);
                resetSilenceTimeout();
            }
        };

        recognition.onerror = (event) => {
            console.log("Speech recognition error:", event.error);

            if (silenceTimeout) {
                clearTimeout(silenceTimeout);
            }
            isRecognitionActiveRef.current = false;
            setIsListening(false);
            setInterimTranscript("");

            if (event.error === "not-allowed") {
                setMicPermission("denied");
                addAssistantMessage("🔒 Microphone access was blocked. Please allow microphone access when prompted by your browser, then try again.");
            } else if (event.error === "no-speech") {
                // Don't show error for no-speech, just stop silently
                // The user might want to try again
            } else if (event.error === "audio-capture") {
                addAssistantMessage("🎤 No microphone detected. Please check that a microphone is connected and try again.");
            } else if (event.error === "network") {
                addAssistantMessage("Network error. Speech recognition requires an internet connection. Please check your connection and try again.");
            } else if (event.error === "aborted") {
                // User cancelled, do nothing
            } else if (event.error === "service-not-allowed") {
                // This happens when the browser blocks the service
                setMicPermission("denied");
                addAssistantMessage("🔒 Speech recognition service is blocked. Please check your browser settings and allow microphone access for this site.");
            } else {
                console.error("Speech recognition error:", event.error);
                addAssistantMessage("Voice recognition failed. Please try again or type your message.");
            }
        };

        recognition.onend = () => {
            if (silenceTimeout) {
                clearTimeout(silenceTimeout);
            }
            isRecognitionActiveRef.current = false;
            setIsListening(false);
            recognitionRef.current = null;

            // Process the final transcript if we have one
            if (finalTranscript.trim()) {
                setInterimTranscript("");
                processAndSendMessage(finalTranscript.trim());
                setInputValue("");
            } else {
                setInterimTranscript("");
            }
        };

        recognitionRef.current = recognition;

        // Start recognition - this triggers the browser's permission popup
        try {
            recognition.start();
            console.log("Speech recognition started - waiting for permission/audio");
        } catch (err) {
            console.error("Failed to start recognition:", err);
            isRecognitionActiveRef.current = false;
            setIsListening(false);

            if (err.message && err.message.includes("not-allowed")) {
                addAssistantMessage("🔒 Microphone access is required. Please allow microphone access when prompted.");
            } else {
                addAssistantMessage("Could not start voice recognition. Please try again.");
            }
        }
    }, [voiceSupported, addAssistantMessage, processAndSendMessage]);

    const stopVoiceRecognition = useCallback(() => {
        if (recognitionRef.current) {
            try {
                recognitionRef.current.stop();
            } catch (e) {
                // Ignore
            }
        }
        isRecognitionActiveRef.current = false;
        setIsListening(false);
    }, []);

    const handleVoiceClick = useCallback(() => {
        if (isListening) {
            stopVoiceRecognition();
        } else {
            startVoiceRecognition();
        }
    }, [isListening, startVoiceRecognition, stopVoiceRecognition]);

    const handleSendMessage = useCallback(() => {
        processAndSendMessage(inputValue);
    }, [inputValue, processAndSendMessage]);

    const handleKeyPress = useCallback((e) => {
        if (e.key === "Enter" && inputValue.trim()) {
            handleSendMessage();
        }
    }, [inputValue, handleSendMessage]);

    return (
        <>
            {/* Floating Button - Always visible, responsive positioning */}
            {!isOpen && (
                <button
                    data-floating-assistant="button"
                    onClick={() => setIsOpen(true)}
                    className="flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl transition-all hover:scale-110 hover:shadow-2xl
            fixed z-[99999]
            w-14 h-14 sm:w-14 sm:h-14
            right-4 sm:right-6
            bottom-20 sm:bottom-10"
                    style={{
                        border: 'none',
                        cursor: 'pointer'
                    }}
                    aria-label="Open Assistant"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-6 w-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                        />
                    </svg>
                </button>
            )}

            {/* Assistant Panel - Fixed to viewport, responsive layout */}
            {isOpen && (
                <div
                    data-floating-assistant="panel"
                    className={`flex flex-col bg-white shadow-2xl transition-all border border-gray-200
            fixed z-[99999]
            ${isMinimized
                            ? "h-14 w-80 rounded-xl"
                            : "rounded-xl sm:rounded-xl h-[calc(100vh-100px)] sm:h-[550px] w-full sm:w-[380px]"
                        }
            bottom-0 sm:bottom-24 right-0 sm:right-6
            max-w-full sm:max-w-[calc(100vw-48px)]
            max-h-[calc(100vh-80px)] sm:max-h-[calc(100vh-100px)]`}
                >
                    {/* Header */}
                    <div className="flex items-center justify-between rounded-t-xl sm:rounded-t-xl bg-gradient-to-r from-blue-600 to-purple-600 p-3 sm:p-4 text-white">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-5 w-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <span className="font-semibold">AI Assistant</span>
                                <p className="text-xs text-white/70">Here to help you navigate</p>
                            </div>
                        </div>
                        <div className="flex gap-1">
                            <button
                                onClick={() => setIsMinimized(!isMinimized)}
                                className="hover:bg-white/20 rounded-lg p-2 transition-colors"
                                aria-label={isMinimized ? "Maximize" : "Minimize"}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-4 w-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d={isMinimized ? "M4.5 15.75l7.5-7.5 7.5 7.5" : "M19.5 8.25l-7.5 7.5-7.5-7.5"}
                                    />
                                </svg>
                            </button>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="hover:bg-white/20 rounded-lg p-2 transition-colors"
                                aria-label="Close"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-4 w-4"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Content */}
                    {!isMinimized && (
                        <div className="flex flex-1 flex-col overflow-hidden">
                            {/* Messages Area */}
                            <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-2 sm:space-y-3 bg-gray-50">
                                {messages.map((message) => (
                                    <div
                                        key={message.id}
                                        className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                                    >
                                        <div
                                            className={`max-w-[90%] sm:max-w-[85%] rounded-2xl px-3 sm:px-4 py-2 sm:py-2.5 ${message.sender === "user"
                                                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-br-md"
                                                : "bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-md"
                                                }`}
                                        >
                                            <p className="text-xs sm:text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                                            <p className={`mt-1 text-xs ${message.sender === "user" ? "text-white/70" : "text-gray-400"}`}>
                                                {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                                            </p>
                                        </div>
                                    </div>
                                ))}

                                {isTyping && (
                                    <div className="flex justify-start">
                                        <div className="bg-white rounded-2xl rounded-bl-md px-4 py-3 shadow-sm border border-gray-100">
                                            <div className="flex space-x-1.5">
                                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div ref={messagesEndRef} />
                            </div>

                            {/* Input Area */}
                            <div className="border-t border-gray-200 p-2 sm:p-3 bg-white rounded-b-xl sm:rounded-b-xl">
                                {isListening && (
                                    <div className="mb-2 px-3 py-2 bg-red-50 rounded-lg border border-red-200">
                                        <div className="flex items-center justify-center gap-2 mb-1">
                                            <span className="relative flex h-3 w-3">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
                                            </span>
                                            <p className="text-xs text-red-700">
                                                Listening... Speak now (click mic to stop)
                                            </p>
                                        </div>
                                        {interimTranscript && (
                                            <p className="text-sm text-gray-700 text-center italic mt-1 bg-white/50 rounded px-2 py-1">
                                                &quot;{interimTranscript}&quot;
                                            </p>
                                        )}
                                    </div>
                                )}
                                <div className="flex gap-1.5 sm:gap-2">
                                    <input
                                        type="text"
                                        placeholder="Type your message..."
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        onKeyPress={handleKeyPress}
                                        className="flex-1 rounded-full border border-gray-300 px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all"
                                    />
                                    <button
                                        onClick={handleSendMessage}
                                        className="rounded-full bg-blue-600 p-2 sm:p-2.5 text-white transition-all hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed"
                                        aria-label="Send message"
                                        disabled={!inputValue.trim()}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="currentColor"
                                            className="h-4 w-4 sm:h-5 sm:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                                            />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={handleVoiceClick}
                                        className={`rounded-full p-2 sm:p-2.5 text-white transition-all ${isListening
                                            ? "bg-red-500 hover:bg-red-600"
                                            : voiceSupported
                                                ? "bg-purple-600 hover:bg-purple-700"
                                                : "bg-gray-400 cursor-not-allowed"
                                            }`}
                                        aria-label={isListening ? "Stop listening" : "Start voice input"}
                                        title={
                                            !voiceSupported
                                                ? "Voice not supported in this browser"
                                                : micPermission === "denied"
                                                    ? "Microphone blocked - click to see instructions"
                                                    : "Click to speak"
                                        }
                                        disabled={!voiceSupported}
                                    >
                                        {isListening ? (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={2}
                                                stroke="currentColor"
                                                className="h-4 w-4 sm:h-5 sm:w-5"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h12v12H6z" />
                                            </svg>
                                        ) : (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={2}
                                                stroke="currentColor"
                                                className="h-4 w-4 sm:h-5 sm:w-5"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
                                                />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </>
    );
}
