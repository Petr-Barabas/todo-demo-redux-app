import * as taskApi from "../../api/taskApi";
import { deleteTaskSuccess } from "../actions/taskAction";

export function deleteTaskThunk(taskId) {
  return async function (dispatch) {
    try {
      await taskApi.deleteTask(taskId);
      dispatch(deleteTaskSuccess(taskId));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };
}
