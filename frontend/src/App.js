import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Home from './pages/Home';
import Hello from './pages/Hello';
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
      <div className="pages">
        <Routes>
          <Route 
            path="/"
            element={<Home/>}
          />
          <Route 
            path="/hello"
            element={<Hello/>}
          />
        </Routes>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
