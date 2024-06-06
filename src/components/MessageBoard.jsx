import { useState } from "react";

function MessageBoard() {
const [messageInput, setMessageInput] = useState("");
const [messageShow, setMessageShow] = useState([]);

const handleInput = (event)=>{
  setMessageInput(event.target.value)
}

const addMessage = ()=>{
  const newMessage = [...messageShow];
  newMessage.push(messageInput);
  setMessageShow(newMessage);
}

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
            value={messageInput}
            onChange={handleInput}
          />
        </label>
        <button className="submit-message-button" onClick={addMessage}>Submit</button>
      </div>
      <div class="board">
          {messageShow.map((item, index)=>{
            return (
            <div className="message" key={index}>
            <h1>{item}</h1>
            <button className="delete-button">x</button>
            </div>
         )
          })}
      </div>
    </div>
  );
}

export default MessageBoard;
