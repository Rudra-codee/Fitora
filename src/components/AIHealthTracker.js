import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { FiSend } from 'react-icons/fi';
import { getAIResponse } from '../services/aiService';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #1a1a1a;
  color: #ffffff;
`;

const ChatContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const WelcomeSection = styled.div`
  text-align: center;
  margin-top: 4rem;
  
  h1 {
    background: linear-gradient(90deg, #4F46E5, #EC4899);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  p {
    color: #94a3b8;
    font-size: 1.1rem;
  }
`;

const Message = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${props => props.isUser ? '#4F46E5' : '#10B981'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
`;

const MessageContent = styled.div`
  background-color: ${props => props.isUser ? '#2D2D2D' : '#262626'};
  padding: 1rem;
  border-radius: 12px;
  flex: 1;
  font-size: 1rem;
  line-height: 1.5;
`;

const InputContainer = styled.div`
  padding: 1.5rem;
  background-color: #1a1a1a;
  border-top: 1px solid #333;
`;

const InputWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
`;

const Input = styled.textarea`
  width: 100%;
  padding: 1rem 3rem 1rem 1rem;
  background-color: #2D2D2D;
  border: 1px solid #404040;
  border-radius: 12px;
  color: #ffffff;
  font-size: 1rem;
  resize: none;
  min-height: 60px;
  max-height: 200px;
  outline: none;
  
  &:focus {
    border-color: #4F46E5;
  }
`;

const SendButton = styled.button`
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  background: none;
  border: none;
  color: #4F46E5;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 50%;
  
  &:hover {
    background-color: rgba(79, 70, 229, 0.1);
  }
  
  &:disabled {
    color: #666;
    cursor: not-allowed;
  }
`;

const LoadingDots = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  
  &::after {
    content: '.';
    animation: dots 1.5s steps(5, end) infinite;
  }
  
  @keyframes dots {
    0%, 20% { content: '.'; }
    40% { content: '..'; }
    60% { content: '...'; }
    80%, 100% { content: ''; }
  }
`;

const ErrorMessage = styled(MessageContent)`
  background-color: #3f1f1f;
  border: 1px solid #ef4444;
  color: #fca5a5;
`;

const AIHealthTracker = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = {
      content: input.trim(),
      isUser: true,
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await getAIResponse(input.trim());
      
      const aiMessage = {
        content: response,
        isUser: false,
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error getting AI response:', error);
      const errorMessage = {
        content: error.message || "I apologize, but I'm having trouble connecting right now. Please try again later.",
        isUser: false,
        isError: true
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Container>
      <ChatContainer ref={chatContainerRef}>
        {messages.length === 0 && (
          <WelcomeSection>
            <h1>AI Health Assistant</h1>
            <p>Ask me anything about your health, wellness, or medical concerns.</p>
          </WelcomeSection>
        )}
        {messages.map((message, index) => (
          <Message key={index}>
            <Avatar isUser={message.isUser}>
              {message.isUser ? 'U' : 'AI'}
            </Avatar>
            {message.isError ? (
              <ErrorMessage>
                {message.content}
              </ErrorMessage>
            ) : (
              <MessageContent isUser={message.isUser}>
                {message.content}
              </MessageContent>
            )}
          </Message>
        ))}
        {isLoading && (
          <Message>
            <Avatar isUser={false}>AI</Avatar>
            <MessageContent>
              <LoadingDots>Thinking</LoadingDots>
            </MessageContent>
          </Message>
        )}
      </ChatContainer>
      
      <InputContainer>
        <InputWrapper>
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about your health..."
            rows={1}
            disabled={isLoading}
          />
          <SendButton 
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
          >
            <FiSend size={20} />
          </SendButton>
        </InputWrapper>
      </InputContainer>
    </Container>
  );
};

export default AIHealthTracker; 