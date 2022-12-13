import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerThunk } from "./users-thunk";
import { Navigate } from "react-router";
import Header from "../Components/Header";

const Register = () => {
  const { currentUser } = useSelector((state) => state.users);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("");
  const dispatch = useDispatch();
  const handleRegisterBtn = () => {
    dispatch(
      registerThunk({
        username,
        password,
        email,
        phone,
        firstName,
        lastName,
        role,
      })
    );
  };

  if (currentUser) {
    return <Navigate to={"/profile"} />;
  }

  return (
    <>
      <Header />
      <h1 className="text-center">Register</h1>
      <form>
        <div className="form-group p-2">
          <label for="inputFirstName">First Name</label>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            className="form-control"
            placeholder="First Name"
            value={firstName}
            type="text"
            id="inputFirstName"
          />
        </div>
        <div className="form-group p-2">
          <label for="inputLastName">Last Name</label>
          <input
            onChange={(e) => setLastName(e.target.value)}
            className="form-control"
            placeholder="Last Name"
            value={lastName}
            type="text"
            id="inputLastName"
          />
        </div>
        <div className="form-group p-2">
          <label for="inputUsername">Username</label>
          <input
            onChange={(e) => setUsername(e.target.value)}
            className="form-control"
            placeholder="Username"
            value={username}
            id="inputUsername"
          />
        </div>
        <div className="form-group p-2">
          <label for="inputPassword">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            placeholder="Password"
            type="password"
            value={password}
            id="inputPassword"
          />
        </div>
        <div className="form-group p-2">
          <label for="inputEmail">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            placeholder="Email"
            type="email"
            value={email}
            id="inputEmail"
          />
        </div>
        <div className="form-group p-2">
          <label for="inputPhone">Phone</label>
          <input
            onChange={(e) => setPhone(e.target.value)}
            className="form-control"
            placeholder="Phone Number"
            type="tel"
            value={phone}
            id="inputPhone"
          />
        </div>
        <div className="form-group p-2">
          <div class="form-check">
            <input
              onChange={(e) => setRole(e.target.value)}
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              value="Subscriber"
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Subscriber
            </label>
          </div>
          <div class="form-check">
            <input
              onChange={(e) => setRole(e.target.value)}
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              value="Admin"
            />
            <label class="form-check-label" for="flexRadioDefault2">
              Admin
            </label>
          </div>
        </div>

        <button
          className="btn btn-primary w-100 p-2"
          onClick={handleRegisterBtn}
        >
          Register
        </button>
      </form>
    </>
  );
};
export default Register;
