import { useState } from "react";

function MessageBoard() {
  const [message, setMessage] = useState([
    "Hello all! This is the first message.",
  ]);
  const [messageInput, setMessageInput] = useState("");

  const handleMessageChange = (event) => {
    setMessageInput(event.target.value);
  };

  const addMessage = (event) => {
    event.preventDefault();
    const newMessage = [...message];
    newMessage.push(messageInput);
    setMessage(newMessage);
  };

  const deleteMessage = (messageIndex) => {
    const deleteActiveMessage = [...message];
    deleteActiveMessage.splice(messageIndex, 1);
    setMessage(deleteActiveMessage);
  };

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            onChange={handleMessageChange}
          />
        </label>
        <button className="submit-message-button" onClick={addMessage}>
          Submit
        </button>
      </div>
      <div className="board">
        <ul>
          {message.map((text, index) => (
            <h1>
              <li key={index} className="message">
                {text}
                <button
                  className="delete-button"
                  onClick={() => deleteMessage(index)}
                >
                  x
                </button>
              </li>
            </h1>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default MessageBoard;
