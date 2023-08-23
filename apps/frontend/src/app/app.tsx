import Axios from 'axios-observable';
import { useEffect } from 'react';

export function App() {
  useEffect(() => {
    Axios.get('/api').subscribe(console.log);
  }, []);
  return (
    <div className="pagetitle">
      <h1>Welcome to Demyst Data</h1>
    </div>
  );
}
