// Test frontend to backend connection
import { useEffect, useState } from "react"

function App() {
  const [status, setStatus] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/health')
      .then(res => res.json())
      .then(data => setStatus(data.status));
  }, []);

  return(
    <div>
      <h1>Finance Tracker</h1>
      <p>Backend Status: {status}</p>
    </div>
  );
}

export default App;