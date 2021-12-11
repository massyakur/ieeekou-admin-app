import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/topbar/Navbar";
import "./app.css";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Sidebar />
        <div className="others">Home Page</div>
      </div>
    </div>
  );
}

export default App;
