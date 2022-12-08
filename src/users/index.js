import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { findAllUsersThunk } from "./users-thunk";
import Header from "../Components/Header";
import { Link } from "react-router-dom";

const Users = () => {
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findAllUsersThunk());
  }, [dispatch]);
  return (
    <>
      <Header />
      <h1>Users {users.length}</h1>
      <ul className="list-group">
        {users.map((user) => (
          <li key={user._id} className="list-group-item">
            <Link to={`/profile/${user._id}`}>
              {user.username} {user._id}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Users;
