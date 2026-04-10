import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import FloatingWhatsApp from "./components/ui/FloatingWhatsApp";
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import CategoryPage from "./pages/CategoryPage";
import ProjectPage from "./pages/ProjectPage";

function App() {
  return (
    <HashRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:category" element={<CategoryPage />} />
          <Route path="/portfolio/:category/:project" element={<ProjectPage />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </HashRouter>
  );
}

export default App;
