import React, { useState } from "react";
import axios from "axios";

function InputData({ setTodoPost }) {
  const [TodoTitle, setTodoTitle] = useState("");
  const [TodoDescp, setTodoDescp] = useState("");

  const handleAddTodo = async () => {

    const datas={
      TodoTitle:TodoTitle,
      TodoDescp:TodoDescp
    }
    try {
          await axios.post(process.env.BACKEND_LINK + "/api/add", datas);
          setTodoTitle("");
          setTodoDescp("");
          const GetTodoResponse = await axios.get(process.env.BACKEND_LINK + "/api")
          setTodoPost(GetTodoResponse?.data);
        } 
        catch (error) {
      console.log("Error in Add todo:", error);
    }
  };

  return (
    <>
      <div className="Input-container">
        <div className="input-card">
          <input
            type="text"
            className="title-input1"
            placeholder="Title"
            value={TodoTitle}
            onChange={(e) => setTodoTitle(e.target.value)}
          />
          <textarea
            type="text"
            className="title-input2"
            placeholder="Description......"
            value={TodoDescp}
            onChange={(e) => setTodoDescp(e.target.value)}
          />
          <button className="input-data-button" onClick={handleAddTodo}>
            Add
          </button>
        </div>
      </div>
    </>
  );
}

export default InputData;
