import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import ErrorPage from "./Views/Erro";
import Home from "./Views/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
