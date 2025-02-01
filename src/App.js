import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ComingSoon from "./pages/ComingSoon";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<ComingSoon />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
