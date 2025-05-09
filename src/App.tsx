
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Transform from "./pages/Transform";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Transition from "./pages/Transition";
import Cube from "./pages/Cube";
import Card3D from "./pages/Card3D";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/transition" element={<Transition />} />
          <Route path="/transform" element={<Transform />} />
          <Route path="/cube" element={<Cube />} />
          <Route path="/card3d" element={<Card3D />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
