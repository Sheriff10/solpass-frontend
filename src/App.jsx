import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import DevDashboard from "./pages/developer/dashboard/DevDashboard";
import Endpoints from "./pages/developer/endpoints/Endpoints";
import ApiKey from "./pages/developer/apiKey/ApiKey";

function App() {
  return (
    <Routes>
      <Route path="/dev/dashboard" element={<DevDashboard />} />
      <Route path="/dev/endpoints" element={<Endpoints />} />
      <Route path="/dev/api-key" element={<ApiKey />} />
    </Routes>
  );
}

export default App;
