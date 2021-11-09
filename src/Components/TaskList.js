import dustbin from "../assets/dustbin.png";
import check from "../assets/check.png";
import edit from "../assets/edit.png";

const TaskList = (props) => {
  const {
    tasks,
    handleDelete,
    setFormValues,
    formValues,
    setShowForm,
    setShowAddButton,
  } = props;

  return (
    <div>
      {tasks.map((e) => (
        <div className="list-view" key={e.id}>
          <div className={e.completed ? "left-col2" : "left-col"}>
            <img src={check} alt="check button" className="checkButton" />
          </div>
          <div className="center-col">
            <h2>{e.title}</h2>
            <p className="content">{e.content}</p>
            <p>{e.date}</p>
            <p>{e.completed ? "Completed" : "Not Completed"}</p>
          </div>
          <div className="right-col">
            <img
              src={edit}
              alt="edit button"
              className="delButton"
              onClick={() => {
                setFormValues(e);
                console.log(formValues);
                handleDelete(e.id);
                setShowForm(true);
                setShowAddButton(false);
              }}
            />
            <img
              src={dustbin}
              alt="delete button"
              className="delButton"
              onClick={() => handleDelete(e.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
