import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Statistics from "./components/Statistics";
import AppliedJob from "./components/AppliedJob";
import Error from "./components/Error";
import Blogs from "./components/Blogs";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Home />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/appliedJob" element={<AppliedJob />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
