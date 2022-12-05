import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "./users-thunk";
import { Navigate, useNavigate } from "react-router";
import Header from "../Components/Header";

const Login = () => {
  const { currentUser } = useSelector((state) => state.users);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  //eslint-disable-next-line
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
      <h1>Login</h1>
      <input
        onChange={(e) => setUsername(e.target.value)}
        className="form-control"
        placeholder="username"
        value={username}
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        className="form-control"
        placeholder="password"
        type="password"
        value={password}
      />
      <button className="btn btn-primary w-100" onClick={handleLoginBtn}>
        Login
      </button>
    </>
  );
};
export default Login;
