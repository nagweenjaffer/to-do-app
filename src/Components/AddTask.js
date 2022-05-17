const AddTask = (props) => {
  const { newtodo, formValues, setFormValues } = props;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formValues.completed === "true") {
      formValues.completed = true;
    } else {
      formValues.completed = false;
    }

    newtodo({
      id: Math.floor(Math.random() * 1000),
      title: formValues.title,
      content: formValues.content,
      date: formValues.date,
      completed: formValues.completed,
    });
  };
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    console.log(formValues);
  };
  return (
    <div>
      <form>
        <div>
          <h4>Title</h4>
          <input
            type="text"
            defaultValue={formValues.title}
            onChange={handleChange}
            name="title"
          />
        </div>
        <div>
          <h4>Description</h4>
          <textarea
            name="content"
            cols="30"
            rows="5"
            defaultValue={formValues.content}
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <h4>Date</h4>
          <input
            type="date"
            name="date"
            defaultValue={formValues.date}
            onChange={handleChange}
          />
        </div>
        <h4>Completed</h4>
        <div className="radio-btn">
          <input
            type="radio"
            name="completed"
            onChange={handleChange}
            value="true"
                     />
          <label>Yes</label>
          <br />
          <input
            type="radio"
            name="completed"
            onChange={handleChange}
            value="false"
                     />
          <label>No</label>
        </div>

        <button type="submit" onClick={handleSubmit}>
          Save
        </button>
      </form>
    </div>
  );
};

export default AddTask;
