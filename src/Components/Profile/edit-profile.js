import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Header";
import { updateUserThunk } from "../../users/users-thunk";

const EditProfile = () => {
  const { currentUser } = useSelector((state) => state.users);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const dispatch = useDispatch();
  const handleEditButton = () => {
    dispatch(
      updateUserThunk({ username, password, email, phone, firstName, lastName })
    );
  };

  return (
    <>
      <Header />

      <h1 className="text-center">Edit Profile</h1>
      <form>
        <div className="form-group p-2">
          <label for="inputFirstName">First Name</label>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            className="form-control"
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
            value={username}
            id="inputUsername"
          />
        </div>
        <div className="form-group p-2">
          <label for="inputPassword">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
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
            type="tel"
            value={phone}
            id="inputPhone"
          />
        </div>

        <button
          className="btn btn-primary w-100 p-2"
          onClick={handleEditButton}
        >
          Submit Changes
        </button>
      </form>
    </>
  );
};
export default EditProfile;
