import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import shortid from "shortid";
import {
  SET_TODO_TITLE_REQUESTED,
  CREATE_TODO_REQUESTED,
  UPDATE_TODO_REQUESTED,
  GET_SINGLE_REQUESTED,
} from "../redux/actions/todo-action";
import { useParams } from "react-router-dom";

const EditUser = ({
  title,
  setTodoTitle,
  createTodo,
  getTodo,
  contact,
  createeditTodo,
}) => {
  let { id } = useParams();
  const [state, setState] = useState({
    name: "",
    email: "",

    phone: "",
    gender: "Male",
    status: "Married",
    job: false,
  });
  //
  //
  //
  const { name, email, phone, gender, status, job } = state;
  useEffect(() => {
    loadPost();
  }, []);
  // if (contact) {
  //   setState(contact);
  // }
  // setState(contact);
  function handleChange(evt) {
    const value =
      evt.target.type === "checkbox"
        ? evt.target.checked
        : evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
      //   id: shortid.generate(),
    });
  }
  // setTodoTitle(state);
  const craeteContact = (e) => {
    e.preventDefault();
    // const new_contact = state;
    // createTodo(state);
    createeditTodo(state);
  };
  const loadPost = () => {
    // dispatch(getContact(id));
    getTodo(id);
  };

  useEffect(() => {
    if (contact != null) {
      // setName(contact.name);
      // setPhone(contact.phone);
      // setEmail(contact.email);
      setState(contact);
    }
    // dispatch(getContact(id));
  }, [contact]);
  return (
    <div className="card border-0 shadow">
      <div className="card-header">Add a Contact</div>
      <div className="card-body">
        <form onSubmit={(e) => craeteContact(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div>Gender</div>
          <div className="form-group">
            <label>
              Female
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={state.gender === "Female"}
                onChange={handleChange}
              />
            </label>
            <label>
              Male
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={state.gender === "Male"}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              <div className="heading">Status</div>
              <select
                name="status"
                onChange={handleChange}
                value={state.status}
              >
                <option value="Married">Married</option>
                <option value="Unmarried">Unmarried</option>
              </select>
            </label>
          </div>
          <label>
            <div className="heading">Job</div>
            <input
              type="checkbox"
              name="job"
              checked={state.job}
              onChange={handleChange}
            />
          </label>
          <div>
            <button className="btn btn-primary" type="submit">
              Create Contact
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// export default AddContact;

// TodoForm.propTypes = {
//   title: PropTypes.string,
//   setTodoTitle: PropTypes.func.isRequired,
//   createTodo: PropTypes.func.isRequired,
// };

// Get state to props
const mapStateToProps = (state) => ({
  title: state.todo.title,
  contact: state.todo.contact,
});

// Get dispatch / function to props
const mapDispatchToProps = (dispatch) => ({
  setTodoTitle: (title) =>
    dispatch({ type: SET_TODO_TITLE_REQUESTED, payload: title }),
  createTodo: (title) =>
    dispatch({ type: CREATE_TODO_REQUESTED, payload: title }),
  createeditTodo: (title) =>
    dispatch({ type: UPDATE_TODO_REQUESTED, payload: title }),

  getTodo: (id) =>
    dispatch({ type: GET_SINGLE_REQUESTED, payload: id }),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
