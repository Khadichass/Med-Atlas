import React from 'react';

const AIChat: React.FC = () => {
  return (
    <section id="ai-chat" className="ai-chat">
      <h2>AI Medical Assistant</h2>
      <div className="ai-chat-content">
        <div className="ai-features">
          <div className="ai-feature">
            <h3>24/7 Medical Support</h3>
            <p>Get answers to your medical questions anytime</p>
          </div>
          <div className="ai-feature">
            <h3>Personalized Advice</h3>
            <p>Receive tailored medical information</p>
          </div>
          <div className="ai-feature">
            <h3>Health Tracking</h3>
            <p>Monitor your health progress</p>
          </div>
        </div>
        <div className="chat-interface">
          <div className="chat-messages">
            <p>Start a conversation with our AI assistant</p>
          </div>
          <div className="chat-input">
            <input type="text" placeholder="Type your question here..." />
            <button>Send</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIChat; 