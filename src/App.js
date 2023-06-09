import logo from "./logo.svg";
import "./App.css";
import Login from "./Components/Login/Login";
import Customer from "./Components/State/Customer";
import ToDoList from "./Components/State/ToDoList";
function App() {
  const info = {
    name: "Trần Sơn",
    email: "Son.dip@gmail.com",
    address: "TP hồ chí minh",
    comment: [
      {
        tilte: "Nội dung 1",
        content: "Đây là nội dung 1",
      },
      {
        tilte: "Nội dung 2",
        content: "Đây là nội dung 2",
      },
      {
        tilte: "Nội dung 3",
        content: "Đây là nội dung 3",
      },
    ],
  };
  const customerInfo = {
    name: "Trần Sơn",
    email: "son.dip1@gmail.com",
  };
  return <ToDoList />;
}

export default App;
