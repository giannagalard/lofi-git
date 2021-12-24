import Home from "./pages/Home";
import User from "./pages/User";
import NotFound from "./pages/NotFound";
import { Routes, Route, useLocation } from "react-router-dom";
import { Footer } from "./components/Footer";
// import CherryBomb from "./fonts/CherryBomb.ttf";

function App() {
  let location = useLocation();
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/user/:username" element={<User />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer location={location.pathname} />
      </header>
    </div>
  );
}
export default App;