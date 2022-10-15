import "./App.scss";
import Home from "./pages/Home";
import Album from "./pages/Album";
import { Routes, Route } from "react-router-dom";
import Playing from "./components/Playing";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/album" element={<Album />} />
      </Routes>
      <Playing />
    </div>
  );
}

export default App;
