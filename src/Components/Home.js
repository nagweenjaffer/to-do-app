import { useState, useEffect } from "react";
import AddTask from "./AddTask";
import "../index.css";
import TaskList from "./TaskList";
import list from "../assets/list.png";

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
        //to take only the first 10 records
        setTasks(data.slice(0,10));
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
        <img src={list} alt="list-img" />
      </div>
      {showAddButton &&
        <div>
          <button
            className="add-btn"
            onClick={() => {
              setShowForm(!showForm);
              setShowAddButton(!showAddButton);
            }}
          >
            + Add New Task
          </button>
        </div>
      }
      {showForm &&
        <AddTask
          newtodo={newtodo}
          formValues={formValues}
          setFormValues={setFormValues}
        />
      }
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
