import "./App.scss";
import Home from "./pages/Home";
import Album from "./pages/Album";
import { Routes, Route } from "react-router-dom";
import Playing from "./components/Playing";
import Collections from "./pages/Collections";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/album" element={<Album />} />
        <Route path="/collections" element={<Collections />} />
      </Routes>
      <Playing />
    </div>
  );
}

export default App;
