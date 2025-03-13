import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTasksThunk } from "../../../redux/thunks/loadTasksThunk";
import { Field, Form } from "react-final-form";
import { newTask } from "../../../../tools/mockData";
import { saveTaskThunk } from "../../../redux/thunks/saveTaskThunk";
import { deleteTaskThunk } from "../../../redux/thunks/deleteTaskThunk";

export default function TasksHomePage() {
  const tasks = useSelector(state => state.tasks); // extracting data from 'state'
  const dispatch = useDispatch();

  function handleSubmit(values) {
    const task = { ...values };
    dispatch(saveTaskThunk(task));
  }

  function handleDelete(id) {
    console.log("Id to remove:", id);
    dispatch(deleteTaskThunk(id));
  }

  useEffect(() => {
    if (tasks.length === 0) {
      dispatch(loadTasksThunk()).catch(error => {
        alert("Fetching data failed", error);
      });
    }
  }, []);

  return (
    <div>
      <h1>Tasks</h1>

      <Form
        onSubmit={handleSubmit}
        initialValues={newTask}
        render={({ handleSubmit, submitting, pristine }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title">Title</label>
              <Field
                name="title"
                component="input"
                type="text"
                placeholder="Task Title"
              />
            </div>
            <div>
              <button type="submit" disabled={submitting || pristine}>
                Save Task
              </button>
            </div>
          </form>
        )}
      />
      <div>
        {tasks.map(task => {
          return (
            <div key={task.id}>
              {task.title}{" "}
              <button onClick={() => handleDelete(task.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
