import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import ContactPage from "./pages/contact";
import ServicesPage from "./pages/services";
import useFetch from "./hooks/useFetch";
import { useEffect } from "react";
import EntrenceForbiddenPage from "./pages/forbiden";

function App() {
  const { data, error } = useFetch("http://localhost:4000/api");
  useEffect(() => {
    console.log(`data == ${data}`);
  }, [data]);
  return (
    <Router>
      <Routes>
        {!error && data ? (
          <>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services" element={<ServicesPage />} />
          </>
        ) : (
          <Route path="*" element={<EntrenceForbiddenPage />} />
        )}
        {error && console.log(`this is fetch error ${error}`)}
      </Routes>
    </Router>
  );
}

export default App;
