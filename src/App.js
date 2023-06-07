
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home/Home"
import List from "./Pages/List/List"
import Hotel from "./Pages/Hotels/Hotel"

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="hotels" element={<List />} />
      <Route path="hotels/:id" element={<Hotel />} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
