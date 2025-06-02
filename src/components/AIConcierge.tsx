
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Send, X, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const AIConcierge = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Welcome to Chronos Elite! I'm your personal timepiece concierge. How may I assist you in finding your perfect luxury watch today?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const predefinedResponses = {
    'investment': "For investment pieces, I recommend Patek Philippe Nautilus, Rolex Daytona, or Audemars Piguet Royal Oak. These models have shown exceptional appreciation over the past decade.",
    'gift': "For gifting, consider the recipient's style. A Cartier Santos offers timeless elegance, while an Omega Speedmaster appeals to adventure enthusiasts. What's the occasion?",
    'first': "For your first luxury watch, I suggest starting with a Rolex Submariner or Omega Seamaster - both are versatile, hold value well, and perfect for any occasion.",
    'budget': "Our collection spans from $6,500 for Omega pieces to $150,000+ for Richard Mille complications. What's your comfortable investment range?",
    'authentication': "Every timepiece undergoes our 127-point authentication process by certified horologists. We provide full documentation and lifetime authenticity guarantee.",
    'service': "We offer comprehensive servicing, restoration, and maintenance. Our master watchmakers are factory-trained across all brands we represent."
  };

  const getAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('investment') || message.includes('value') || message.includes('appreciate')) {
      return predefinedResponses.investment;
    }
    if (message.includes('gift') || message.includes('present')) {
      return predefinedResponses.gift;
    }
    if (message.includes('first') || message.includes('beginner') || message.includes('start')) {
      return predefinedResponses.first;
    }
    if (message.includes('budget') || message.includes('price') || message.includes('cost')) {
      return predefinedResponses.budget;
    }
    if (message.includes('authentic') || message.includes('real') || message.includes('genuine')) {
      return predefinedResponses.authentication;
    }
    if (message.includes('service') || message.includes('repair') || message.includes('maintenance')) {
      return predefinedResponses.service;
    }
    
    return "That's an excellent question! Our expert team would be delighted to provide personalized guidance. Would you like to schedule a private consultation to discuss your timepiece needs in detail?";
  };

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(inputValue),
        sender: 'ai',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      {/* Floating Chat Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F4E99B] text-black shadow-2xl"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
        
        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-[#D4AF37] animate-ping opacity-20" />
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 w-96 h-[500px] z-50"
          >
            <div className="glass rounded-xl h-full flex flex-col">
              {/* Header */}
              <div className="p-4 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F4E99B] flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#D4AF37]">AI Concierge</h3>
                    <p className="text-xs text-gray-400">Luxury Timepiece Expert</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.sender === 'user'
                          ? 'bg-[#D4AF37] text-black'
                          : 'bg-white/10 text-white'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className="text-xs mt-1 opacity-60">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </motion.div>
                ))}
                
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white/10 p-3 rounded-lg">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                        <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t border-white/10">
                <div className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about timepieces..."
                    className="flex-1 bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                  />
                  <Button
                    onClick={sendMessage}
                    disabled={!inputValue.trim() || isTyping}
                    className="bg-[#D4AF37] text-black hover:bg-[#F4E99B]"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIConcierge;
