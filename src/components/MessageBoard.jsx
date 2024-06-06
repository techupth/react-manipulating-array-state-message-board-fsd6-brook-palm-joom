import { useState } from "react";

function MessageBoard() {
  const [messageInput, setMessageInput] = useState("");
  const [messageList, setMessageList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMessage = [...messageList];
    newMessage.push(messageInput);
    setMessageList(newMessage);
    setMessageInput("");
  };

  const handleRemove = (index) => {
    const newMessage = [...messageList];
    newMessage.splice(index, 1);
    setMessageList(newMessage);
  };

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <form class="message-input-container" onSubmit={handleSubmit}>
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={messageInput}
            onChange={(event) => {
              setMessageInput(event.target.value);
            }}
          />
        </label>
        <button className="submit-message-button" type="submit">Submit</button>
      </form>
      <div className="board">
        {messageList.map((item, index) => {
          return (
            <div className="message" key={index}>
              <h1>{item}</h1>
              <button
                className="delete-button"
                onClick={() => {
                  handleRemove(index);
                }}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MessageBoard;