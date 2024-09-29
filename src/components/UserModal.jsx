import { useSelector, useDispatch } from "react-redux";
import { clearSelectedUser } from "../store/userSlice";

const UserModal = () => {
  const dispatch = useDispatch();
  const selectedUser = useSelector((state) => state.users.selectedUser);

  if (!selectedUser) {
    return null;
  }

  return (
    <div
      className='modal-overlay'
      onClick={() => dispatch(clearSelectedUser())}
    >
      <div className='modal-content' onClick={(e) => e.stopPropagation()}>
        <button
          onClick={() => dispatch(clearSelectedUser())}
          className='close-button'
        >
          &times;
        </button>
        <h2>User Details</h2>
        <p>
          <strong>First Name:</strong> {selectedUser.firstName}
        </p>
        <p>
          <strong>Last Name:</strong> {selectedUser.lastName}
        </p>
        <p>
          <strong>Email:</strong> {selectedUser.email}
        </p>
        <p>
          <strong>Phone:</strong> {selectedUser.phone}
        </p>
        <p>
          <strong>Company:</strong> {selectedUser.company.name}
        </p>
        <p>
          <strong>Company Address:</strong>{" "}
          {selectedUser.company.address.address},{" "}
          {selectedUser.company.address.city},{" "}
          {selectedUser.company.address.state}
        </p>
        <p>
          <strong>Department:</strong> {selectedUser.company.department}
        </p>
        <p>
          <strong>Title:</strong> {selectedUser.company.title}
        </p>
      </div>
    </div>
  );
};

export default UserModal;
