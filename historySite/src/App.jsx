import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./Layouts/MainLayout";
import { About } from "./pages/About";
import { Today } from "./pages/Today";
import { Bydate } from "./pages/Bydate";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/byDate" element={<Bydate />}></Route>
            <Route index element={<Today />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
