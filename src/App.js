import Header from "./componets/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Men from "./Men";
import Women from "./Women";
import Kids from "./Kids";
import HomeLiving from "./HomeLiving";
import Beauty from "./Beauty";
import Footer from "./Footer";
import { GlobalStyles } from "./GlobalStyles";
import styled from "styled-components";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Sections>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Men" element={<Men />} />
          <Route path="/Women" element={<Women />} />
          <Route path="/Kids" element={<Kids />} />
          <Route path="/HomeLiving" element={<HomeLiving />} />
          <Route path="/Beauty" element={<Beauty />} />
        </Routes>
        <Footer />
      </Sections>
    </Router>
  );
}

const Sections = styled.section`
  margin-top: 6rem;
`;

export default App;
