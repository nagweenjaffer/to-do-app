import { useState, useEffect } from "react";
import AddTask from "./AddTask";
import "../index.css";
import TaskList from "./TaskList";
import list from "../assets/list.png";

// const inistList = [
//   {
//     id: 1,
//     title: "grocery",
//     content: "buy bananas and apples",
//     date: "2021-02-02",
//     isCompleted: "true",
//   },
//   {
//     id: 2,
//     title: "grocery",
//     content: "buy bananas and apples",
//     date: "2021-02-02",
//     isCompleted: "false",
//   },
//   {
//     id: 3,
//     title: "shopping",
//     content: "blah blah",
//     date: "2021-02-02",
//     isCompleted: "true",
//   },
// ];

const Home = () => {
  const [tasks, setTasks] = useState(null);
  const [formValues, setFormValues] = useState({
    id: null,
    title: null,
    content: null,
    date: null,
    completed: null,
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
        setIsPending(false);
      })
      .catch((e) => console.log(e));
  }, []);

  const handleDelete = (id) => {
    setTasks(tasks?.filter((e) => e.id !== id));
  };

  const newtodo = (task) => {
    const newData = [task, ...tasks];
    setTasks(newData);
    console.log(tasks);
    setShowForm(!showForm);
    setShowAddButton(!showAddButton);
    setFormValues({
      id: null,
      title: null,
      content: null,
      date: null,
      completed: null,
    });
  };

  const [showForm, setShowForm] = useState(false);
  const [showAddButton, setShowAddButton] = useState(true);
  const [isPending, setIsPending] = useState(true);

  return (
    <div className="container">
      <div className="toDoIcon">
        <img src={list} alt="" />
      </div>
      {showAddButton ? (
        <div>
          <button
            className="add-btn"
            onClick={() => {
              setShowForm(!showForm);
              setShowAddButton(!showAddButton);
            }}
          >
            {" "}
            + Add New Task
          </button>
        </div>
      ) : null}

      {showForm ? (
        <AddTask
          newtodo={newtodo}
          formValues={formValues}
          setFormValues={setFormValues}
        />
      ) : null}
      {isPending && <h2>Loading...</h2>}
      {tasks && (
        <TaskList
          tasks={tasks}
          handleDelete={handleDelete}
          formValues={setFormValues}
          setFormValues={setFormValues}
          showForm={showForm}
          setShowForm={setShowForm}
          showAddButton={showAddButton}
          setShowAddButton={setShowAddButton}
        />
      )}
    </div>
  );
};

export default Home;
