import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import EducationPage from "./pages/EducationPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Toaster position="top-center" containerStyle={{top: 60}} />
            <div className="@container max-w-360 m-auto bg-background-dark text-slate-100 antialiased">
                <BrowserRouter>
                    <Navbar/>
                    <ScrollToTop />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/skills" element={<SkillsPage />} />
                        <Route path="/education" element={<EducationPage />} />
                        <Route path="/projects" element={<ProjectsPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                    </Routes>
                    <Footer/>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
