
import axios from "axios";
import { useState } from "react";

function TodoData({ todoposts, Datafetching }) {
  const [TodoTitle, setTodoTitle] = useState("");
  const [TodoDescp, setTodoDescp] = useState("");
  const [Id, setId] = useState(null);
 

  const fetchTodo = async (id) => {
    try {
      const response = await axios.get(process.env.BACKEND_LINK + "/api/" + id);
      console.log(response);
      setTodoTitle(response?.data?.TodoTitle);
      setTodoDescp(response?.data?.TodoDescp);
      setId(response?.data?._id);
    } catch (error) {
      console.log("error in fetch Todo", error);
    }
  };

  const handleUpdateTodopost = async (e) => {
    const datas = {
      TodoTitle: TodoTitle,
      TodoDescp: TodoDescp,
    };
    try {
      console.log(TodoTitle, TodoDescp);
      const res = await axios.put(
        `${process.env.BACKEND_LINK}/api/update-todoposts/${Id}`,
        datas
      );
      if (res?.status === 200) {
        alert("Updated!!");
        Datafetching();
      }
      setTodoTitle("");
      setTodoDescp("");
    } catch (error) {
      console.log("error in fetch Todo", error);
    }
  };

  return (
    <>
      <div className="TodoData-container">
        <div className="Todo-center">
          {todoposts
            ?.map((TodoPost) => (
              <div className="card" key={TodoPost?._id}>
                <div className="card-title">{TodoPost?.TodoTitle}</div>
                <div className="card-descp">{TodoPost?.TodoDescp}</div>
                <button
                  className="edit-btn"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() => fetchTodo(TodoPost?._id)}
                >
                  Edit
                </button>
              </div>
            ))
            .reverse()}
        </div>
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <input
                  className="title-input1 fs-5"
                  id="exampleModalLabel"
                  placeholder="Title"
                  name="TodoTitle"
                  value={TodoTitle}
                  onChange={(e) => setTodoTitle(e.target.value)}
                />
              </div>
              <textarea
                className="modal-body title-input2"
                placeholder="Description......"
                name="TodoDescp"
                value={TodoDescp}
                onChange={(e) => setTodoDescp(e.target.value)}
              />
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={(e) => handleUpdateTodopost()}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoData;
