import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormPage from "./FormPage";
import SubmittedPage from "./SubmittedPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/submitted" element={<SubmittedPage />} />
      </Routes>
    </Router>
  );
}

export default App;