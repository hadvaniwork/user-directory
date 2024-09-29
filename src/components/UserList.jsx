import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, selectUser } from "../store/userSlice";

const UserList = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const filteredUsers = users.filter((user) =>
    `${user.firstName} ${user.lastName}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error loading users: {error}</p>;

  return (
    <div>
      <input
        type='text'
        placeholder='Search users by name...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className='search-bar'
      />
      <div className='user-list'>
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            onClick={() => dispatch(selectUser(user))}
            className='user-item'
          >
            <h3>
              {user.firstName} {user.lastName}
            </h3>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.company.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
