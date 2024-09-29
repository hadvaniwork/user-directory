import UserList from "./components/UserList";
import UserModal from "./components/UserModal";
import "./styles.css";

function App() {
  return (
    <div className='app-container'>
      <h1>User Management</h1>
      <UserList />
      <UserModal />
    </div>
  );
}

export default App;
