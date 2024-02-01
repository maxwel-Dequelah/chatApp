import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function ChatPage() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-6 col-sm-12">
          <h1 className="text-center">Chat</h1>
          <div className="chat-window bg-light">
            <div className="chat-message">
              <div className="chat-message__avatar">
                <img
                  src="https://via.placeholder.com/50"
                  alt="avatar"
                  className="rounded-circle"
                />
              </div>
              <div className="chat-message__content bg-white p-2 rounded">
                <p className="mb-0">Hello, how can I help you?</p>
              </div>
            </div>
            <div className="chat-message chat-message--user">
              <div className="chat-message__avatar">
                <img
                  src="https://via.placeholder.com/50"
                  alt="avatar"
                  className="rounded-circle"
                />
              </div>
              <div className="chat-message__content bg-primary text-white p-2 rounded">
                <p className="mb-0">
                  Hi, I have a question about your product.
                </p>
              </div>
            </div>
            <div className="chat-message">
              <div className="chat-message__avatar">
                <img
                  src="https://via.placeholder.com/50"
                  alt="avatar"
                  className="rounded-circle"
                />
              </div>
              <div className="chat-message__content bg-white p-2 rounded">
                <p className="mb-0">Sure, what's your question?</p>
              </div>
            </div>
          </div>
          <form className="mt-auto">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Type your message here"
              />
              <button type="submit" className="btn btn-primary">
                <i className="bi bi-arrow-right-circle-fill"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
