import routes from "./routes.";
import { useRoutes } from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import './App.css'

function App() {

  let router = useRoutes(routes)


  return (
    <div className="App">

      <Topbar />

      <div className="container">
        <Sidebar />
        {router}
      </div>
      
    </div>
  );
}

export default App;
