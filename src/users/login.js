import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "./users-thunk";
import { Navigate, useNavigate } from "react-router";
import Header from "../Components/Header";

const Login = () => {
  const { currentUser } = useSelector((state) => state.users);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLoginBtn = () => {
    try {
      dispatch(loginThunk({ username, password }));
      navigate("/profile");
    } catch (e) {}
  };
  if (currentUser) {
    return <Navigate to={"/profile"} />;
  }
  return (
    <>
      <Header />
      <h1 className="text-center">Login</h1>
      <form>
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
        <button className="btn btn-primary w-100" onClick={handleLoginBtn}>
          Login
        </button>
      </form>
    </>
  );
};
export default Login;
