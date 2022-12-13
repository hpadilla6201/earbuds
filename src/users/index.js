import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteUserThunk, findAllUsersThunk } from "./users-thunk";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
const Users = () => {
  const { users } = useSelector((state) => state.users);
  const { currentUser } = useSelector((state) => state.users);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findAllUsersThunk());
  }, [dispatch]);
  const deleteUserHandler = (id) => {
    dispatch(deleteUserThunk(id));
  };

  return (
    <>
      <Header />
      <h1>Total Users: {users.length}</h1>
      <ul className="list-group">
        {users.map((user, index) => (
          <li key={user._id} className="list-group-item">
            <Link to={`/profile/${user._id}`} className="text-decoration-none">
              {index + 1}. {user.username}
            </Link>
            {currentUser && currentUser.role === "Admin" && (
              <FontAwesomeIcon
                icon={faX}
                className="float-end"
                onClick={() => deleteUserHandler(user._id)}
              />
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Users;
