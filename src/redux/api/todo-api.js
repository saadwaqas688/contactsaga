import defaultAxios from "axios";

const axios = defaultAxios.create({
  baseURL: "http://localhost:8000/api/users/",
  headers: { "Content-Type": "application/json" },
});

// Get All Todos
export const getAllTodos = async () => {
  try {
    const todos = await axios.get("http://localhost:8000/api/users/");

    return todos.data;
  } catch (err) {
    return console.error(err);
  }
};

export const getSingle = async (id) => {
  try {
    const result = await axios.get(
      `http://localhost:8000/api/users?id=${id}`
    );
    console.log(result.data);
    return result.data;
  } catch (err) {
    return console.error(err);
  }
};

// Create New Todo
export const createNewTodo = async (title) => {
  try {
    const todo = await axios.post(
      "http://localhost:8000/api/users/",
      title
    );
    console.log(todo);
    return todo.data;
  } catch (err) {
    return console.error(err);
  }
};

// Delete existed todo
export const deleteExistedTodo = async (id) => {
  console.log(id);
  try {
    await axios.delete(`http://localhost:8000/api/users/${id}`);

    return id;
  } catch (err) {
    return console.error(err);
  }
};

// update a contact
export const updateTodo = async (contact) => {
  try {
    const result = await axios.put(
      `http://localhost:8000/api/users/${contact._id}`,
      contact
    );
    return result.data;
  } catch (err) {
    return console.error(err);
  }
  // dispatch({
  //   type: UPDATE_CONTACT,
  //   payload: result.data,
  // });
};
