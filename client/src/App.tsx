// Test frontend to backend connection
import { useEffect, useState } from "react"
import Login from "./pages/Login";


function App() {
  const [status, setStatus] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/health')
      .then(res => res.json())
      .then(data => setStatus(data.status));
  }, []);

  return(
    <div>
      <h1 style={{ textAlign: "center" }}>Finance Tracker</h1>
      <p style={{ textAlign: "center" }}>
        Backend Status: {status}
      </p>

      <Login />
    </div>
  );
}

export default App;