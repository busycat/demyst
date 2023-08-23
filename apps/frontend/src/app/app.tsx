import Axios from 'axios-observable';
import { useEffect } from 'react';

export function App() {
  useEffect(() => {
    Axios.get('/api').subscribe(console.log);
  }, []);
  return (
    <div className="pagetitle">
      <h1>Hello World</h1>
    </div>
  );
}
