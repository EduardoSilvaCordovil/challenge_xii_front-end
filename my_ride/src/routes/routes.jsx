import Error from "../components/Error";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
