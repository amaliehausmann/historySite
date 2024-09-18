import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./Layouts/MainLayout";
import { Since } from "./pages/Since";
import { Today } from "./pages/Today";
import { Bydate } from "./pages/Bydate";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="byDate" element={<Bydate />}></Route>
            <Route index element={<Today />}></Route>
            <Route path="since" element={<Since />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
